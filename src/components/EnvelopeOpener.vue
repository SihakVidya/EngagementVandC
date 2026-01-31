<template>
  <div class="envelope-overlay" :class="{ 'opened': isOpened, 'hidden': isHidden }">
    <div class="envelope-container">
      <!-- Envelope -->
      <div class="envelope">
        <!-- Letter inside (behind everything initially) -->
        <div class="letter" :class="{ 'rise': isOpened }">
          <div class="letter-content">
            <p class="letter-subtitle">You're Invited</p>
            <h2 class="letter-title">V & C</h2>
            <p class="letter-date">26 . 04 . 2026</p>
          </div>
        </div>

        <!-- Envelope Back -->
        <div class="envelope-back"></div>

        <!-- Envelope Flap (closed, pointing down) -->
        <div class="envelope-flap" :class="{ 'open': isOpened }"></div>

        <!-- Wax Seal (above envelope) -->
        <div class="wax-seal" :class="{ 'hide': isOpened }">
          <span>V & C</span>
        </div>

        <!-- Envelope Front -->
        <div class="envelope-front"></div>
      </div>

      <!-- Open Button -->
      <button
        v-if="!isOpened"
        class="open-button"
        @click="openEnvelope"
      >
        <span>Open Invitation</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['opened'])

const isOpened = ref(false)
const isHidden = ref(false)

const openEnvelope = () => {
  isOpened.value = true

  // After animation completes, hide overlay and emit event
  setTimeout(() => {
    isHidden.value = true
    emit('opened')
  }, 2000)
}
</script>

<style scoped>
.envelope-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fdf2f4 0%, #f5e6e8 50%, #e8dde0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.8s ease, visibility 0.8s ease;
}

.envelope-overlay.opened {
  pointer-events: none;
}

.envelope-overlay.hidden {
  opacity: 0;
  visibility: hidden;
}

.envelope-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.envelope {
  position: relative;
  width: 320px;
  height: 220px;
  perspective: 1000px;
}

/* Envelope Back - hidden initially */
.envelope-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #f8e8ea 0%, #f0d8db 100%);
  border-radius: 8px;
  z-index: 1;
  opacity: 0;
}

/* Envelope Front (covers entire body) */
.envelope-front {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #fff0f2 0%, #ffe4e6 100%);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(90, 74, 90, 0.15);
  z-index: 4;
}

.envelope-front::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, transparent 49.5%, rgba(212, 165, 165, 0.08) 50%);
  border-radius: 8px;
}

/* Envelope Flap (closed - pointing down over front) */
.envelope-flap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55%;
  background: linear-gradient(180deg, #ffecee 0%, #ffe4e6 100%);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  transform-origin: top center;
  transition: transform 0.8s ease-in-out;
  z-index: 6;
}

.envelope-flap.open {
  transform: rotateX(-180deg);
  z-index: 0;
}

/* Wax Seal (positioned above envelope) */
.wax-seal {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 55px;
  height: 55px;
  background: linear-gradient(145deg, #d4a5a5 0%, #b89090 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 15px rgba(150, 100, 100, 0.4), inset 0 2px 3px rgba(255, 255, 255, 0.3);
  z-index: 10;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.wax-seal.hide {
  opacity: 0;
  transform: translateX(-50%) scale(0.5);
}

.wax-seal span {
  font-family: 'Playfair Display', serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  letter-spacing: 0.05em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Letter */
.letter {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  height: 160px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 15px rgba(90, 74, 90, 0.1);
  z-index: 3;
  transition: transform 1s ease-in-out 0.3s, opacity 0.3s ease;
  overflow: hidden;
  opacity: 0;
}

.letter::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 0%, rgba(255, 228, 230, 0.3) 100%);
}

.letter.rise {
  opacity: 1;
  transform: translateX(-50%) translateY(-180px);
}

.letter-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1.5rem;
  text-align: center;
}

.letter-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #9a8a9a;
  margin-bottom: 0.5rem;
}

.letter-title {
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  color: #5a4a5a;
  margin-bottom: 0.5rem;
}

.letter-date {
  font-family: 'Playfair Display', serif;
  font-size: 0.9rem;
  color: #7a6a7a;
  letter-spacing: 0.15em;
}

/* Open Button */
.open-button {
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #d4a5a5 0%, #c9a0dc 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(212, 165, 165, 0.4);
  animation: pulse 2s ease-in-out infinite;
}

.open-button span {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  letter-spacing: 0.1em;
}

.open-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(212, 165, 165, 0.5);
}

.open-button:active {
  transform: scale(0.98);
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 20px rgba(212, 165, 165, 0.4);
  }
  50% {
    box-shadow: 0 4px 30px rgba(212, 165, 165, 0.6);
  }
}

/* Responsive */
@media (max-width: 480px) {
  .envelope {
    width: 280px;
    height: 190px;
  }

  .letter {
    top: 50px;
    height: 130px;
  }

  .letter.rise {
    transform: translateX(-50%) translateY(-160px);
  }

  .letter-title {
    font-size: 2.5rem;
  }

  .letter-content {
    padding: 1rem;
  }

  .open-button {
    padding: 0.875rem 2rem;
  }

  .wax-seal {
    top: 40px;
    width: 48px;
    height: 48px;
  }

  .wax-seal span {
    font-size: 0.65rem;
  }
}
</style>
