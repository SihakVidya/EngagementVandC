<template>
  <div class="app">
    <!-- Fixed Background -->
    <div class="background-image" :style="{ backgroundImage: `url(${bgImage})` }"></div>

    <!-- Fixed Elements -->
    <Logo />
    <SakuraDecor />
    <AudioController audioSrc="/music/background.mp3" />

    <!-- Main Content -->
    <main class="main-content">
      <HeroSection />
      <InvitationStatement />
      <EventCards />
      <MapSection />
      <RSVPForm />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollReveal } from './composables/useScrollReveal'

// Assets
import bgImage from '@/assets/bg.webp'

// Components
import Logo from './components/Logo.vue'
import SakuraDecor from './components/SakuraDecor.vue'
import AudioController from './components/AudioController.vue'
import HeroSection from './components/HeroSection.vue'
import InvitationStatement from './components/InvitationStatement.vue'
import EventCards from './components/EventCards.vue'
import MapSection from './components/MapSection.vue'
import RSVPForm from './components/RSVPForm.vue'
import Footer from './components/Footer.vue'

// Initialize scroll reveal
useScrollReveal()

onMounted(() => {
  // Smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<style scoped>
.app {
  position: relative;
  min-height: 100vh;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.main-content {
  position: relative;
  z-index: 10;
}
</style>
