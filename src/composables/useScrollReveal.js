import { onUnmounted } from 'vue'

export function useScrollReveal(options = {}) {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const mergedOptions = { ...defaultOptions, ...options }
  let observer = null

  const initObserver = () => {
    if (observer) return // Already initialized

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, mergedOptions)

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })
  }

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    init: initObserver,
    observer
  }
}
