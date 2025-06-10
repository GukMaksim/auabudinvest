<script setup>
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';

/**
 * Композиція для інтернаціоналізації
 */
const { t } = useI18n();

/**
 * SEO мета-теги для сторінки 404
 */
useHead({
	title: () => `404 - ${t('notFound.title')} | ${t('company.name')}`,
	meta: [
		{
			name: 'description',
			content: () => t('notFound.metaDescription'),
		},
		{
			name: 'robots',
			content: 'noindex, nofollow',
		},
	],
});
</script>

<template>
	<div class="not-found">
		<!-- Hero Section -->
		<section class="hero-section">
			<div class="container">
				<div class="hero-content">
					<h1 class="hero-title">404</h1>
					<h2 class="hero-subtitle">{{ $t('notFound.title') }}</h2>
					<p class="hero-description">{{ $t('notFound.description') }}</p>
					<div class="hero-actions">
						<router-link
							:to="`/${$i18n.locale}/`"
							class="btn btn-primary">
							{{ $t('notFound.backHome') }}
						</router-link>
						<router-link
							:to="`/${$i18n.locale}/contact`"
							class="btn btn-secondary">
							{{ $t('notFound.contact') }}
						</router-link>
					</div>
				</div>
			</div>
		</section>

		<!-- Helpful Links Section -->
		<section class="helpful-links">
			<div class="container">
				<h3>{{ $t('notFound.helpfulLinks') }}</h3>
				<div class="links-grid">
					<router-link
						:to="`/${$i18n.locale}/about`"
						class="link-card">
						<h4>{{ $t('nav.about') }}</h4>
						<p>{{ $t('notFound.aboutDescription') }}</p>
					</router-link>
					<router-link
						:to="`/${$i18n.locale}/services`"
						class="link-card">
						<h4>{{ $t('nav.services') }}</h4>
						<p>{{ $t('notFound.servicesDescription') }}</p>
					</router-link>
					<router-link
						:to="`/${$i18n.locale}/portfolio`"
						class="link-card">
						<h4>{{ $t('nav.portfolio') }}</h4>
						<p>{{ $t('notFound.portfolioDescription') }}</p>
					</router-link>
					<router-link
						:to="`/${$i18n.locale}/contact`"
						class="link-card">
						<h4>{{ $t('nav.contact') }}</h4>
						<p>{{ $t('notFound.contactDescription') }}</p>
					</router-link>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.not-found {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

.hero-section {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	color: white;
	text-align: center;
	padding: 4rem 0;
}

.hero-content {
	max-width: 600px;
	margin: 0 auto;
}

.hero-title {
	font-size: 8rem;
	font-weight: 900;
	margin: 0;
	line-height: 1;
	opacity: 0.8;
}

.hero-subtitle {
	font-size: 2.5rem;
	font-weight: 700;
	margin: 1rem 0;
	color: #fff;
}

.hero-description {
	font-size: 1.2rem;
	margin: 1.5rem 0 2rem;
	opacity: 0.9;
	line-height: 1.6;
}

.hero-actions {
	display: flex;
	gap: 1rem;
	justify-content: center;
	flex-wrap: wrap;
}

.btn {
	display: inline-block;
	padding: 0.75rem 2rem;
	border-radius: 5px;
	text-decoration: none;
	font-weight: 600;
	transition: all 0.3s ease;
	border: 2px solid transparent;
}

.btn-primary {
	background: #fff;
	color: #667eea;
}

.btn-primary:hover {
	background: transparent;
	color: #fff;
	border-color: #fff;
}

.btn-secondary {
	background: transparent;
	color: #fff;
	border-color: #fff;
}

.btn-secondary:hover {
	background: #fff;
	color: #667eea;
}

.helpful-links {
	padding: 4rem 0;
	background: #f8f9fa;
}

.helpful-links h3 {
	text-align: center;
	font-size: 2rem;
	margin-bottom: 3rem;
	color: #333;
}

.links-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	max-width: 1000px;
	margin: 0 auto;
}

.link-card {
	background: white;
	padding: 2rem;
	border-radius: 10px;
	text-decoration: none;
	color: #333;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;
	border: 2px solid transparent;
}

.link-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
	border-color: #007bff;
	color: #333;
}

.link-card h4 {
	font-size: 1.3rem;
	margin: 0 0 0.5rem;
	color: #007bff;
}

.link-card p {
	margin: 0;
	opacity: 0.8;
	line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
	.hero-title {
		font-size: 5rem;
	}

	.hero-subtitle {
		font-size: 2rem;
	}

	.hero-description {
		font-size: 1.1rem;
	}

	.hero-actions {
		flex-direction: column;
		align-items: center;
	}

	.btn {
		width: 200px;
	}

	.links-grid {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	.helpful-links {
		padding: 2rem 0;
	}

	.helpful-links h3 {
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}
}

@media (max-width: 480px) {
	.hero-title {
		font-size: 4rem;
	}

	.hero-subtitle {
		font-size: 1.5rem;
	}

	.link-card {
		padding: 1.5rem;
	}
}
</style>
