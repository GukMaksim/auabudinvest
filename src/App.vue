<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

/**
 * Налаштування глобальних мета-тегів
 */
useHead({
	htmlAttrs: {
		lang: computed(() => locale.value),
	},
	meta: [
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1.0',
		},
		{
			name: 'robots',
			content: 'index, follow',
		},
	],
});
</script>

<template>
	<div id="app">
		<Navbar />
		<main>
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<style>
/* Глобальні стилі */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.6;
	color: #333;
	background-color: #fff;
}

#app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

main {
	flex: 1;
}

/* Утиліти */
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
}

.btn {
	display: inline-block;
	padding: 12px 24px;
	background-color: #007bff;
	color: white;
	text-decoration: none;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.3s ease;
}

.btn:hover {
	background-color: #0056b3;
}

.btn-secondary {
	background-color: #6c757d;
}

.btn-secondary:hover {
	background-color: #545b62;
}

.section {
	padding: 60px 0;
}

.section-title {
	font-size: 2.5rem;
	text-align: center;
	margin-bottom: 3rem;
	color: #2c3e50;
}

.grid {
	display: grid;
	gap: 2rem;
}

.grid-2 {
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	align-items: center;
}

.grid-3 {
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.card {
	background: white;
	border-radius: 10px;
	padding: 2rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* Адаптивність */
@media (max-width: 768px) {
	.container {
		padding: 0 15px;
	}

	.section {
		padding: 40px 0;
	}

	.section-title {
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	.btn {
		padding: 10px 20px;
		font-size: 14px;
	}
}

@media (max-width: 480px) {
	.section-title {
		font-size: 1.5rem;
	}

	.card {
		padding: 1.5rem;
	}
}
</style>
