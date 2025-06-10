<script setup>
import { ref, computed } from 'vue';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

/**
 * SEO мета-теги для сторінки портфоліо
 */
useHead({
	title: computed(() => t('portfolio.meta.title')),
	meta: [
		{
			name: 'description',
			content: computed(() => t('portfolio.meta.description')),
		},
		{
			property: 'og:title',
			content: computed(() => t('portfolio.meta.title')),
		},
		{
			property: 'og:description',
			content: computed(() => t('portfolio.meta.description')),
		},
	],
});

/**
 * Стан компонента
 */
const activeFilter = ref('all');
const selectedProject = ref(null);

/**
 * Фільтри для проектів
 */
const filters = [
	{ key: 'all', label: 'Всі проекти' },
	{ key: 'industrial', label: 'Промислові' },
	{ key: 'commercial', label: 'Комерційні' },
	{ key: 'residential', label: 'Житлові' },
];

/**
 * Дані проектів
 */
const projects = [
	{
		id: 1,
		title: 'Завод з виробництва металоконструкцій',
		category: 'Промислове будівництво',
		type: 'industrial',
		image: '../src/assets/project-1.jpg',
		description:
			'Будівництво сучасного заводу з виробництва металоконструкцій площею 5000 кв.м. Проект включав повний цикл робіт від фундаменту до введення в експлуатацію.',
		year: '2023',
		area: '5000 кв.м',
		duration: '8 місяців',
		client: 'ТОВ "Металпром"',
		technologies: ['Металоконструкції', 'Бетонні роботи', 'Кранове обладнання', 'Вентиляція'],
	},
	{
		id: 2,
		title: 'Торговельний центр "Ocean Plaza"',
		category: 'Комерційне будівництво',
		type: 'commercial',
		image: '../src/assets/project-2.jpg',
		description:
			'Будівництво багатофункціонального торговельного центру з підземним паркінгом та сучасними інженерними системами.',
		year: '2022',
		area: '12000 кв.м',
		duration: '14 місяців',
		client: 'ТОВ "Ритейл Девелопмент"',
		technologies: ['Монолітне будівництво', 'Скляні фасади', 'Кондиціонування', 'Пожежна безпека'],
	},
	{
		id: 3,
		title: 'Житловий комплекс "Сонячний"',
		category: 'Житлове будівництво',
		type: 'residential',
		image: '../src/assets/project-3.jpg',
		description:
			'Будівництво сучасного житлового комплексу з енергоефективними технологіями та розвиненою інфраструктурою.',
		year: '2023',
		area: '25000 кв.м',
		duration: '18 місяців',
		client: 'ТОВ "Житлобуд"',
		technologies: ['Енергоефективність', 'Розумний дім', 'Ландшафтний дизайн', 'Паркінг'],
	},
	{
		id: 4,
		title: 'Логістичний центр "Карго"',
		category: 'Промислове будівництво',
		type: 'industrial',
		image: '../src/assets/project-4.jpg',
		description:
			'Будівництво великого логістичного центру з автоматизованими системами зберігання та обробки вантажів.',
		year: '2022',
		area: '15000 кв.м',
		duration: '10 місяців',
		client: 'ТОВ "Логістик Плюс"',
		technologies: ['Автоматизація', 'Складське обладнання', 'Вантажні ліфти', 'Системи безпеки'],
	},
	{
		id: 5,
		title: 'Офісний центр "Бізнес Парк"',
		category: 'Комерційне будівництво',
		type: 'commercial',
		image: '../src/assets/project-5.jpg',
		description: 'Будівництво сучасного офісного центру класу А з екологічними технологіями та зеленими зонами.',
		year: '2023',
		area: '8000 кв.м',
		duration: '12 місяців',
		client: 'ТОВ "Офіс Девелопмент"',
		technologies: ['Зелені технології', 'Розумне освітлення', 'Клімат-контроль', "Безбар'єрне середовище"],
	},
	{
		id: 6,
		title: 'Виробничий комплекс "Техно"',
		category: 'Промислове будівництво',
		type: 'industrial',
		image: '../src/assets/project-6.jpg',
		description: 'Будівництво виробничого комплексу для високотехнологічного виробництва з чистими приміщеннями.',
		year: '2021',
		area: '7000 кв.м',
		duration: '9 місяців',
		client: 'ТОВ "Техно Виробництво"',
		technologies: ['Чисті приміщення', 'Спеціальна вентиляція', 'Контроль якості', 'Автоматизація'],
	},
];

/**
 * Фільтровані проекти
 */
const filteredProjects = computed(() => {
	if (activeFilter.value === 'all') {
		return projects;
	}
	return projects.filter((project) => project.type === activeFilter.value);
});

/**
 * Відкриття модального вікна
 */
function openModal(project) {
	selectedProject.value = project;
	document.body.style.overflow = 'hidden';
}

/**
 * Закриття модального вікна
 */
function closeModal() {
	selectedProject.value = null;
	document.body.style.overflow = 'auto';
}
</script>

