import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: '/',
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['vue', 'vue-router', 'vue-i18n'],
					utils: ['axios', '@vueuse/head']
				}
			}
		}
	},
	server: {
		port: 3000,
		open: true
	}
})