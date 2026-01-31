import { ref, onMounted, onUnmounted } from 'vue'

export function useParallax() {
  const scrollY = ref(0)
  const windowHeight = ref(0)

  const handleScroll = () => {
    scrollY.value = window.scrollY
  }

  const handleResize = () => {
    windowHeight.value = window.innerHeight
  }

  onMounted(() => {
    windowHeight.value = window.innerHeight
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
  })

  const getParallaxStyle = (speed = 0.5, rotationSpeed = 0.015) => {
    const translateY = scrollY.value * speed
    const rotation = scrollY.value * rotationSpeed

    return {
      transform: `translateY(${translateY}px) rotate(${rotation}deg)`
    }
  }

  return {
    scrollY,
    windowHeight,
    getParallaxStyle
  }
}
