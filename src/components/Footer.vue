<script setup>
import { computed } from "vue";

// Поточний рік для копірайту

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Інформація про компанію -->
        <div class="footer-section">
          <h3 class="footer-title">{{ $t("company") }}</h3>
          <p class="footer-description">{{ $t("footer.description") }}</p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Швидкі посилання -->
        <div class="footer-section">
          <h3 class="footer-title">{{ $t("nav.home") }}</h3>
          <ul class="footer-links">
            <li>
              <router-link :to="`/${$i18n.locale}/about`">{{
                $t("nav.about")
              }}</router-link>
            </li>
            <li>
              <router-link :to="`/${$i18n.locale}/services`">{{
                $t("nav.services")
              }}</router-link>
            </li>
            <li>
              <router-link :to="`/${$i18n.locale}/portfolio`">{{
                $t("nav.portfolio")
              }}</router-link>
            </li>
            <li>
              <router-link :to="`/${$i18n.locale}/contact`">{{
                $t("nav.contact")
              }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Контактна інформація -->
        <div class="footer-section">
          <h3 class="footer-title">{{ $t("contact.info.address") }}</h3>
          <div class="contact-info">
            <div class="contact-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
              <span>{{$t('address')}}</span>
            </div>
            <div class="contact-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
              <span><a href="tel:+380671234567">+38 (067) 123-45-67</a></span>
            </div>
            <div class="contact-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              <span><a href="mailto:info@aquabudinvest.ua">info@aquabudinvest.ua</a></span>
            </div>
          </div>
        </div>

        <!-- Години роботи -->
        <div class="footer-section">
          <h3 class="footer-title">{{ $t("contact.info.hours") }}</h3>
          <div class="working-hours">
            <div class="hours-item">
              <p>{{ $t('footer.working_hours_work') }}</p>
              <p>{{ $t('footer.working_hours_weekend') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Нижня частина футера -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>
            &copy; {{ currentYear }} {{ $t("company") }}.
            {{ $t("footer.rights") }}.
          </p>
<!--           <div class="footer-bottom-links">
            <a href="#">{{ $t("footer.links.privacy") }}</a>
            <a href="#">{{ $t("footer.links.terms") }}</a>
          </div> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2c3e50;
  color: #ecf0f1;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #3498db;
}

.footer-description {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #bdc3c7;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #34495e;
  color: #ecf0f1;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #3498db;
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #3498db;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #bdc3c7;
}

.contact-item svg {
  flex-shrink: 0;
  color: #3498db;
}

.working-hours {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.hours-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #bdc3c7;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-links a {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #3498db;
}

/* Адаптивність */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding: 2rem 0 1.5rem;
    gap: 1.5rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-bottom-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 1.5rem 0 1rem;
  }

  .social-links {
    justify-content: center;
  }

  .hours-item {
    font-size: 0.9rem;
  }
}
</style>
