/**
 * Конфігурація маршрутів для Vue Router
 * Підтримує мультимовність через параметр locale
 */

const routes = [
	{
		path: '/',
		redirect: to => {
			// Отримуємо збережену мову з localStorage або використовуємо 'ua' за замовчуванням
			const savedLocale = localStorage.getItem('locale') || 'ua';
			return `/${savedLocale}`;
		}
	},
	{
		path: '/',
		component: () => import('../layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import('../views/Home.vue'),
				meta: {
					title: 'home.meta.title',
					description: 'home.meta.description'
				}
			},
			{
				path: 'about',
				name: 'About',
				component: () => import('../views/About.vue'),
				meta: {
					title: 'about.meta.title',
					description: 'about.meta.description'
				}
			},
			{
				path: 'services',
				name: 'Services',
				component: () => import('../views/Services.vue'),
				meta: {
					title: 'services.meta.title',
					description: 'services.meta.description'
				}
			},
			{
				path: 'portfolio',
				name: 'Portfolio',
				component: () => import('../views/Portfolio.vue'),
				meta: {
					title: 'portfolio.meta.title',
					description: 'portfolio.meta.description'
				}
			},
			{
				path: 'contact',
				name: 'Contact',
				component: () => import('../views/Contact.vue'),
				meta: {
					title: 'contact.meta.title',
					description: 'contact.meta.description'
				}
			}
		]
	},
	{
		path: '/:locale(ua|en|ru)',
		component: () => import('../layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import('../views/Home.vue'),
				meta: {
					title: 'home.meta.title',
					description: 'home.meta.description'
				}
			},
			{
				path: 'about',
				name: 'About',
				component: () => import('../views/About.vue'),
				meta: {
					title: 'about.meta.title',
					description: 'about.meta.description'
				}
			},
			{
				path: 'services',
				name: 'Services',
				component: () => import('../views/Services.vue'),
				meta: {
					title: 'services.meta.title',
					description: 'services.meta.description'
				}
			},
			{
				path: 'portfolio',
				name: 'Portfolio',
				component: () => import('../views/Portfolio.vue'),
				meta: {
					title: 'portfolio.meta.title',
					description: 'portfolio.meta.description'
				}
			},
			{
				path: 'contact',
				name: 'Contact',
				component: () => import('../views/Contact.vue'),
				meta: {
					title: 'contact.meta.title',
					description: 'contact.meta.description'
				}
			}
		]
	},
	  {
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('../views/NotFound.vue')
		}
]

export default routes