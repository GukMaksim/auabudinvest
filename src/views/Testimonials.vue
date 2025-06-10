<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import axios from 'axios'

const { t } = useI18n()

/**
 * SEO мета-теги для сторінки відгуків
 */
useHead({
  title: computed(() => t('testimonials.meta.title')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('testimonials.meta.description'))
    },
    {
      property: 'og:title',
      content: computed(() => t('testimonials.meta.title'))
    },
    {
      property: 'og:description',
      content: computed(() => t('testimonials.meta.description'))
    }
  ]
})

/**
 * Стан компонента
 */
const testimonials = ref([])
const currentPage = ref(1)
const itemsPerPage = 6
const isSubmitting = ref(false)
const showSuccessMessage = ref(false)
const hoverRating = ref(0)

/**
 * Форма відгуку
 */
const reviewForm = ref({
  name: '',
  email: '',
  company: '',
  projectType: '',
  rating: 0,
  message: ''
})

/**
 * Обчислювані властивості
 */
const totalReviews = computed(() => testimonials.value.length)

const averageRating = computed(() => {
  if (testimonials.value.length === 0) return 0
  const sum = testimonials.value.reduce((acc, testimonial) => acc + testimonial.rating, 0)
  return sum / testimonials.value.length
})

const satisfiedClients = computed(() => {
  if (testimonials.value.length === 0) return 0
  const satisfied = testimonials.value.filter(t => t.rating >= 4).length
  return Math.round((satisfied / testimonials.value.length) * 100)
})

const totalPages = computed(() => {
  return Math.ceil(testimonials.value.length / itemsPerPage)
})

const paginatedTestimonials = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return testimonials.value.slice(start, end)
})

/**
 * Методи
 */
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

async function loadTestimonials() {
  try {
    // Спроба завантажити відгуки з API
    const response = await axios.get('/api/reviews')
    testimonials.value = response.data
  } catch (error) {
    console.log('API недоступний, використовуємо тестові дані')
    // Тестові дані для демонстрації
    testimonials.value = [
      {
        id: 1,
        name: 'Олександр Петренко',
        company: 'ТОВ "Металпром"',
        email: 'o.petrenko@metalprom.ua',
        rating: 5,
        message: 'Відмінна робота! Завод побудували точно в строк, якість виконання на найвищому рівні. Рекомендую всім!',
        projectType: 'Промислове будівництво',
        date: '2023-11-15',
        approved: true
      },
      {
        id: 2,
        name: 'Марина Коваленко',
        company: 'ТОВ "Ритейл Девелопмент"',
        email: 'm.kovalenko@retail.ua',
        rating: 5,
        message: 'Професійна команда, сучасні технології, відмінний результат. Торговельний центр перевершив всі очікування!',
        projectType: 'Комерційне будівництво',
        date: '2023-10-22',
        approved: true
      },
      {
        id: 3,
        name: 'Ігор Мельник',
        company: 'ТОВ "Житлобуд"',
        email: 'i.melnyk@zhytlobud.ua',
        rating: 4,
        message: 'Якісне будівництво житлового комплексу. Невеликі затримки, але результат того вартий.',
        projectType: 'Житлове будівництво',
        date: '2023-09-10',
        approved: true
      },
      {
        id: 4,
        name: 'Тетяна Сидоренко',
        company: 'ТОВ "Логістик Плюс"',
        email: 't.sydorenko@logistic.ua',
        rating: 5,
        message: 'Логістичний центр побудований з урахуванням всіх наших потреб. Автоматизація працює бездоганно!',
        projectType: 'Промислове будівництво',
        date: '2023-08-05',
        approved: true
      },
      {
        id: 5,
        name: 'Андрій Волков',
        company: 'ТОВ "Офіс Девелопмент"',
        email: 'a.volkov@office.ua',
        rating: 5,
        message: 'Сучасний офісний центр з екологічними технологіями. Співпраця була приємною та продуктивною.',
        projectType: 'Комерційне будівництво',
        date: '2023-07-18',
        approved: true
      },
      {
        id: 6,
        name: 'Світлана Іваненко',
        company: 'ТОВ "Техно Виробництво"',
        email: 's.ivanenko@techno.ua',
        rating: 4,
        message: 'Виробничий комплекс відповідає всім технічним вимогам. Чисті приміщення виконані на відмінно.',
        projectType: 'Промислове будівництво',
        date: '2023-06-12',
        approved: true
      }
    ]
  }
}

