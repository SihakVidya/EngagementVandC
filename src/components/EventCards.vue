<template>
  <section class="events">
    <h2 class="section-title reveal">Ceremony Details</h2>

    <div class="cards-container">
      <div class="event-card reveal">
        <Calendar class="card-icon" :size="28" />
        <h3 class="card-title">Date</h3>
        <p class="card-content">Sunday</p>
        <p class="card-highlight">April 26th, 2026</p>
      </div>

      <div class="event-card reveal">
        <Clock class="card-icon" :size="28" />
        <h3 class="card-title">Time</h3>
        <p class="card-content">Morning Ceremony</p>
        <p class="card-highlight">8:00 AM - 12:00 PM</p>
      </div>

      <div class="event-card reveal">
        <MapPin class="card-icon" :size="28" />
        <h3 class="card-title">Venue</h3>
        <p class="card-content">Cheata's Home</p>
        <p class="card-highlight">Chak Angre Krom, Phnom Penh</p>
      </div>

      <div class="event-card reveal">
        <Sparkles class="card-icon" :size="28" />
        <h3 class="card-title">Dress Code</h3>
        <p class="card-content">Traditional Khmer Attire</p>
        <p class="card-highlight">or Formal Elegant</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-vue-next'
</script>

<style scoped>
.events {
  padding: 4rem 2rem;
  position: relative;
  z-index: 10;
}

.section-title {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #5a4a5a;
  text-align: center;
  margin-bottom: 3rem;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

.event-card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(90, 74, 90, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(90, 74, 90, 0.15);
}

.card-icon {
  color: #d4a5a5;
  margin-bottom: 1rem;
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: #5a4a5a;
  margin-bottom: 0.75rem;
  letter-spacing: 0.1em;
}

.card-content {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #7a6a7a;
  margin-bottom: 0.25rem;
}

.card-highlight {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #5a4a5a;
}

@media (max-width: 768px) {
  .events {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .cards-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .event-card {
    padding: 1.5rem;
  }
}
</style>
