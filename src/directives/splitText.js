// directives/splitText.js
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default {
  mounted(el, binding) {
    const {
      delay = 100,
      duration = 0.6,
      ease = 'power3.out',
      splitType = 'chars',
      from = { opacity: 0, y: 40 },
      to = { opacity: 1, y: 0 },
      onComplete = null,
    } = binding.value || {}

    const absoluteLines = splitType === 'lines'
    if (absoluteLines) el.style.position = 'relative'

    // 🛑 Hide the element initially
    el.style.visibility = 'hidden'

    let splitter
    try {
      splitter = new SplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: 'split-line',
      })
    } catch (error) {
      console.error('Failed to create SplitText:', error)
      return
    }

    const targets = splitter[splitType] || splitter.chars
    if (!targets || targets.length === 0) {
      console.warn('No targets found for SplitText animation')
      splitter.revert()
      return
    }

    targets.forEach((t) => {
      t.style.willChange = 'transform, opacity'
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%', // 👈 Trigger animation when top reaches 80% of viewport
        toggleActions: 'play none none none',
        once: true,
        onEnter: () => {
          el.style.visibility = 'visible' // 👈 Make it visible right when scroll enters
        },
      },
      onComplete: () => {
        gsap.set(targets, {
          ...to,
          clearProps: 'willChange',
          immediateRender: true,
        })
        if (onComplete) onComplete()
      },
    })

    tl.set(targets, { ...from, immediateRender: false, force3D: true })
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    })

    el._splitTextCleanup = () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => st.kill())
      gsap.killTweensOf(targets)
      if (splitter) splitter.revert()
    }
  },

  unmounted(el) {
    if (el._splitTextCleanup) el._splitTextCleanup()
  },
}