async function submitReview() {
  if (reviewForm.value.rating === 0) {
    alert('Будь ласка, поставте оцінку')
    return
  }
  
  isSubmitting.value = true
  
  try {
    // Спроба відправити на API
    await axios.post('/api/reviews', {
      name: reviewForm.value.name,
      email: reviewForm.value.email,
      company: reviewForm.value.company,
      projectType: reviewForm.value.projectType,
      rating: reviewForm.value.rating,
      message: reviewForm.value.message,
      date: new Date().toISOString(),
      approved: false // Потребує модерації
    })
    
    showSuccessMessage.value = true
    resetForm()
    
    // Приховати повідомлення через 5 секунд
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 5000)
    
  } catch (error) {
    console.log('API недоступний, додаємо локально для демонстрації')
    
    // Додати локально для демонстрації
    const newReview = {
      id: Date.now(),
      name: reviewForm.value.name,
      email: reviewForm.value.email,
      company: reviewForm.value.company || 'Приватна особа',
      projectType: reviewForm.value.projectType || 'Інше',
      rating: reviewForm.value.rating,
      message: reviewForm.value.message,
      date: new Date().toISOString(),
      approved: true // Для демонстрації одразу показуємо
    }
    
    testimonials.value.unshift(newReview)
    showSuccessMessage.value = true
    resetForm()
    
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 5000)
  }
  
  isSubmitting.value = false
}

function resetForm() {
  reviewForm.value = {
    name: '',
    email: '',
    company: '',
    projectType: '',
    rating: 0,
    message: ''
  }
}

/**
 * Ініціалізація
 */
onMounted(() => {
  loadTestimonials()
})
</script>

