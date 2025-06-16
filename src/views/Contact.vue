<script setup>
import { ref, computed } from 'vue';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

/**
 * SEO мета-теги для сторінки контактів
 */
useHead({
	title: computed(() => t('contact.meta.title')),
	meta: [
		{
			name: 'description',
			content: computed(() => t('contact.meta.description')),
		},
		{
			property: 'og:title',
			content: computed(() => t('contact.meta.title')),
		},
		{
			property: 'og:description',
			content: computed(() => t('contact.meta.description')),
		},
	],
});

/**
 * Стан компонента
 */
const isSubmitting = ref(false);
const showSuccessMessage = ref(false);

/**
 * Форма контакту
 */
const contactForm = ref({
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	company: '',
	service: '',
	budget: '',
	message: '',
	agreement: false,
});

/**
 * Методи
 */
async function submitForm() {
	isSubmitting.value = true;

	try {
		// Симуляція відправки форми
		await new Promise((resolve) => setTimeout(resolve, 2000));

		console.log('Форма відправлена:', contactForm.value);

		showSuccessMessage.value = true;
		resetForm();

		// Приховати повідомлення через 5 секунд
		setTimeout(() => {
			showSuccessMessage.value = false;
		}, 5000);
	} catch (error) {
		console.error('Помилка відправки форми:', error);
		alert(t('contact.error.message'));
	}

	isSubmitting.value = false;
}

function resetForm() {
	contactForm.value = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		company: '',
		service: '',
		budget: '',
		message: '',
		agreement: false,
	};
}
</script>

