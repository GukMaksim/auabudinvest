# ТОВ «Аквабудінвест» - Corporate Website

Сучасний корпоративний веб-сайт для будівельної компанії ТОВ «Аквабудінвест» з підтримкою багатомовності, SEO-оптимізацією та системою відгуків.

## 🚀 Технології

### Frontend
- **Vue 3** - прогресивний JavaScript фреймворк
- **Vite** - швидкий інструмент збірки
- **Vue Router** - офіційний роутер для Vue.js
- **Vue I18n** - інтернаціоналізація (українська/англійська)
- **@vueuse/head** - управління meta-тегами для SEO
- **CSS3** - стилізація без фреймворків


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
├── package.json           # Залежності та скрипти
├── vite.config.js         # Конфігурація Vite
└── README.md              # Документація
```

## 🛠️ Встановлення та запуск

### Передумови
- Node.js (версія 16 або вище)
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

### 4. Запуск проекту

#### Режим розробки:
```bash
npm run dev
```

### 5. Відкрийте браузер
- Frontend: http://localhost:5173

## 🌍 Багатомовність

Сайт підтримує українську, російську та англійську мови:
- Українська: `/ua/...`
- Російська: `/ru/...`
- Англійська: `/en/...`

Переклади знаходяться в:
- `src/locales/ua.json` - українські переклади
- `src/locales/ru.json` - російські переклади
- `src/locales/en.json` - англійські переклади

## 📱 Responsive Design

Сайт адаптований для всіх пристроїв:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (до 767px)

## 🔒 Безпека

- **Helmet.js** - захист HTTP заголовків

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

### Рекомендовані хостинги
- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Heroku, DigitalOcean, AWS
- **Database**: MongoDB Atlas, AWS DocumentDB

### Налаштування Google Analytics
Додайте Google Analytics код в `index.html`

### Налаштування Google Maps
Оновіть компонент Contact.vue з вашим API ключем

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