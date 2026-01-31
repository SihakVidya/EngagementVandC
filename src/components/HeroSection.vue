<template>
  <section class="hero">
    <div class="hero-content reveal">
      <div class="guest-greeting">
        <p class="dear-text">Dear</p>
        <h2 class="guest-name writing-animation">{{ guestName }}</h2>
        <p class="invite-text">You are cordially invited to celebrate with us</p>
      </div>

      <div class="divider-ornament">
        <span class="ornament-line"></span>
        <span class="ornament-diamond"></span>
        <span class="ornament-line"></span>
      </div>

      <p class="pre-title">Together with their families</p>

      <div class="names-container">
        <h1 class="name groom writing-animation delay-2">Vityea</h1>
        <span class="ampersand writing-animation delay-3">&</span>
        <h1 class="name bride writing-animation delay-4">Cheata</h1>
      </div>

      <p class="event-type">Engagement Ceremony</p>

      <div class="date-container">
        <div class="date-line"></div>
        <p class="date">April 26th, 2026</p>
        <div class="date-line"></div>
      </div>
    </div>

    <div class="scroll-indicator" @click="scrollToContent">
      <ChevronDown class="bounce-arrow" :size="32" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

// Static guest name for now - will be dynamic from backend later
const guestName = ref('Rithy')

const scrollToContent = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
}

.hero-content {
  z-index: 10;
}

/* Guest Greeting */
.guest-greeting {
  margin-bottom: 2rem;
  text-align: center;
}

.dear-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-style: italic;
  color: #7a6a7a;
  margin-bottom: 0.25rem;
  letter-spacing: 0.1em;
}

.guest-name {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(2.5rem, 8vw, 4rem);
  color: #d4a5a5;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.invite-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  color: #8a7a8a;
  letter-spacing: 0.05em;
}

/* Divider Ornament */
.divider-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.ornament-line {
  width: 50px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4a5a5, transparent);
}

.ornament-diamond {
  width: 8px;
  height: 8px;
  background: #d4a5a5;
  transform: rotate(45deg);
}

.pre-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #6b5b6b;
  margin-bottom: 2rem;
}

.names-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  overflow: visible;
}

.name {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 400;
  color: #5a4a5a;
  line-height: 1.4;
  padding-top: 0.2em;
}

.ampersand {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(2rem, 6vw, 4rem);
  color: #d4a5a5;
  padding: 0.2em 0.1em;
  line-height: 1.4;
}

/* Handwriting Animation */
.writing-animation {
  display: inline-block;
  clip-path: inset(0 100% 0 0);
  animation: handwrite 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.writing-animation.delay-1 {
  animation-delay: 0.8s;
}

.writing-animation.delay-2 {
  animation-delay: 1.6s;
}

.writing-animation.delay-3 {
  animation-delay: 2.4s;
}

.writing-animation.delay-4 {
  animation-delay: 2.8s;
}

@keyframes handwrite {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}

.event-type {
  font-family: 'Playfair Display', serif;
  font-size: 1.125rem;
  font-style: italic;
  color: #7a6a7a;
  margin-bottom: 2rem;
  letter-spacing: 0.1em;
}

.date-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.date-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #d4a5a5 50%,
    transparent 100%
  );
}

.date {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: #5a4a5a;
  letter-spacing: 0.15em;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: #9a8a9a;
  transition: color 0.3s ease;
  z-index: 10;
}

.scroll-indicator:hover {
  color: #5a4a5a;
}

.bounce-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .names-container {
    flex-direction: column;
    gap: 0.5rem;
  }

  .ampersand {
    margin: 0;
  }

  .date-line {
    width: 40px;
  }

  .pre-title {
    font-size: 0.75rem;
    letter-spacing: 0.15em;
  }
}
</style>
