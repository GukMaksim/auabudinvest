<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)

/**
 * Елементи меню навігації
 */
const menuItems = [
  { name: 'home', path: '', label: 'nav.home' },
  { name: 'about', path: '/about', label: 'nav.about' },
  { name: 'services', path: '/services', label: 'nav.services' },
  { name: 'portfolio', path: '/portfolio', label: 'nav.portfolio' },
  { name: 'testimonials', path: '/testimonials', label: 'nav.testimonials' },
  { name: 'contact', path: '/contact', label: 'nav.contact' }
]

/**
 * Перевірка активного маршруту
 */
function isActiveRoute(path) {
  const currentPath = route.path.replace(`/${route.params.locale}`, '') || '/'
  const targetPath = path || '/'
  return currentPath === targetPath
}

/**
 * Переключення мобільного меню
 */
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

/**
 * Закриття мобільного меню
 */
function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <!-- Логотип -->
        <router-link :to="`/${$i18n.locale}`" class="logo">
          <img src="../assets/logo.png" alt="Аквабудінвест" class="logo-img" />
          <!-- <span class="logo-text">{{ $t('footer.company') }}</span> -->
        </router-link>

        <!-- Десктопне меню -->
        <div class="nav-links desktop-menu">
          <router-link 
            v-for="item in menuItems" 
            :key="item.name"
            :to="`/${$i18n.locale}${item.path}`"
            class="nav-link"
            :class="{ active: isActiveRoute(item.path) }"
          >
            {{ $t(item.label) }}
          </router-link>
        </div>

        <!-- Перемикач мови та мобільне меню -->
        <div class="navbar-actions">
          <LanguageSwitcher />
          <button 
            class="mobile-menu-toggle"
            @click="toggleMobileMenu"
            :class="{ active: isMobileMenuOpen }"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Мобільне меню -->
      <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
        <router-link 
          v-for="item in menuItems" 
          :key="item.name"
          :to="`/${$i18n.locale}${item.path}`"
          class="mobile-nav-link"
          @click="closeMobileMenu"
        >
          {{ $t(item.label) }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
  font-size: 1.2rem;
}

.logo-img {
  /* width: 40px; */
  height: 60px;
  margin-right: 0.5rem;
}

/* .logo-text {
  white-space: nowrap;
} */

.desktop-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #007bff;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #007bff;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.5rem 0;
  width: 30px;
  height: 30px;
  justify-content: space-between;
}

.mobile-menu-toggle span {
  /* width: 100%; */
  width: 20px;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(2px, -4px);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  background: #fff;
  border-top: 1px solid #eee;
  padding: 1rem 0;
}

.mobile-menu.open {
  display: flex;
}

.mobile-nav-link {
  text-decoration: none;
  color: #333;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 500;
}

.mobile-nav-link:hover {
  color: #007bff;
  background-color: #f8f9fa;
}

/* Адаптивність */
@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
/*   .logo-text {
    display: none;
  } */
}

@media (max-width: 480px) {
  .navbar-content {
    padding: 0.5rem 0;
  }
  
  .logo-img {
    /* width: 35px; */
    height: 35px;
  }
}
</style>