<script setup>
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

/**
 * SEO мета-теги для сторінки послуг
 */
useHead({
	title: computed(() => t('services.meta.title')),
	meta: [
		{
			name: 'description',
			content: computed(() => t('services.meta.description')),
		},
		{
			property: 'og:title',
			content: computed(() => t('services.meta.title')),
		},
		{
			property: 'og:description',
			content: computed(() => t('services.meta.description')),
		},
	],
});
</script>

<template>
	<div class="services">
		<!-- Hero секція -->
		<section class="page-hero">
			<div class="container">
				<div class="page-hero-content">
					<h1 class="page-title">{{ $t('services.title') }}</h1>
					<p class="page-subtitle">{{ $t('services.subtitle') }}</p>
				</div>
			</div>
		</section>

		<!-- Основні послуги -->
		<section class="main-services section">
			<div class="container">
				<!-- Промислове будівництво -->
				<div class="service-block">
					<div class="service-content">
						<div class="service-text">
							<h2 class="service-title">{{ $t('services.industrial.title') }}</h2>
							<p class="service-description">{{ $t('services.industrial.description') }}</p>

							<ul class="service-features">
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.industrial.features-1') }}
								</li>
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.industrial.features-2') }}
								</li>
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.industrial.features-3') }}
								</li>
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.industrial.features-4') }}
								</li>
							</ul>

							<router-link :to="`/${$i18n.locale}/contact`" class="btn btn-primary">
								{{ $t('common.ordering') }}
							</router-link>
						</div>

						<div class="service-image">
							<img src="@/assets/service-industrial.jpg" alt="Industrial construction" />
						</div>
					</div>
				</div>

				<!-- Сантехнічні роботи -->
				<div class="service-block reverse">
					<div class="service-content">
						<div class="service-image">
							<img src="@/assets/service-plumbing.jpg" alt="Plumbing work" />
						</div>

						<div class="service-text">
							<h2 class="service-title">{{ $t('services.plumbing.title') }}</h2>
							<p class="service-description">{{ $t('services.plumbing.description') }}</p>

							<ul class="service-features">
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.plumbing.features-1') }}
								</li>
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.plumbing.features-2') }}
								</li>
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.plumbing.features-3') }}
								</li>
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.plumbing.features-4') }}
								</li>
							</ul>

							<router-link :to="`/${$i18n.locale}/contact`" class="btn btn-primary">
								{{ $t('common.ordering') }}
							</router-link>
						</div>
					</div>
				</div>

				<!-- Електромонтажні роботи -->
				<div class="service-block">
					<div class="service-content">
						<div class="service-text">
							<h2 class="service-title">{{ $t('services.electrical.title') }}</h2>
							<p class="service-description">{{ $t('services.electrical.description') }}</p>

							<ul class="service-features">
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.electrical.features-1') }}
								</li>
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.electrical.features-2') }}
								</li>
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.electrical.features-3') }}
								</li>
								<li>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ $t('services.electrical.features-4') }}
								</li>
							</ul>

							<router-link :to="`/${$i18n.locale}/contact`" class="btn btn-primary">
								{{ $t('common.ordering') }}
							</router-link>
						</div>

						<div class="service-image">
							<img src="@/assets/service-electrical.jpg" alt="Electrical installation work" />
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Додаткові послуги -->
		<section class="additional-services section">
			<div class="container">
				<h2 class="section-title">{{ $t('services.additional.title') }}</h2>
				<div class="grid grid-3">
					<div class="additional-service card">
						<div class="service-icon">
							<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
							</svg>
						</div>
						<h3 class="additional-title">{{ $t('services.additional.card-title-1') }}</h3>
						<p class="additional-description">{{ $t('services.additional.card-description-1') }}</p>
					</div>

					<div class="additional-service card">
						<div class="service-icon">
							<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="additional-title">{{ $t('services.additional.card-title-2') }}</h3>
						<p class="additional-description">{{ $t('services.additional.card-description-2') }}</p>
					</div>

					<div class="additional-service card">
						<div class="service-icon">
							<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197v1z" />
							</svg>
						</div>
						<h3 class="additional-title">{{ $t('services.additional.card-title-3') }}</h3>
						<p class="additional-description">{{ $t('services.additional.card-description-3') }}</p>
					</div>

					<div class="additional-service card">
						<div class="service-icon">
							<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
								<path d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<h3 class="additional-title">Аварійні роботи</h3>
						<p class="additional-description">
							Цілодобова служба аварійного реагування для усунення непередбачених ситуацій.
						</p>
					</div>

					<div class="additional-service card">
						<div class="service-icon">
							<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
							</svg>
						</div>
						<h3 class="additional-title">Гарантійне обслуговування</h3>
						<p class="additional-description">Повне гарантійне та післягарантійне обслуговування виконаних робіт.</p>
					</div>

					<div class="additional-service card">
						<div class="service-icon">
							<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
							</svg>
						</div>
						<h3 class="additional-title">Кошторисна документація</h3>
						<p class="additional-description">Складання детальних кошторисів та розрахунків вартості робіт.</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Процес роботи -->
		<section class="work-process section">
			<div class="container">
				<h2 class="section-title">Як ми працюємо</h2>
				<div class="process-steps">
					<div class="process-step">
						<div class="step-number">1</div>
						<div class="step-content">
							<h3 class="step-title">Консультація</h3>
							<p class="step-description">
								Безкоштовна консультація та оцінка об'єкта. Обговорення ваших потреб та побажань.
							</p>
						</div>
					</div>

					<div class="process-step">
						<div class="step-number">2</div>
						<div class="step-content">
							<h3 class="step-title">Проектування</h3>
							<p class="step-description">
								Розробка технічного завдання та проектної документації з урахуванням всіх вимог.
							</p>
						</div>
					</div>

					<div class="process-step">
						<div class="step-number">3</div>
						<div class="step-content">
							<h3 class="step-title">Договір</h3>
							<p class="step-description">Укладення договору з детальним описом робіт, термінів та вартості проекту.</p>
						</div>
					</div>

					<div class="process-step">
						<div class="step-number">4</div>
						<div class="step-content">
							<h3 class="step-title">Виконання</h3>
							<p class="step-description">
								Професійне виконання робіт з дотриманням всіх технологій та стандартів якості.
							</p>
						</div>
					</div>

					<div class="process-step">
						<div class="step-number">5</div>
						<div class="step-content">
							<h3 class="step-title">Здача об'єкта</h3>
							<p class="step-description">
								Здача готового об'єкта з повним пакетом документів та гарантійними зобов'язаннями.
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
	background: radial-gradient(circle, #055283 0%, #34495e 100%);
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

.service-block {
	margin-bottom: 4rem;
}

.service-content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem;
	align-items: center;
}