<template>
	<div class="portfolio">
		<!-- Hero секція -->
		<section class="page-hero">
			<div class="container">
				<div class="page-hero-content">
					<h1 class="page-title">{{ $t('portfolio.title') }}</h1>
					<p class="page-subtitle">Ознайомтеся з нашими завершеними проектами та досягненнями у сфері будівництва</p>
				</div>
			</div>
		</section>

		<!-- Фільтри проектів -->
		<section class="portfolio-filters">
			<div class="container">
				<div class="filter-buttons">
					<button
						v-for="filter in filters"
						:key="filter.key"
						@click="activeFilter = filter.key"
						:class="['filter-btn', { active: activeFilter === filter.key }]">
						{{ filter.label }}
					</button>
				</div>
			</div>
		</section>

		<!-- Галерея проектів -->
		<section class="portfolio-gallery section">
			<div class="container">
				<div class="projects-grid">
					<div
						v-for="project in filteredProjects"
						:key="project.id"
						class="project-card card"
						@click="openModal(project)">
						<div class="project-image">
							<img
								:src="project.image"
								:alt="project.title" />
							<div class="project-overlay">
								<div class="project-info">
									<h3 class="project-title">{{ project.title }}</h3>
									<p class="project-category">{{ project.category }}</p>
									<button class="view-project-btn">
										{{ $t('portfolio.view_project') }}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Модальне вікно проекту -->
		<div
			v-if="selectedProject"
			class="modal-overlay"
			@click="closeModal">
			<div
				class="modal-content"
				@click.stop>
				<button
					class="modal-close"
					@click="closeModal">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor">
						<path
							d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
					</svg>
				</button>

				<div class="modal-body">
					<div class="modal-image">
						<img
							:src="selectedProject.image"
							:alt="selectedProject.title" />
					</div>

					<div class="modal-info">
						<h2 class="modal-title">{{ selectedProject.title }}</h2>
						<p class="modal-category">{{ selectedProject.category }}</p>
						<p class="modal-description">{{ selectedProject.description }}</p>

						<div class="project-details">
							<div class="detail-item"><strong>Рік завершення:</strong> {{ selectedProject.year }}</div>
							<div class="detail-item"><strong>Площа:</strong> {{ selectedProject.area }}</div>
							<div class="detail-item"><strong>Тривалість:</strong> {{ selectedProject.duration }}</div>
							<div class="detail-item"><strong>Клієнт:</strong> {{ selectedProject.client }}</div>
						</div>

						<div class="project-technologies">
							<h4>Використані технології:</h4>
							<div class="tech-tags">
								<span
									v-for="tech in selectedProject.technologies"
									:key="tech"
									class="tech-tag">
									{{ tech }}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
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

.portfolio-filters {
	background: #f8f9fa;
	padding: 2rem 0;
}

.filter-buttons {
	display: flex;
	justify-content: center;
	gap: 1rem;
	flex-wrap: wrap;
}

.filter-btn {
	padding: 0.75rem 1.5rem;
	background: white;
	border: 2px solid #dee2e6;
	border-radius: 25px;
	cursor: pointer;
	font-weight: 500;
	transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
	background: #007bff;
	color: white;
	border-color: #007bff;
}

.projects-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 2rem;
}

.project-card {
	cursor: pointer;
	overflow: hidden;
	padding: 0;
	transition: transform 0.3s ease;
}

.project-card:hover {
	transform: translateY(-5px);
}

.project-image {
	position: relative;
	height: 250px;
	overflow: hidden;
}

.project-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
	transform: scale(1.05);
}

.project-overlay {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
	display: flex;
	align-items: flex-end;
	padding: 1.5rem;
	opacity: 0;
	transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
	opacity: 1;
}

.project-info {
	color: white;
}

.project-title {
	font-size: 1.2rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
}

.project-category {
	font-size: 0.9rem;
	opacity: 0.9;
	margin-bottom: 1rem;
}

.view-project-btn {
	background: #007bff;
	color: white;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 5px;
	cursor: pointer;
	font-weight: 500;
	transition: background 0.3s ease;
}

.view-project-btn:hover {
	background: #0056b3;
}

/* Модальне вікно */
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	padding: 2rem;
}

.modal-content {
	background: white;
	border-radius: 10px;
	max-width: 900px;
	width: 100%;
	max-height: 90vh;
	overflow-y: auto;
	position: relative;
}

.modal-close {
	position: absolute;
	top: 1rem;
	right: 1rem;
	background: rgba(0, 0, 0, 0.5);
	color: white;
	border: none;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1001;
}

.modal-body {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
}

.modal-image img {
	width: 100%;
	height: 100%;
	border-radius: 10px 0 0 10px;
	object-fit: cover;
	overflow: hidden;
}

.modal-info {
	padding: 2rem;
}

.modal-title {
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	color: #2c3e50;
}

.modal-category {
	color: #007bff;
	font-weight: 500;
	margin-bottom: 1rem;
}

.modal-description {
	line-height: 1.6;
	margin-bottom: 2rem;
	color: #6c757d;
}

.project-details {
	margin-bottom: 2rem;
}

.detail-item {
	margin-bottom: 0.5rem;
	color: #2c3e50;
}

.project-technologies h4 {
	margin-bottom: 1rem;
	color: #2c3e50;
}

.tech-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}

.tech-tag {
	background: #e9ecef;
	color: #495057;
	padding: 0.25rem 0.75rem;
	border-radius: 15px;
	font-size: 0.8rem;
	font-weight: 500;
}

/* Адаптивність */
@media (max-width: 768px) {
	.page-title {
		font-size: 2rem;
	}

	.page-subtitle {
		font-size: 1rem;
	}

	.projects-grid {
		grid-template-columns: 1fr;
	}

	.modal-body {
		grid-template-columns: 1fr;
	}

	.modal-image img {
		border-radius: 10px 10px 0 0;
	}

	.filter-buttons {
		gap: 0.5rem;
	}

	.filter-btn {
		padding: 0.5rem 1rem;
		font-size: 0.9rem;
	}
}

@media (max-width: 480px) {
	.page-hero {
		padding: 2rem 0;
	}

	.page-title {
		font-size: 1.5rem;
	}

	.modal-overlay {
		padding: 1rem;
	}

	.modal-info {
		padding: 1.5rem;
	}

	.project-image {
		height: 200px;
	}
}
</style>
