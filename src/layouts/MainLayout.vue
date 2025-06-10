<template>
  <div class="main-layout">
    <router-view />
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale } = useI18n()

/**
 * Синхронізація локалі з параметром маршруту
 */
watch(
  () => route.params.locale,
  (newLocale) => {
    if (newLocale && ['ua', 'en', 'ru'].includes(newLocale)) {
      locale.value = newLocale
      localStorage.setItem('locale', newLocale)
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
}
</style>