.service-block .reverse .service-content {
	direction: rtl;
}

.service-block .reverse .service-text {
	direction: ltr;
}

.service-title {
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 1.5rem;
	color: #2c3e50;
}

.service-description {
	font-size: 1.1rem;
	line-height: 1.8;
	color: #6c757d;
	margin-bottom: 2rem;
}

.service-features {
	list-style: none;
	margin-bottom: 2rem;
}

.service-features li {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 0.75rem;
	color: #2c3e50;
}

.service-features svg {
	color: #28a745;
	flex-shrink: 0;
}

.service-image img {
	width: 100%;
	height: auto;
	border-radius: 10px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.additional-services {
	background: #f8f9fa;
}

.additional-service {
	text-align: center;
	padding: 2.5rem 2rem;
}

.service-icon {
	display: flex;
	justify-content: center;
	margin-bottom: 1.5rem;
	color: #007bff;
}

.additional-title {
	font-size: 1.3rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: #2c3e50;
}

.additional-description {
	color: #6c757d;
	line-height: 1.6;
}

.work-process {
	background: white;
}

.process-steps {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 800px;
	margin: 0 auto;
}

.process-step {
	display: flex;
	align-items: flex-start;
	gap: 2rem;
}

.step-number {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 60px;
	background: #007bff;
	color: white;
	border-radius: 50%;
	font-size: 1.5rem;
	font-weight: 700;
	flex-shrink: 0;
}

.step-title {
	font-size: 1.3rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	color: #2c3e50;
}

.step-description {
	color: #6c757d;
	line-height: 1.6;
}

/* Адаптивність */
@media (max-width: 768px) {
	.page-title {
		font-size: 2rem;
	}

	.page-subtitle {
		font-size: 1rem;
	}

	.service-content {
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	.service-block.reverse .service-content {
		direction: ltr;
	}

	.service-title {
		font-size: 1.5rem;
	}

	.service-description {
		font-size: 1rem;
	}

	.additional-service {
		padding: 2rem 1.5rem;
	}

	.process-step {
		gap: 1rem;
	}

	.step-number {
		width: 50px;
		height: 50px;
		font-size: 1.2rem;
	}
}

@media (max-width: 480px) {
	.page-hero {
		padding: 2rem 0;
	}

	.page-title {
		font-size: 1.5rem;
	}

	.service-block {
		margin-bottom: 2rem;
	}

	.process-steps {
		gap: 1.5rem;
	}
}
</style>
