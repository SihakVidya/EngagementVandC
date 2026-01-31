<template>
  <div class="parallax-container">
    <div
      v-for="flower in flowers"
      :key="flower.id"
      class="flower"
      :style="getFlowerStyle(flower)"
    >
      <svg
        :width="flower.size"
        :height="flower.size"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Watercolor Rose -->
        <defs>
          <radialGradient :id="`rose-grad-${flower.id}`" cx="50%" cy="50%" r="50%">
            <stop offset="0%" :stop-color="flower.centerColor" stop-opacity="0.9" />
            <stop offset="70%" :stop-color="flower.petalColor" stop-opacity="0.7" />
            <stop offset="100%" :stop-color="flower.petalColor" stop-opacity="0.3" />
          </radialGradient>
          <filter :id="`blur-${flower.id}`" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        <!-- Outer petals -->
        <ellipse cx="50" cy="30" rx="20" ry="25" :fill="`url(#rose-grad-${flower.id})`" :filter="`url(#blur-${flower.id})`" opacity="0.6" />
        <ellipse cx="70" cy="45" rx="22" ry="20" :fill="`url(#rose-grad-${flower.id})`" :filter="`url(#blur-${flower.id})`" opacity="0.6" />
        <ellipse cx="65" cy="70" rx="20" ry="22" :fill="`url(#rose-grad-${flower.id})`" :filter="`url(#blur-${flower.id})`" opacity="0.6" />
        <ellipse cx="35" cy="70" rx="20" ry="22" :fill="`url(#rose-grad-${flower.id})`" :filter="`url(#blur-${flower.id})`" opacity="0.6" />
        <ellipse cx="30" cy="45" rx="22" ry="20" :fill="`url(#rose-grad-${flower.id})`" :filter="`url(#blur-${flower.id})`" opacity="0.6" />

        <!-- Inner petals -->
        <ellipse cx="50" cy="40" rx="15" ry="18" :fill="flower.centerColor" :filter="`url(#blur-${flower.id})`" opacity="0.7" />
        <ellipse cx="60" cy="50" rx="14" ry="16" :fill="flower.centerColor" :filter="`url(#blur-${flower.id})`" opacity="0.7" />
        <ellipse cx="55" cy="60" rx="14" ry="15" :fill="flower.centerColor" :filter="`url(#blur-${flower.id})`" opacity="0.7" />
        <ellipse cx="45" cy="60" rx="14" ry="15" :fill="flower.centerColor" :filter="`url(#blur-${flower.id})`" opacity="0.7" />
        <ellipse cx="40" cy="50" rx="14" ry="16" :fill="flower.centerColor" :filter="`url(#blur-${flower.id})`" opacity="0.7" />

        <!-- Center -->
        <circle cx="50" cy="50" r="10" :fill="flower.centerColor" opacity="0.8" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useParallax } from '../composables/useParallax'

const { scrollY } = useParallax()

const flowers = [
  { id: 1, x: -5, y: 10, size: 120, speed: 0.3, rotationSpeed: 0.02, petalColor: '#ffc0cb', centerColor: '#ffb6c1' },
  { id: 2, x: 85, y: 5, size: 100, speed: 0.2, rotationSpeed: -0.015, petalColor: '#e6c3e6', centerColor: '#dda0dd' },
  { id: 3, x: 90, y: 30, size: 80, speed: 0.4, rotationSpeed: 0.025, petalColor: '#ffe4e6', centerColor: '#ffb6c1' },
  { id: 4, x: -8, y: 45, size: 90, speed: 0.25, rotationSpeed: -0.02, petalColor: '#e9d5ff', centerColor: '#dda0dd' },
  { id: 5, x: 88, y: 55, size: 110, speed: 0.35, rotationSpeed: 0.018, petalColor: '#ffc0cb', centerColor: '#ff99aa' },
  { id: 6, x: -3, y: 70, size: 95, speed: 0.15, rotationSpeed: -0.012, petalColor: '#e9d5ff', centerColor: '#c9a0dc' },
  { id: 7, x: 92, y: 80, size: 85, speed: 0.45, rotationSpeed: 0.022, petalColor: '#ffe4e6', centerColor: '#ffb6c1' },
  { id: 8, x: 5, y: 90, size: 100, speed: 0.28, rotationSpeed: -0.016, petalColor: '#ffc0cb', centerColor: '#dda0dd' },
]

const getFlowerStyle = (flower) => {
  const translateY = scrollY.value * flower.speed
  const rotation = scrollY.value * flower.rotationSpeed

  return {
    left: `${flower.x}%`,
    top: `${flower.y}%`,
    width: `${flower.size}px`,
    height: `${flower.size}px`,
    transform: `translateY(${translateY}px) rotate(${rotation}deg)`,
  }
}
</script>

<style scoped>
.parallax-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.flower {
  position: absolute;
  will-change: transform;
  opacity: 0.7;
  transition: transform 0.1s ease-out;
}

@media (max-width: 768px) {
  .flower {
    opacity: 0.5;
  }
}
</style>
