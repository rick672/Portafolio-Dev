<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const elements = ref([])

const positionElementsCenter = () => {
  let numberOffset = -140

  elements.value.forEach(el => {
    if (!el) return

    el.style.position = 'absolute'
    el.style.opacity = '1'
    el.style.transition = 'none'

    if (el.textContent === '4' || el.textContent === '0') {
      const rect = el.getBoundingClientRect()
      el.style.left = `${(window.innerWidth / 2) + numberOffset}px`
      el.style.top = `${window.innerHeight * 0.25}px`
      numberOffset += 100
    } else if (el.textContent.includes('Página no encontrada')) {
      const rect = el.getBoundingClientRect()
      el.style.left = `${(window.innerWidth - rect.width) / 2}px`
      el.style.top = `${window.innerHeight * 0.45}px`
    } else if (el.textContent.includes('Disculpa')) {
      const rect = el.getBoundingClientRect()
      el.style.left = `${(window.innerWidth - rect.width) / 2}px`
      el.style.top = `${window.innerHeight * 0.60}px`
    } else {
      const rect = el.getBoundingClientRect()
      el.style.left = `${(window.innerWidth - rect.width) / 2}px`
      el.style.top = `${window.innerHeight * 0.70}px`
    }
  })
}

const applyGravity = () => {
  const gravity = 0.4
  const bounce = 0.7
  const friction = 0.99

  elements.value.forEach((el, index) => {
    if (!el) return

    let delay = 0
    
    if (index <= 2) {
      delay = index * 500
    } else if (index === 3) {
      delay = 1500
    } else if (index === 4) {
      delay = 2000
    } else {
      delay = 2500
    }

    const rect = el.getBoundingClientRect()
    let y = rect.top
    let x = rect.left
    let vy = 0
    let vx = Math.random() * 4 - 2
    let rotation = Math.random() * 20 - 10
    let vr = Math.random() * 2 - 1

    const animate = () => {
      vy += gravity
      vy *= friction
      vx *= friction
      vr *= friction

      y += vy
      x += vx
      rotation += vr

      if (x < 0) {
        x = 0
        vx *= -bounce
      } else if (x + el.offsetWidth > window.innerWidth) {
        x = window.innerWidth - el.offsetWidth
        vx *= -bounce
      }

      if (y + el.offsetHeight > window.innerHeight) {
        y = window.innerHeight - el.offsetHeight
        vy *= -bounce
        vx *= 0.9
        vr *= 0.9
      }

      el.style.left = `${x}px`
      el.style.top = `${y}px`
      el.style.transform = `rotate(${rotation}deg)`

      if (Math.abs(vy) > 0.1 || Math.abs(vx) > 0.1) {
        requestAnimationFrame(animate)
      }
    }

    setTimeout(animate, delay)
  })
}

const setupDrag = () => {
  elements.value.forEach(el => {
    if (!el) return

    let isDragging = false
    let offsetX, offsetY

    const mouseDown = (e) => {
      isDragging = true
      offsetX = e.clientX - el.getBoundingClientRect().left
      offsetY = e.clientY - el.getBoundingClientRect().top
      el.style.cursor = 'grabbing'
      el.style.transition = 'none'
    }

    const mouseMove = (e) => {
      if (!isDragging) return
      el.style.left = `${e.clientX - offsetX}px`
      el.style.top = `${e.clientY - offsetY}px`
    }

    const mouseUp = () => {
      isDragging = false
      el.style.cursor = 'grab'
    }

    el.addEventListener('mousedown', mouseDown)
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)

    // Limpiar al desmontar
    return () => {
      el.removeEventListener('mousedown', mouseDown)
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mouseup', mouseUp)
    }
  })
}

onMounted(() => {
  // Usar refs en lugar de querySelectorAll
  elements.value = [...document.querySelectorAll('.gravity-element')]
  
  positionElementsCenter()
  setTimeout(applyGravity, 3000)
  setupDrag()
})

onUnmounted(() => {
  // Limpiar cualquier animación pendiente si es necesario
})
</script>

<template>
  <main class="h-screen overflow-hidden relative">
    <!-- Números 404 -->
    <div class="gravity-element opacity-0 text-9xl font-bold text-error cursor-grab">4</div>
    <div class="gravity-element opacity-0 text-9xl font-bold text-warning cursor-grab">0</div>
    <div class="gravity-element opacity-0 text-9xl font-bold text-error cursor-grab">4</div>

    <!-- Título -->
    <div
      class="gravity-element opacity-0 text-5xl sm:text-6xl font-bold tracking-tight cursor-grab w-full text-center px-4">
      {{ $t('404.title') }}
    </div>

    <!-- Mensaje -->
    <div class="gravity-element opacity-0 text-xl cursor-grab max-w-2xl mx-auto px-4 text-center">
      {{ $t('404.description') }}
    </div>

    <!-- Botón -->
    <router-link to="/"
      class="gravity-element opacity-0 btn btn-accent btn-lg rounded-lg px-8 shadow-lg hover:shadow-xl transition-all cursor-grab">
      {{ $t('404.button') }}
    </router-link>
  </main>
</template>

<style>
.gravity-element {
  position: absolute;
  will-change: transform;
  user-select: none;
  z-index: 10;
}

/* Efecto de sombra para dar profundidad */
.gravity-element:not(.btn) {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

@media (max-width: 640px) {
  .gravity-element.text-9xl {
    font-size: 5rem;
  }
  .gravity-element.text-5xl {
    font-size: 2rem;
  }
}
</style>
