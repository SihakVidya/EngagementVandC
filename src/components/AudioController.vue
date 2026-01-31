<template>
  <div class="audio-controller">
    <audio
      ref="audioRef"
      :src="audioSrc"
      loop
      preload="auto"
    ></audio>

    <button
      class="audio-button"
      @click="toggleMute"
      :aria-label="isMuted ? 'Unmute music' : 'Mute music'"
    >
      <div class="audio-icon-wrapper">
        <VolumeX v-if="isMuted" :size="18" />
        <Volume2 v-else :size="18" />
      </div>
      <span class="audio-label">{{ isMuted ? 'Play Music' : 'Playing' }}</span>
      <div v-if="!isMuted" class="audio-waves">
        <span class="wave"></span>
        <span class="wave"></span>
        <span class="wave"></span>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Volume2, VolumeX } from 'lucide-vue-next'

const props = defineProps({
  audioSrc: {
    type: String,
    default: '/music/background.mp3'
  }
})

const audioRef = ref(null)
const isMuted = ref(true)

const toggleMute = () => {
  if (!audioRef.value) return

  if (isMuted.value) {
    audioRef.value.play().then(() => {
      isMuted.value = false
    }).catch(err => {
      console.log('Audio play failed:', err)
    })
  } else {
    audioRef.value.pause()
    isMuted.value = true
  }
}

const startAudio = () => {
  if (!audioRef.value) return

  audioRef.value.volume = 0.5
  audioRef.value.play().then(() => {
    isMuted.value = false
  }).catch(() => {
    isMuted.value = true
  })
}

// Expose startAudio so parent can call it
defineExpose({ startAudio })
</script>

<style scoped>
.audio-controller {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
}

.audio-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 165, 165, 0.3);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(90, 74, 90, 0.15);
}

.audio-button:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(90, 74, 90, 0.2);
}

.audio-button:active {
  transform: scale(0.98);
}

.audio-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5a4a5a;
}

.audio-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #5a4a5a;
  letter-spacing: 0.05em;
}

.audio-waves {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: 0.25rem;
}

.wave {
  width: 3px;
  height: 12px;
  background: linear-gradient(to top, #d4a5a5, #c9a0dc);
  border-radius: 2px;
  animation: wave 1s ease-in-out infinite;
}

.wave:nth-child(1) {
  animation-delay: 0s;
  height: 8px;
}

.wave:nth-child(2) {
  animation-delay: 0.2s;
  height: 12px;
}

.wave:nth-child(3) {
  animation-delay: 0.4s;
  height: 6px;
}

@keyframes wave {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.5);
  }
}

@media (max-width: 768px) {
  .audio-controller {
    bottom: 16px;
    right: 16px;
  }

  .audio-button {
    padding: 0.625rem 1rem;
  }

  .audio-label {
    font-size: 0.7rem;
  }
}
</style>
