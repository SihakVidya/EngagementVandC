<template>
  <div class="app">
    <!-- Envelope Opener -->
    <EnvelopeOpener @opened="onInvitationOpened" />

    <!-- Fixed Background -->
    <div class="background-image" :style="{ backgroundImage: `url(${bgImage})` }"></div>

    <!-- Fixed Elements (show after opened) -->
    <template v-if="isOpened">
      <Logo />
      <SakuraDecor />
      <AudioController ref="audioController" audioSrc="/music/background.mp3" />
    </template>

    <!-- Main Content -->
    <main class="main-content" :class="{ 'visible': isOpened }">
      <HeroSection :animationReady="animationReady" />
      <InvitationStatement />
      <EventCards />
      <MapSection />
      <RSVPForm />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useScrollReveal } from './composables/useScrollReveal'

// Assets
import bgImage from '@/assets/bg.webp'

// Components
import EnvelopeOpener from './components/EnvelopeOpener.vue'
import Logo from './components/Logo.vue'
import SakuraDecor from './components/SakuraDecor.vue'
import AudioController from './components/AudioController.vue'
import HeroSection from './components/HeroSection.vue'
import InvitationStatement from './components/InvitationStatement.vue'
import EventCards from './components/EventCards.vue'
import MapSection from './components/MapSection.vue'
import RSVPForm from './components/RSVPForm.vue'
import Footer from './components/Footer.vue'

const isOpened = ref(false)
const animationReady = ref(false)
const audioController = ref(null)

// Initialize scroll reveal (manual init)
const { init: initScrollReveal } = useScrollReveal()

const onInvitationOpened = () => {
  isOpened.value = true

  // Start music and scroll reveal after components are mounted
  nextTick(() => {
    if (audioController.value) {
      audioController.value.startAudio()
    }

    // Delay animations until page is fully visible
    setTimeout(() => {
      animationReady.value = true
      initScrollReveal()
    }, 1000)
  })
}

onMounted(() => {
  // Always start from top on refresh
  window.scrollTo(0, 0)

  // Smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth'
})

// Also handle browser's scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
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
  opacity: 0;
  transition: opacity 0.8s ease;
}

.main-content.visible {
  opacity: 1;
}
</style>
