<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';

const { locale } = useI18n();
const router = useRouter();
const route = useRoute();

const currentLocale = ref(locale.value);

/**
 * Зміна мови та перенаправлення на відповідний маршрут
 */
function changeLanguage() {
	const newLocale = currentLocale.value;
	locale.value = newLocale;
	localStorage.setItem('locale', newLocale);

	// Оновлення URL з новою локаллю
	const currentPath = route.path.replace(`/${route.params.locale}`, '') || '';
	const newPath = `/${newLocale}${currentPath}`;

	// Використовуємо replace замість push
	router.replace(newPath);
}

/**
 * Синхронізація з поточною локаллю
 */
watch(
	() => locale.value,
	(newLocale) => {
		currentLocale.value = newLocale;
	}
);
</script>

<template>
	<div class="language-switcher">
		<select
			v-model="currentLocale"
			@change="changeLanguage"
			class="language-select">
			<option value="ua">UA</option>
			<option value="ru">RU</option>
			<option value="en">EN</option>
		</select>
	</div>
</template>

<style scoped>
.language-switcher {
	position: relative;
}

.language-select {
	background: #f8f9fa;
	border: 1px solid #dee2e6;
	border-radius: 5px;
	padding: 0.5rem 0.75rem;
	font-size: 0.9rem;
	cursor: pointer;
	outline: none;
	transition: all 0.3s ease;
	min-width: 80px;
}

.language-select:hover {
	background: #e9ecef;
	border-color: #adb5bd;
}

.language-select:focus {
	border-color: #007bff;
	box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

@media (max-width: 480px) {
	.language-select {
		padding: 0.4rem 0.6rem;
		font-size: 0.8rem;
		min-width: 70px;
	}
}
</style>
