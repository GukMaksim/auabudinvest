const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const validator = require('validator')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://aquabudinvest.ua', 'https://www.aquabudinvest.ua']
    : ['http://localhost:5173', 'http://127.0.0.1:5173']
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
})

const reviewLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 review submissions per hour
  message: {
    error: 'Too many review submissions, please try again later.'
  }
})

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 contact form submissions per hour
  message: {
    error: 'Too many contact form submissions, please try again later.'
  }
})

app.use(limiter)

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/aquabudinvest'

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB')
})
.catch((error) => {
  console.error('MongoDB connection error:', error)
  process.exit(1)
})

// Review Schema
const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email format']
  },
  company: {
    type: String,
    trim: true,
    maxlength: 100,
    default: 'Приватна особа'
  },
  projectType: {
    type: String,
    enum: ['industrial', 'plumbing', 'electrical', 'other'],
    default: 'other'
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  approved: {
    type: Boolean,
    default: false
  },
  ipAddress: {
    type: String,
    required: true
  },
  userAgent: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

// Contact Form Schema
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email format']
  },
  phone: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || validator.isMobilePhone(v, 'uk-UA')
      },
      message: 'Invalid phone number format'
    }
  },
  company: {
    type: String,
    trim: true,
    maxlength: 100
  },
  service: {
    type: String,
    enum: ['industrial', 'plumbing', 'electrical', 'consultation', 'other', ''],
    default: ''
  },
  budget: {
    type: String,
    enum: ['under-100k', '100k-500k', '500k-1m', 'over-1m', ''],
    default: ''
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2000
  },
  processed: {
    type: Boolean,
    default: false
  },
  ipAddress: {
    type: String,
    required: true
  },
  userAgent: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)
const Contact = mongoose.model('Contact', contactSchema)

// Utility functions
function sanitizeInput(input) {
  if (typeof input !== 'string') return input
  return validator.escape(input.trim())
}

function getClientIP(req) {
  return req.headers['x-forwarded-for'] || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress ||
         (req.connection.socket ? req.connection.socket.remoteAddress : null)
}

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})

// Get approved reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const skip = (page - 1) * limit

    const reviews = await Review.find({ approved: true })
      .select('-email -ipAddress -userAgent')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await Review.countDocuments({ approved: true })

    res.json({
      reviews,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching reviews:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Submit new review
app.post('/api/reviews', reviewLimiter, async (req, res) => {
  try {
    const { name, email, company, projectType, rating, message } = req.body

    // Validation
    if (!name || !email || !rating || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, rating, message' 
      })
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' })
    }

    if (message.length > 1000) {
      return res.status(400).json({ error: 'Message too long (max 1000 characters)' })
    }

    // Check for duplicate reviews from same email
    const existingReview = await Review.findOne({ 
      email: email.toLowerCase(),
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } // Last 24 hours
    })

    if (existingReview) {
      return res.status(429).json({ 
        error: 'You can only submit one review per day' 
      })
    }

    // Create new review
    const review = new Review({
      name: sanitizeInput(name),
      email: email.toLowerCase(),
      company: company ? sanitizeInput(company) : 'Приватна особа',
      projectType: projectType || 'other',
      rating: parseInt(rating),
      message: sanitizeInput(message),
      approved: false, // Requires manual approval
      ipAddress: getClientIP(req),
      userAgent: req.headers['user-agent'] || 'Unknown'
    })

    await review.save()

    res.status(201).json({ 
      success: true, 
      message: 'Review submitted successfully. It will be published after moderation.' 
    })

  } catch (error) {
    console.error('Error submitting review:', error)
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Validation error', 
        details: Object.values(error.errors).map(e => e.message)
      })
    }
    
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Submit contact form
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      company, 
      service, 
      budget, 
      message 
    } = req.body

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: firstName, lastName, email, message' 
      })
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    if (phone && !validator.isMobilePhone(phone, 'uk-UA')) {
      return res.status(400).json({ error: 'Invalid phone number format' })
    }

    if (message.length > 2000) {
      return res.status(400).json({ error: 'Message too long (max 2000 characters)' })
    }

    // Create new contact form submission
    const contact = new Contact({
      firstName: sanitizeInput(firstName),
      lastName: sanitizeInput(lastName),
      email: email.toLowerCase(),
      phone: phone ? sanitizeInput(phone) : '',
      company: company ? sanitizeInput(company) : '',
      service: service || '',
      budget: budget || '',
      message: sanitizeInput(message),
      processed: false,
      ipAddress: getClientIP(req),
      userAgent: req.headers['user-agent'] || 'Unknown'
    })

    await contact.save()

    res.status(201).json({ 
      success: true, 
      message: 'Contact form submitted successfully. We will get back to you soon.' 
    })

  } catch (error) {
    console.error('Error submitting contact form:', error)
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Validation error', 
        details: Object.values(error.errors).map(e => e.message)
      })
    }
    
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Admin routes (basic implementation)
app.get('/api/admin/reviews', async (req, res) => {
  try {
    // In production, add proper authentication here
    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .lean()

    res.json({ reviews })
  } catch (error) {
    console.error('Error fetching admin reviews:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.patch('/api/admin/reviews/:id/approve', async (req, res) => {
  try {
    // In production, add proper authentication here
    const { id } = req.params
    
    const review = await Review.findByIdAndUpdate(
      id, 
      { approved: true }, 
      { new: true }
    )

    if (!review) {
      return res.status(404).json({ error: 'Review not found' })
    }

    res.json({ success: true, review })
  } catch (error) {
    console.error('Error approving review:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.get('/api/admin/contacts', async (req, res) => {
  try {
    // In production, add proper authentication here
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .lean()

    res.json({ contacts })
  } catch (error) {
    console.error('Error fetching admin contacts:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
}

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error)
  res.status(500).json({ error: 'Internal server error' })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully')
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed')
    process.exit(0)
  })
})

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully')
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed')
    process.exit(0)
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
})