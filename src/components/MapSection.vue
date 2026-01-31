<template>
  <section class="map-section">
    <h2 class="section-title reveal">Find Us Here</h2>

    <div class="map-container reveal">
      <div
        class="map-wrapper"
        :class="{ 'map-hovered': isMapHovered }"
        @mouseenter="isMapHovered = true"
        @mouseleave="isMapHovered = false"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.2!2d104.9327373!3d11.497856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI5JzUyLjMiTiAxMDTCsDU1JzU3LjkiRQ!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
          width="100%"
          height="400"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <a
        :href="mapLink"
        target="_blank"
        rel="noopener noreferrer"
        class="map-button"
      >
        <MapPin :size="18" />
        <span>View on Google Maps</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { MapPin } from 'lucide-vue-next'

const isMapHovered = ref(false)
const mapLink = 'https://www.google.com/maps?q=11.497856,104.9327373'
</script>

<style scoped>
.map-section {
  padding: 4rem 2rem;
  position: relative;
  z-index: 10;
}

.section-title {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #5a4a5a;
  text-align: center;
  margin-bottom: 2.5rem;
}

.map-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.map-wrapper {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(90, 74, 90, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: filter 0.5s ease;
}

.map-wrapper iframe {
  display: block;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
}

.map-wrapper.map-hovered iframe,
.map-wrapper:focus-within iframe {
  filter: grayscale(0%);
}

.map-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 165, 165, 0.3);
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #5a4a5a;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(90, 74, 90, 0.1);
}

.map-button:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(90, 74, 90, 0.15);
}

.map-button:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .map-section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .map-wrapper iframe {
    height: 300px;
  }
}
</style>
