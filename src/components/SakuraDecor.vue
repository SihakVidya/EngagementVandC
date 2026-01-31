<template>
  <div class="sakura-container">
    <!-- Top Right Branch -->
    <div class="sakura-branch top-right">
      <img :src="sakuraImg" alt="" class="sway" />
    </div>

    <!-- Falling Petals -->
    <div class="petals-container">
      <img
        v-for="petal in petals"
        :key="petal.id"
        :src="petal.src"
        :style="petal.style"
        class="petal"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import sakuraImg from '@/assets/Sakura.webp'
import petal5 from '@/assets/5.webp'
import petal6 from '@/assets/6.webp'
import petal7 from '@/assets/7.webp'

const petalImages = [petal5, petal6, petal7]

// Generate petals with random properties
const petals = computed(() => {
  return Array.from({ length: 15 }, (_, i) => {
    const left = Math.random() * 100
    const delay = Math.random() * 10
    const duration = 10 + Math.random() * 8
    const size = 15 + Math.random() * 25
    const rotation = Math.random() * 360
    const petalIndex = Math.floor(Math.random() * 3)

    return {
      id: i,
      src: petalImages[petalIndex],
      style: {
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        width: `${size}px`,
        height: 'auto',
        '--rotation': `${rotation}deg`,
      }
    }
  })
})
</script>

<style scoped>
.sakura-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.sakura-branch {
  position: absolute;
}

.sakura-branch img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Sway animation - like wind */
.sway {
  transform-origin: top right;
  animation: sway 5s ease-in-out infinite;
}

@keyframes sway {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(1deg);
  }
  75% {
    transform: rotate(-0.5deg);
  }
}

/* Top Right - always from edge */
.top-right {
  top: 0;
  right: 0;
  width: clamp(300px, 35vw, 450px);
}

/* Falling Petals */
.petals-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.petal {
  position: absolute;
  top: -50px;
  opacity: 0.85;
  animation: fall linear infinite, swaySide 4s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

@keyframes fall {
  0% {
    top: -8%;
  }
  100% {
    top: 108%;
  }
}

@keyframes swaySide {
  0% {
    transform: translateX(0) rotate(var(--rotation, 0deg));
  }
  25% {
    transform: translateX(20px) rotate(calc(var(--rotation, 0deg) + 45deg));
  }
  50% {
    transform: translateX(-15px) rotate(calc(var(--rotation, 0deg) + 90deg));
  }
  75% {
    transform: translateX(25px) rotate(calc(var(--rotation, 0deg) + 135deg));
  }
  100% {
    transform: translateX(0) rotate(calc(var(--rotation, 0deg) + 180deg));
  }
}

@media (max-width: 768px) {
  .top-right {
    width: clamp(250px, 55vw, 350px);
  }
}

@media (max-width: 480px) {
  .top-right {
    width: 220px;
  }
}
</style>
