<template>
  <section class="invitation reveal">
    <div class="invitation-content">
      <Heart class="heart-icon" :size="28" />
      <p class="invitation-text">
        With joyful hearts and the blessings of our families,<br />
        we invite you to celebrate the beginning of our journey together<br />
        as we exchange vows and unite our lives in love.
      </p>
      <div class="decorative-divider">
        <span class="divider-dot"></span>
        <span class="divider-line"></span>
        <span class="divider-dot"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Heart } from 'lucide-vue-next'
</script>

<style scoped>
.invitation {
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
}

.invitation-content {
  max-width: 700px;
  text-align: center;
}

.heart-icon {
  color: #d4a5a5;
  margin-bottom: 1.5rem;
}

.invitation-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.125rem;
  font-style: italic;
  line-height: 2;
  color: #5a4a5a;
  letter-spacing: 0.02em;
}

.decorative-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.divider-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #d4a5a5;
}

.divider-line {
  width: 80px;
  height: 1px;
  background: linear-gradient(
    90deg,
    #d4a5a5 0%,
    #e9d5ff 50%,
    #d4a5a5 100%
  );
}

@media (max-width: 768px) {
  .invitation {
    padding: 3rem 1.5rem;
  }

  .invitation-text {
    font-size: 1rem;
    line-height: 1.8;
  }

  .invitation-text br {
    display: none;
  }
}
</style>
