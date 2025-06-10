<script setup>
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

/**
 * SEO мета-теги для сторінки "Про нас"
 */
useHead({
	title: computed(() => t('about.meta.title')),
	meta: [
		{
			name: 'description',
			content: computed(() => t('about.meta.description')),
		},
		{
			property: 'og:title',
			content: computed(() => t('about.meta.title')),
		},
		{
			property: 'og:description',
			content: computed(() => t('about.meta.description')),
		},
	],
});
</script>

<template>
	<div class="about">
		<!-- Hero секція -->
		<section class="page-hero">
			<div class="container">
				<div class="page-hero-content">
					<h1 class="page-title">{{ $t('about.title') }}</h1>
					<p class="page-subtitle">{{ $t('about.description') }}</p>
				</div>
			</div>
		</section>

		<!-- Основна інформація -->
		<section class="about-content section">
			<div class="container">
				<div class="grid grid-2">
					<div class="about-text">
						<h2 class="content-title">{{ $t('about.mission.title') }}</h2>
						<p class="content-description">{{ $t('about.mission.text') }}</p>

						<div class="stats">
							<div class="stat-item">
								<div class="stat-number">13+</div>
								<div class="stat-label">{{ $t('about.mission.years') }}</div>
							</div>
							<div class="stat-item">
								<div class="stat-number">500+</div>
								<div class="stat-label">{{ $t('about.mission.projects') }}</div>
							</div>
							<div class="stat-item">
								<div class="stat-number">50+</div>
								<div class="stat-label">{{ $t('about.mission.clients') }}</div>
							</div>
						</div>
					</div>

					<div class="about-image">
						<img
							src="../assets/about-company.jpg"
							alt="Про компанію"
							class="content-img" />
					</div>
				</div>
			</div>
		</section>

		<!-- Цінності компанії -->
		<section class="values section">
			<div class="container">
				<h2 class="section-title">{{ $t('about.values.title') }}</h2>
				<div class="grid grid-2">
					<div class="value-card card">
						<div class="value-icon">
							<svg
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path
									d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
							</svg>
						</div>
						<h3 class="value-title">{{ $t('about.values.quality') }}</h3>
						<p class="value-description">{{ $t('about.values.quality_descr') }}</p>
					</div>

					<div class="value-card card">
						<div class="value-icon">
							<svg
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="value-title">{{ $t('about.values.reliability') }}</h3>
						<p class="value-description">
							Надійність - основа нашої роботи. Ми завжди дотримуємося термінів та виконуємо взяті на себе зобов'язання.
						</p>
					</div>

					<div class="value-card card">
						<div class="value-icon">
							<svg
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<h3 class="value-title">{{ $t('about.values.innovation') }}</h3>
						<p class="value-description">
							Ми постійно впроваджуємо інноваційні рішення та сучасні технології для підвищення ефективності робіт.
						</p>
					</div>

					<div class="value-card card">
						<div class="value-icon">
							<svg
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
							</svg>
						</div>
						<h3 class="value-title">{{ $t('about.values.safety') }}</h3>
						<p class="value-description">
							Безпека праці - наш пріоритет. Ми суворо дотримуємося всіх норм та правил техніки безпеки.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Команда -->
		<section class="team section">
			<div class="container">
				<h2 class="section-title">Наша команда</h2>
				<div class="grid grid-3">
					<div class="team-member card">
						<div class="member-photo">
							<img
								src="@/assets/team-member_Serhii.jpg"
								alt="Сергій Стрикаль" />
						</div>
						<div class="member-info">
							<h3 class="member-name">Сергій Стрикаль</h3>
							<p class="member-position">Генеральний директор</p>
							<p class="member-description">
								Досвід у будівельній галузі понад 20 років. Керує стратегічним розвитком компанії.
							</p>
						</div>
					</div>

					<div class="team-member card">
						<div class="member-photo">
							<img
								src="../assets/team-member-2.jpg"
								alt="Марія Коваленко" />
						</div>
						<div class="member-info">
							<h3 class="member-name">Марія Коваленко</h3>
							<p class="member-position">Головний інженер</p>
							<p class="member-description">
								Відповідає за технічну частину проектів та контроль якості виконання робіт.
							</p>
						</div>
					</div>

					<div class="team-member card">
						<div class="member-photo">
							<img
								src="../assets/team-member-3.jpg"
								alt="Олександр Сидоренко" />
						</div>
						<div class="member-info">
							<h3 class="member-name">Олександр Сидоренко</h3>
							<p class="member-position">Керівник проектів</p>
							<p class="member-description">
								Координує виконання проектів та взаємодію з клієнтами на всіх етапах будівництва.
							</p>
						</div>
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

.about-content {
	padding: 4rem 0;
}

.content-title {
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 1.5rem;
	color: #2c3e50;
}

.content-description {
	font-size: 1.1rem;
	line-height: 1.8;
	color: #6c757d;
	margin-bottom: 2rem;
}

.content-img {
	width: 100%;
	height: auto;
	border-radius: 10px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.stats {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;
	margin-top: 2rem;
}

.stat-item {
	text-align: center;
}

.stat-number {
	font-size: 2.5rem;
	font-weight: 700;
	color: #007bff;
	margin-bottom: 0.5rem;
}

.stat-label {
	font-size: 0.9rem;
	color: #6c757d;
	font-weight: 500;
}

.values {
	background: #f8f9fa;
}

.value-card {
	text-align: center;
	padding: 2.5rem 2rem;
}

.value-icon {
	display: flex;
	justify-content: center;
	margin-bottom: 1.5rem;
	color: #007bff;
}

.value-title {
	font-size: 1.3rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: #2c3e50;
}

.value-description {
	color: #6c757d;
	line-height: 1.6;
}

.team-member {
	text-align: center;
	padding: 2rem;
}

.member-photo {
	width: 120px;
	height: 120px;
	margin: 0 auto 1.5rem;
	border-radius: 50%;
	overflow: hidden;
	border: 4px solid #007bff;
}

.member-photo img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.member-name {
	font-size: 1.2rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	color: #2c3e50;
}

.member-position {
	color: #007bff;
	font-weight: 500;
	margin-bottom: 1rem;
}

.member-description {
	color: #6c757d;
	line-height: 1.6;
	font-size: 0.9rem;
}

/* Адаптивність */
@media (max-width: 768px) {
	.page-title {
		font-size: 2rem;
	}

	.page-subtitle {
		font-size: 1rem;
	}

	.content-title {
		font-size: 1.5rem;
	}

	.stats {
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.stat-number {
		font-size: 2rem;
	}

	.value-card {
		padding: 2rem 1.5rem;
	}
}

@media (max-width: 480px) {
	.page-hero {
		padding: 2rem 0;
	}

	.page-title {
		font-size: 1.5rem;
	}

	.about-content {
		padding: 2rem 0;
	}

	.member-photo {
		width: 100px;
		height: 100px;
	}
}
</style>