<template>
  <div class="testimonials">
    <!-- Hero секція -->
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-content">
          <h1 class="page-title">{{ $t('testimonials.title') }}</h1>
          <p class="page-subtitle">
            {{ $t('testimonials.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Статистика -->
    <section class="testimonials-stats section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">{{ totalReviews }}</div>
            <div class="stat-label">{{ $t('testimonials.total_reviews') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ averageRating.toFixed(1) }}</div>
            <div class="stat-label">{{ $t('testimonials.average_rating') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ satisfiedClients }}%</div>
            <div class="stat-label">{{ $t('testimonials.satisfied_clients') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Відгуки -->
    <section class="testimonials-list section">
      <div class="container">
        <h2 class="section-title">{{ $t('testimonials.client_reviews') }}</h2>
        
        <div v-if="testimonials.length > 0" class="testimonials-grid">
          <div 
            v-for="testimonial in paginatedTestimonials" 
            :key="testimonial.id"
            class="testimonial-card card"
          >
            <div class="testimonial-header">
              <div class="client-info">
                <div class="client-avatar">
                  {{ testimonial.name.charAt(0).toUpperCase() }}
                </div>
                <div class="client-details">
                  <h4 class="client-name">{{ testimonial.name }}</h4>
                  <p class="client-company">{{ testimonial.company }}</p>
                </div>
              </div>
              <div class="rating">
                <span 
                  v-for="star in 5" 
                  :key="star"
                  class="star"
                  :class="{ filled: star <= testimonial.rating }"
                >
                  ★
                </span>
              </div>
            </div>
            
            <div class="testimonial-content">
              <p class="testimonial-text">{{ testimonial.message }}</p>
              <div class="testimonial-meta">
                <span class="project-type">{{ testimonial.projectType }}</span>
                <span class="date">{{ formatDate(testimonial.date) }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="no-testimonials">
          <p>Поки що немає відгуків. Будьте першим, хто залишить відгук!</p>
        </div>
        
        <!-- Пагінація -->
        <div v-if="totalPages > 1" class="pagination">
          <button 
            @click="currentPage--" 
            :disabled="currentPage === 1"
            class="pagination-btn"
          >
            ← {{ $t('common.previous') }}
          </button>
          
          <span class="pagination-info">
            {{ currentPage }} {{ $t('common.of') }} {{ totalPages }}
          </span>
          
          <button 
            @click="currentPage++" 
            :disabled="currentPage === totalPages"
            class="pagination-btn"
          >
            {{ $t('common.next') }} →
          </button>
        </div>
      </div>
    </section>

    <!-- Форма додавання відгуку -->
    <section class="add-review section">
      <div class="container">
        <div class="review-form-wrapper">
          <h2 class="section-title">{{ $t('testimonials.add_review') }}</h2>
          <p class="form-description">
            {{ $t('testimonials.form_description') }}
          </p>
          
          <form @submit.prevent="submitReview" class="review-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">{{ $t('testimonials.form.name') }} *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="reviewForm.name" 
                  required
                  :placeholder="$t('testimonials.form.name_placeholder')"
                />
              </div>
              
              <div class="form-group">
                <label for="email">{{ $t('testimonials.form.email') }} *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="reviewForm.email" 
                  required
                  :placeholder="$t('testimonials.form.email_placeholder')"
                />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="company">{{ $t('testimonials.form.company') }}</label>
                <input 
                  type="text" 
                  id="company" 
                  v-model="reviewForm.company" 
                  :placeholder="$t('testimonials.form.company_placeholder')"
                />
              </div>
              
              <div class="form-group">
                <label for="projectType">{{ $t('testimonials.form.project_type') }}</label>
                <select id="projectType" v-model="reviewForm.projectType">
                  <option value="">{{ $t('testimonials.form.select_project_type') }}</option>
                  <option value="industrial">{{ $t('services.industrial.title') }}</option>
                  <option value="plumbing">{{ $t('services.plumbing.title') }}</option>
                  <option value="electrical">{{ $t('services.electrical.title') }}</option>
                  <option value="other">{{ $t('common.other') }}</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label>{{ $t('testimonials.form.rating') }} *</label>
              <div class="rating-input">
                <button 
                  v-for="star in 5" 
                  :key="star"
                  type="button"
                  @click="reviewForm.rating = star"
                  @mouseenter="hoverRating = star"
                  @mouseleave="hoverRating = 0"
                  class="star-btn"
                  :class="{ 
                    active: star <= reviewForm.rating,
                    hover: hoverRating > 0 && star <= hoverRating
                  }"
                >
                  ★
                </button>
              </div>
            </div>
            
            <div class="form-group">
              <label for="message">{{ $t('testimonials.form.message') }} *</label>
              <textarea 
                id="message" 
                v-model="reviewForm.message" 
                required
                rows="5"
                :placeholder="$t('testimonials.form.message_placeholder')"
              ></textarea>
            </div>
            
            <div class="form-actions">
              <button 
                type="submit" 
                class="submit-btn btn-primary"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">{{ $t('common.submitting') }}...</span>
                <span v-else>{{ $t('testimonials.form.submit') }}</span>
              </button>
            </div>
          </form>
          
          <!-- Повідомлення про успіх -->
          <div v-if="showSuccessMessage" class="success-message">
            <div class="success-icon">✓</div>
            <h3>{{ $t('testimonials.success.title') }}</h3>
            <p>{{ $t('testimonials.success.message') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.testimonials-stats {
  background: #f8f9fa;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #6c757d;
  font-weight: 500;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.testimonial-card {
  padding: 1.5rem;
}

.testimonial-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.client-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.client-avatar {
  width: 50px;
  height: 50px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
}

.client-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #2c3e50;
}

.client-company {
  color: #6c757d;
  font-size: 0.9rem;
}

.rating {
  display: flex;
  gap: 2px;
}

.star {
  color: #ddd;
  font-size: 1.2rem;
}

.star.filled {
  color: #ffc107;
}

.testimonial-content {
  line-height: 1.6;
}

.testimonial-text {
  margin-bottom: 1rem;
  color: #495057;
  font-style: italic;
}

.testimonial-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #6c757d;
}

.project-type {
  background: #e9ecef;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-weight: 500;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.pagination-btn {
  padding: 0.75rem 1.5rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;
}

.pagination-btn:hover:not(:disabled) {
  background: #0056b3;
}

.pagination-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.pagination-info {
  color: #6c757d;
  font-weight: 500;
}

.add-review {
  background: #f8f9fa;
}

.review-form-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.form-description {
  color: #6c757d;
  margin-bottom: 2rem;
  text-align: center;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2c3e50;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #dee2e6;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
}

.rating-input {
  display: flex;
  gap: 5px;
  margin-top: 0.5rem;
}

.star-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: #ddd;
  cursor: pointer;
  transition: color 0.3s ease;
}

.star-btn:hover,
.star-btn.active,
.star-btn.hover {
  color: #ffc107;
}

.form-actions {
  text-align: center;
  margin-top: 2rem;
}

.submit-btn {
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #0056b3;
}

.submit-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.success-message {
  text-align: center;
  padding: 2rem;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 10px;
  margin-top: 2rem;
}

.success-icon {
  font-size: 3rem;
  color: #28a745;
  margin-bottom: 1rem;
}

.success-message h3 {
  color: #155724;
  margin-bottom: 0.5rem;
}

.success-message p {
  color: #155724;
}

.no-testimonials {
  text-align: center;
  padding: 3rem;
  color: #6c757d;
  font-size: 1.1rem;
}

/* Адаптивність */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .review-form-wrapper {
    padding: 2rem;
  }
  
  .testimonial-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .testimonial-meta {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .page-hero {
    padding: 2rem 0;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
  
  .review-form-wrapper {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .client-avatar {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
</style>