<!-- components/AnimatedCount.vue -->
<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  to: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 1000 // duración en ms
  }
})

const display = ref(0)

let startTimestamp = null

const animate = (timestamp) => {
  if (!startTimestamp) startTimestamp = timestamp
  const progress = Math.min((timestamp - startTimestamp) / props.duration, 1)
  display.value = Math.floor(progress * props.to)

  if (progress < 1) {
    requestAnimationFrame(animate)
  }
}

watch(() => props.to, () => {
  startTimestamp = null
  requestAnimationFrame(animate)
})
</script>

<template>
  <span>{{ display }}</span>
</template>
