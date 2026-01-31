<template>
  <footer class="footer reveal">
    <div class="footer-content">
      <div class="footer-hearts">
        <Heart :size="14" />
        <Heart :size="18" />
        <Heart :size="14" />
      </div>
      <p class="footer-names">Vityea & Cheata</p>
      <p class="footer-date">April 26th, 2026</p>
      <p class="footer-message">We can't wait to celebrate with you!</p>
    </div>
  </footer>
</template>

<script setup>
import { Heart } from 'lucide-vue-next'
</script>

<style scoped>
.footer {
  padding: 4rem 2rem 6rem;
  text-align: center;
  position: relative;
  z-index: 10;
}

.footer-content {
  max-width: 500px;
  margin: 0 auto;
}

.footer-hearts {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: #d4a5a5;
}

.footer-names {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  color: #5a4a5a;
  margin-bottom: 0.5rem;
}

.footer-date {
  font-family: 'Playfair Display', serif;
  font-size: 0.9rem;
  color: #7a6a7a;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.footer-message {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #9a8a9a;
  font-style: italic;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1rem 5rem;
  }

  .footer-names {
    font-size: 1.75rem;
  }
}
</style>