<template>
	<div class="contact">
		<!-- Hero секція -->
		<section class="page-hero">
			<div class="container">
				<div class="page-hero-content">
					<h1 class="page-title">{{ $t('contact.title') }}</h1>
					<p class="page-subtitle">
						{{ $t('contact.subtitle') }}
					</p>
				</div>
			</div>
		</section>

		<!-- Контактна інформація -->
		<section class="contact-info section">
			<div class="container">
				<div class="contact-grid">
					<!-- Контактні дані -->
					<div class="contact-details">
						<h2 class="section-title">{{ $t('contact.get_in_touch') }}</h2>
						<p class="contact-description">
							{{ $t('contact.description') }}
						</p>

						<div class="contact-items">
							<div class="contact-item">
								<div class="contact-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="currentColor">
										<path
											d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
									</svg>
								</div>
								<div class="contact-content">
									<h4>{{ $t('contact.address') }}</h4>
									<p>{{ $t('address') }}</p>
								</div>
							</div>

							<div class="contact-item">
								<div class="contact-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="currentColor">
										<path
											d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
									</svg>
								</div>
								<div class="contact-content">
									<h4>{{ $t('contact.phone') }}</h4>
									<p>
										<a href="tel:+380671234567">+38 (067) 123-45-67</a>
									</p>
								</div>
							</div>

							<div class="contact-item">
								<div class="contact-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="currentColor">
										<path
											d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
									</svg>
								</div>
								<div class="contact-content">
									<h4>{{ $t('contact.email') }}</h4>
									<p>
										<a href="mailto:info@aquabudinvest.ua">info@aquabudinvest.ua</a>
									</p>
								</div>
							</div>

							<div class="contact-item">
								<div class="contact-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="currentColor">
										<path
											d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
										<path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
									</svg>
								</div>
								<div class="contact-content">
									<h4>{{ $t('contact.working_hours') }}</h4>
									<p>{{ $t('footer.working_hours_work') }}</p>
									<p>{{ $t('footer.working_hours_weekend') }}</p>
								</div>
							</div>
						</div>

						<!-- Соціальні мережі -->
						<div class="social-links">
							<h4>{{ $t('contact.follow_us') }}</h4>
							<div class="social-buttons">
								<a
									href="#"
									class="social-btn facebook">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="currentColor">
										<path
											d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
									Facebook
								</a>
								<a
									href="#"
									class="social-btn linkedin">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="currentColor">
										<path
											d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
									LinkedIn
								</a>
							</div>
						</div>
					</div>

					<!-- Форма зворотного зв'язку -->
					<div class="contact-form-wrapper">
						<h2 class="section-title">{{ $t('contact.send_message') }}</h2>

						<form
							@submit.prevent="submitForm"
							class="contact-form">
							<div class="form-row">
								<div class="form-group">
									<label for="firstName">{{ $t('contact.form.first_name') }} *</label>
									<input
										type="text"
										id="firstName"
										v-model="contactForm.firstName"
										required
										:placeholder="$t('contact.form.first_name_placeholder')" />
								</div>

								<div class="form-group">
									<label for="lastName">{{ $t('contact.form.last_name') }} *</label>
									<input
										type="text"
										id="lastName"
										v-model="contactForm.lastName"
										required
										:placeholder="$t('contact.form.last_name_placeholder')" />
								</div>
							</div>

							<div class="form-row">
								<div class="form-group">
									<label for="email">{{ $t('contact.form.email') }} *</label>
									<input
										type="email"
										id="email"
										v-model="contactForm.email"
										required
										:placeholder="$t('contact.form.email_placeholder')" />
								</div>

								<div class="form-group">
									<label for="phone">{{ $t('contact.form.phone') }}</label>
									<input
										type="tel"
										id="phone"
										v-model="contactForm.phone"
										:placeholder="$t('contact.form.phone_placeholder')" />
								</div>
							</div>

							<div class="form-group">
								<label for="company">{{ $t('contact.form.company') }}</label>
								<input
									type="text"
									id="company"
									v-model="contactForm.company"
									:placeholder="$t('contact.form.company_placeholder')" />
							</div>

							<div class="form-group">
								<label for="service">{{ $t('contact.form.service') }}</label>
								<select
									id="service"
									v-model="contactForm.service">
									<option value="">{{ $t('contact.form.select_service') }}</option>
									<option value="industrial">{{ $t('services.industrial.title') }}</option>
									<option value="plumbing">{{ $t('services.plumbing.title') }}</option>
									<option value="electrical">{{ $t('services.electrical.title') }}</option>
									<option value="consultation">{{ $t('contact.form.consultation') }}</option>
									<option value="other">{{ $t('common.other') }}</option>
								</select>
							</div>

							<div class="form-group">
								<label for="budget">{{ $t('contact.form.budget') }}</label>
								<select
									id="budget"
									v-model="contactForm.budget">
									<option value="">{{ $t('contact.form.select_budget') }}</option>
									<option value="under-100k">{{ $t('contact.form.budget_under_100k') }}</option>
									<option value="100k-500k">{{ $t('contact.form.budget_100k_500k') }}</option>
									<option value="500k-1m">{{ $t('contact.form.budget_500k_1m') }}</option>
									<option value="over-1m">{{ $t('contact.form.budget_over_1m') }}</option>
								</select>
							</div>

							<div class="form-group">
								<label for="message">{{ $t('contact.form.message') }} *</label>
								<textarea
									id="message"
									v-model="contactForm.message"
									required
									rows="5"
									:placeholder="$t('contact.form.message_placeholder')"></textarea>
							</div>

							<div class="form-group checkbox-group">
								<label class="checkbox-label">
									<input
										type="checkbox"
										v-model="contactForm.agreement"
										required />
									<span class="checkmark"></span>
									{{ $t('contact.form.agreement') }}
								</label>
							</div>

							<div class="form-actions">
								<button
									type="submit"
									class="submit-btn btn-primary"
									:disabled="isSubmitting">
									<span v-if="isSubmitting">{{ $t('common.submitting') }}...</span>
									<span v-else>{{ $t('contact.form.submit') }}</span>
								</button>
							</div>
						</form>

						<!-- Повідомлення про успіх -->
						<div
							v-if="showSuccessMessage"
							class="success-message">
							<div class="success-icon">✓</div>
							<h3>{{ $t('contact.success.title') }}</h3>
							<p>{{ $t('contact.success.message') }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Карта -->
		<section class="map-section">
			<div class="container">
				<h2 class="section-title text-center">{{ $t('contact.our_location') }}</h2>
				<div class="map-wrapper">
					<div class="map-placeholder">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.416136230202!2d30.474710854831127!3d50.52753677531459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d25f69be364b%3A0xf440db25e6a870c0!2z0LLRg9C70LjRhtGPINCh0ZbQvCfRlyDQqNC-0LLQutC-0L_Qu9GP0YHRltCyLCA0LCDQmtC40ZfQsiwgMDIwMDA!5e1!3m2!1suk!2sua!4v1749466120557!5m2!1suk!2sua"
							width="100%"
							height="450"
							style="border: 0"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"></iframe>
						<div class="map-content">
							<div class="map-icon">
								<svg
									width="48"
									height="48"
									viewBox="0 0 24 24"
									fill="currentColor">
									<path
										d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
								</svg>
							</div>
							<h3>{{ $t('company') }}</h3>
							<p>{{ $t('address') }}</p>
							<a
								href="https://maps.app.goo.gl/5oHqNAkDcmAPMxe26"
								target="_blank"
								class="map-link">
								{{ $t('contact.view_on_map') }}
							</a>
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

.contact-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4rem;
	align-items: start;
}

