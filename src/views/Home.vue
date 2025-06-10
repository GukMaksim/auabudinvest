<script setup>
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, locale } = useI18n();

/**
 * SEO мета-теги для головної сторінки
 */
useHead({
	title: computed(() => t('home.meta.title')),
	meta: [
		{
			name: 'description',
			content: computed(() => t('home.meta.description')),
		},
		{
			name: 'keywords',
			content: computed(() => t('home.meta.keywords')),
		},
		{
			property: 'og:title',
			content: computed(() => t('home.meta.title')),
		},
		{
			property: 'og:description',
			content: computed(() => t('home.meta.description')),
		},
		{
			property: 'og:type',
			content: 'website',
		},
	],
});
</script>

<template>
	<div class="home">
		<!-- Hero секція -->
		<section class="hero">
			<div class="container">
				<div class="hero-content">
					<div class="hero-text">
						<h1 class="hero-title">{{ $t('home.hero.title') }}</h1>
						<p class="hero-subtitle">{{ $t('home.hero.subtitle') }}</p>
						<div class="hero-actions">
							<router-link
								:to="`/${$i18n.locale}/contact`"
								class="btn btn-primary">
								{{ $t('home.hero.cta') }}
							</router-link>
							<router-link
								:to="`/${$i18n.locale}/about`"
								class="btn btn-secondary">
								{{ $t('home.hero.learn_more') }}
							</router-link>
						</div>
					</div>
					<div class="hero-image">
						<img
							src="@/assets/hero-construction.jpg"
							alt="Будівництво"
							class="hero-img" />
					</div>
				</div>
			</div>
		</section>

		<!-- Переваги -->
		<section class="features section">
			<div class="container">
				<h2 class="section-title">{{ $t('home.features.title') }}</h2>
				<div class="grid grid-3">
					<div class="feature-card card">
						<div class="feature-icon">
							<svg
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path
									d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
							</svg>
						</div>
						<h3 class="feature-title">{{ $t('home.features.experience.title') }}</h3>
						<p class="feature-description">{{ $t('home.features.experience.description') }}</p>
					</div>

					<div class="feature-card card">
						<div class="feature-icon">
							<svg
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="feature-title">{{ $t('home.features.quality.title') }}</h3>
						<p class="feature-description">{{ $t('home.features.quality.description') }}</p>
					</div>

					<div class="feature-card card">
						<div class="feature-icon">
							<svg
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197v1z" />
							</svg>
						</div>
						<h3 class="feature-title">{{ $t('home.features.team.title') }}</h3>
						<p class="feature-description">{{ $t('home.features.team.description') }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Попередній перегляд послуг -->
		<section class="services-preview section">
			<div class="container">
				<h2 class="section-title">{{ $t('home.services_preview.title') }}</h2>
				<div class="grid grid-3">
					<div class="service-card card">
						<div class="service-image">
							<img
								src="@/assets/service-industrial.jpg"
								alt="Промислове будівництво" />
						</div>
						<div class="service-content">
							<h3 class="service-title">{{ $t('home.services_preview.industrial') }}</h3>
							<router-link
								:to="`/${$i18n.locale}/services`"
								class="service-link">
								{{ $t('home.hero.learn_more') }}
							</router-link>
						</div>
					</div>

					<div class="service-card card">
						<div class="service-image">
							<img
								src="@/assets/service-plumbing.jpg"
								alt="Сантехнічні роботи" />
						</div>
						<div class="service-content">
							<h3 class="service-title">{{ $t('home.services_preview.plumbing') }}</h3>
							<router-link
								:to="`/${$i18n.locale}/services`"
								class="service-link">
								{{ $t('home.hero.learn_more') }}
							</router-link>
						</div>
					</div>

					<div class="service-card card">
						<div class="service-image">
							<img
								src="@/assets/service-electrical.jpg"
								alt="Електромонтажні роботи" />
						</div>
						<div class="service-content">
							<h3 class="service-title">{{ $t('home.services_preview.electrical') }}</h3>
							<router-link
								:to="`/${$i18n.locale}/services`"
								class="service-link">
								{{ $t('home.hero.learn_more') }}
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- CTA секція -->
		<section class="cta-section">
			<div class="container">
				<div class="cta-content">
					<h2 class="cta-title">{{ $t('home.cta.title') }}</h2>
					<p class="cta-description">{{ $t('home.cta.description') }}</p>
					<router-link
						:to="`/${$i18n.locale}/contact`"
						class="btn btn-primary btn-large">
						{{ $t('home.hero.cta') }}
					</router-link>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.hero {
	/* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
	background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('../assets/hero-bg.jpg');
	background-size: cover;
	background-position: bottom left;
	background-repeat: no-repeat;
	color: white;
	padding: 4rem 0;
	min-height: 70vh;
	display: flex;
	align-items: center;
}

.hero-content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem;
	align-items: center;
}

.hero-title {
	font-size: 3rem;
	font-weight: 700;
	line-height: 1.2;
	margin-bottom: 1.5rem;
}

.hero-subtitle {
	font-size: 1.2rem;
	line-height: 1.6;
	margin-bottom: 2rem;
	opacity: 0.9;
}

.hero-actions {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
}

.hero-img {
	width: 100%;
	height: auto;
	border-radius: 10px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	opacity: 0.87;
}

.btn-primary {
	background: #007bff;
}

.btn-primary:hover {
	background: #0056b3;
}

.btn-large {
	padding: 1rem 2rem;
	font-size: 1.1rem;
}

.features {
	background: #f8f9fa;
}

.feature-card {
	text-align: center;
	padding: 2.5rem 2rem;
}

.feature-icon {
	display: flex;
	justify-content: center;
	margin-bottom: 1.5rem;
	color: #007bff;
}

.feature-title {
	font-size: 1.3rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: #2c3e50;
}

.feature-description {
	color: #6c757d;
	line-height: 1.6;
}

.service-card {
	overflow: hidden;
	padding: 0;
}

.service-image {
	height: 200px;
	overflow: hidden;
}

.service-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;
}

.service-card:hover .service-image img {
	transform: scale(1.05);
}

.service-content {
	padding: 1.5rem;
}

.service-title {
	font-size: 1.2rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: #2c3e50;
}

.service-link {
	color: #007bff;
	text-decoration: none;
	font-weight: 500;
	transition: color 0.3s ease;
}

.service-link:hover {
	color: #0056b3;
}

.cta-section {
	background: #2c3e50;
	color: white;
	padding: 4rem 0;
	text-align: center;
}

.cta-content {
	max-width: 600px;
	margin: 0 auto;
}

.cta-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 1rem;
}

.cta-description {
	font-size: 1.2rem;
	margin-bottom: 2rem;
	opacity: 0.9;
}

/* Адаптивність */
@media (max-width: 768px) {
	.hero {
		padding: 2rem 0;
		min-height: auto;
	}

	.hero-content {
		grid-template-columns: 1fr;
		gap: 2rem;
		text-align: center;
	}

	.hero-title {
		font-size: 2rem;
	}

	.hero-subtitle {
		font-size: 1rem;
	}

	.hero-actions {
		justify-content: center;
	}

	.cta-title {
		font-size: 2rem;
	}

	.cta-description {
		font-size: 1rem;
	}
}

@media (max-width: 480px) {
	.hero-title {
		font-size: 1.5rem;
	}

	.hero-actions {
		flex-direction: column;
		align-items: center;
	}

	.feature-card {
		padding: 2rem 1.5rem;
	}

	.cta-title {
		font-size: 1.5rem;
	}
}
</style>
