# ТОВ «Аквабудінвест» - Corporate Website

Сучасний корпоративний веб-сайт для будівельної компанії ТОВ «Аквабудінвест» з підтримкою багатомовності, SEO-оптимізацією та системою відгуків.

## 🚀 Технології

### Frontend
- **Vue 3** - прогресивний JavaScript фреймворк
- **Vite** - швидкий інструмент збірки
- **Vue Router** - офіційний роутер для Vue.js
- **Vue I18n** - інтернаціоналізація (українська/англійська)
- **@vueuse/head** - управління meta-тегами для SEO
- **Axios** - HTTP клієнт для API запитів
- **CSS3** - стилізація без фреймворків

### Backend
- **Node.js** - серверне середовище
- **Express.js** - веб-фреймворк
- **MongoDB** - NoSQL база даних
- **Mongoose** - ODM для MongoDB
- **Helmet** - безпека HTTP заголовків
- **Express Rate Limit** - обмеження запитів
- **Validator** - валідація даних

## 📁 Структура проекту

```
auabudinvest/
├── public/                 # Статичні файли
├── src/
│   ├── components/         # Vue компоненти
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   └── LanguageSwitcher.vue
│   ├── views/             # Сторінки
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Services.vue
│   │   ├── Portfolio.vue
│   │   ├── Testimonials.vue
│   │   └── Contact.vue
│   ├── layouts/           # Макети
│   │   └── MainLayout.vue
│   ├── router/            # Налаштування роутингу
│   │   └── routes.js
│   ├── locales/           # Переклади
│   │   ├── ua.json
│   │   └── en.json
│   ├── assets/            # Ресурси
│   ├── App.vue            # Головний компонент
│   └── main.js            # Точка входу
├── server.js              # Backend сервер
├── .env.example           # Приклад змінних середовища
├── package.json           # Залежності та скрипти
├── vite.config.js         # Конфігурація Vite
└── README.md              # Документація
```

## 🛠️ Встановлення та запуск

### Передумови
- Node.js (версія 16 або вище)
- MongoDB (локально або MongoDB Atlas)
- Git

### 1. Клонування репозиторію
```bash
git clone <repository-url>
cd auabudinvest
```

### 2. Встановлення залежностей
```bash
npm install
```

### 3. Налаштування змінних середовища
```bash
# Скопіюйте файл прикладу
copy .env.example .env

# Відредагуйте .env файл з вашими налаштуваннями
```

### 4. Запуск MongoDB

#### Локально:
```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
```

#### Або використовуйте MongoDB Atlas:
1. Створіть акаунт на [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Створіть кластер
3. Отримайте connection string
4. Оновіть `MONGODB_URI` в `.env` файлі

### 5. Запуск проекту

#### Режим розробки (Frontend + Backend):
```bash
npm run dev:full
```

#### Окремо Frontend:
```bash
npm run dev
```

#### Окремо Backend:
```bash
npm run server
```

### 6. Відкрийте браузер
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## 🌐 API Endpoints

### Публічні маршрути
- `GET /api/health` - Перевірка стану сервера
- `GET /api/reviews` - Отримання схвалених відгуків
- `POST /api/reviews` - Подача нового відгуку
- `POST /api/contact` - Подача контактної форми

### Адміністративні маршрути
- `GET /api/admin/reviews` - Всі відгуки (потребує аутентифікації)
- `PATCH /api/admin/reviews/:id/approve` - Схвалення відгуку
- `GET /api/admin/contacts` - Всі повідомлення з контактної форми

## 🌍 Багатомовність

Сайт підтримує українську та англійську мови:
- Українська: `/ua/...`
- Англійська: `/en/...`

Переклади знаходяться в:
- `src/locales/ua.json` - українські переклади
- `src/locales/en.json` - англійські переклади

## 📱 Responsive Design

Сайт адаптований для всіх пристроїв:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (до 767px)

## 🔒 Безпека

- **Helmet.js** - захист HTTP заголовків
- **Rate Limiting** - обмеження кількості запитів
- **Input Validation** - валідація всіх вхідних даних
- **CORS** - налаштування крос-доменних запитів
- **Data Sanitization** - очищення користувацьких даних

## 📈 SEO Оптимізація

- Унікальні meta-теги для кожної сторінки
- Open Graph теги для соціальних мереж
- Семантична HTML розмітка
- Оптимізовані URL структури
- Sitemap.xml (додати вручну)
- Robots.txt (додати вручну)

## 🚀 Деплой

### Production Build
```bash
npm run build
```

### Запуск в production режимі
```bash
NODE_ENV=production npm start
```

### Рекомендовані хостинги
- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Heroku, DigitalOcean, AWS
- **Database**: MongoDB Atlas, AWS DocumentDB

## 📝 Додаткові налаштування

### Налаштування email сповіщень
Додайте в `.env` файл:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@aquabudinvest.ua
EMAIL_TO=info@aquabudinvest.ua
```

### Налаштування Google Analytics
Додайте Google Analytics код в `index.html`

### Налаштування Google Maps
Оновіть компонент Contact.vue з вашим API ключем

## 🐛 Відомі проблеми та рішення

### MongoDB Connection Error
```bash
# Переконайтеся, що MongoDB запущено
# Перевірте MONGODB_URI в .env файлі
```

### Port Already in Use
```bash
# Змініть PORT в .env файлі
# Або зупиніть процес на порту
lsof -ti:3001 | xargs kill -9
```

## 🤝 Внесок у розробку

1. Fork проекту
2. Створіть feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit зміни (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

## 📄 Ліцензія

Цей проект ліцензовано під MIT License - дивіться файл [LICENSE](LICENSE) для деталей.

## 📞 Контакти

**ТОВ «Аквабудінвест»**
- 📧 Email: info@aquabudinvest.ua
- 📱 Телефон: +380 XX XXX XX XX
- 🌐 Веб-сайт: https://aquabudinvest.ua
- 📍 Адреса: м. Київ, вул. Прикладна, 1

---

**Розроблено з ❤️ для ТОВ «Аквабудінвест»**