.contact-details {
	padding-right: 2rem;
}

.contact-description {
	color: #6c757d;
	line-height: 1.6;
	margin-bottom: 2rem;
}

.contact-items {
	margin-bottom: 3rem;
}

.contact-item {
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	margin-bottom: 2rem;
}

.contact-icon {
	width: 50px;
	height: 50px;
	background: #007bff;
	color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
}

.contact-content h4 {
	font-weight: 600;
	margin-bottom: 0.5rem;
	color: #2c3e50;
}

.contact-content p {
	color: #6c757d;
	margin: 0;
}

.contact-content a {
	color: #007bff;
	text-decoration: none;
}

.contact-content a:hover {
	text-decoration: underline;
}

.social-links h4 {
	margin-bottom: 1rem;
	color: #2c3e50;
}

.social-buttons {
	display: flex;
	gap: 1rem;
}

.social-btn {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.75rem 1.5rem;
	border-radius: 25px;
	text-decoration: none;
	font-weight: 500;
	transition: transform 0.3s ease;
}

.social-btn:hover {
	transform: translateY(-2px);
}

.social-btn.facebook {
	background: #1877f2;
	color: white;
}

.social-btn.linkedin {
	background: #0077b5;
	color: white;
}

.contact-form-wrapper {
	background: white;
	padding: 2.5rem;
	border-radius: 10px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
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

.checkbox-group {
	margin-bottom: 2rem;
}

.checkbox-label {
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;
	cursor: pointer;
	line-height: 1.5;
}

.checkbox-label input[type='checkbox'] {
	width: auto;
	margin: 0;
}

.form-actions {
	text-align: center;
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
	min-width: 200px;
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

.map-section {
	background: #f8f9fa;
	padding: 4rem 0;
}

.map-wrapper {
	margin-top: 2rem;
}

.map-placeholder {
	height: 450px;
	/* background: #e9ecef; */
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
}

.map-content {
	text-align: center;
	color: #6c757d;
	position: absolute;
	background-color: #ffffff;
	border-radius: 10px;
	padding: 20px;
	left: 10px;
	bottom: 80px;
}

.map-icon {
	color: #007bff;
	margin-bottom: 1rem;
}

.map-content h3 {
	color: #2c3e50;
	margin-bottom: 0.5rem;
}

.map-content p {
	margin-bottom: 1rem;
}

.map-link {
	display: inline-block;
	padding: 0.75rem 1.5rem;
	background: #007bff;
	color: white;
	text-decoration: none;
	border-radius: 5px;
	font-weight: 500;
	transition: background 0.3s ease;
}

.map-link:hover {
	background: #0056b3;
}

.text-center {
	text-align: center;
}

/* Адаптивність */
@media (max-width: 768px) {
	.page-title {
		font-size: 2rem;
	}

	.page-subtitle {
		font-size: 1rem;
	}

	.contact-grid {
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	.contact-details {
		padding-right: 0;
	}

	.form-row {
		grid-template-columns: 1fr;
		gap: 0;
	}

	.contact-form-wrapper {
		padding: 2rem;
	}

	.social-buttons {
		flex-direction: column;
	}

	.social-btn {
		justify-content: center;
	}
}

@media (max-width: 480px) {
	.page-hero {
		padding: 2rem 0;
	}

	.page-title {
		font-size: 1.5rem;
	}

	.contact-form-wrapper {
		padding: 1.5rem;
	}

	.contact-item {
		flex-direction: column;
		text-align: center;
	}

	.contact-icon {
		align-self: center;
	}

	.map-placeholder {
		height: 300px;
	}
}
</style>
