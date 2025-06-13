import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import routes from './router/routes.js'
import ua from './locales/ua.json'
import en from './locales/en.json'
import ru from './locales/ru.json'

/**
 * Створення екземпляру роутера з історією браузера
 */
const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// Якщо це зміна мови (шлях залишається тим самим, змінюється тільки locale)
		if (to.path.replace(`/${to.params.locale}`, '') === from.path.replace(`/${from.params.locale}`, '')) {
			return false; // Не прокручуємо сторінку
		}
		// Для інших навігацій
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	}
})

/**
 * Налаштування інтернаціоналізації
 */
const i18n = createI18n({
	legacy: false,
	locale: localStorage.getItem('locale') || 'ua',
	fallbackLocale: 'ua',
	messages: {
		ua,
		en,
		ru
	}
})

/**
 * Створення екземпляру для управління head тегами
 */
const head = createHead()

/**
 * Ініціалізація Vue додатку
 */
const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(head)

app.mount('#app')