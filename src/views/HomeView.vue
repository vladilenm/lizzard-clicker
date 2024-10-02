<template>
  <div class="game-container">
    <ScoreProgress />
    <div class="header">
      <img src="../assets/coin.png" alt="coin" />
      <h2 class="score" id="score">42</h2>
    </div>
    <div class="circle">
      <img @click="increment" ref="img" id="circle" src="../assets/frog.png" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ScoreProgress from '@/components/ScoreProgress.vue'

const img = ref(null)

function increment(event) {
  const rect = event.target.getBoundingClientRect()

  const offfsetX = event.clientX - rect.left - rect.width / 2
  const offfsetY = event.clientY - rect.top - rect.height / 2

  const DEG = 40

  const tiltX = (offfsetY / rect.height) * DEG
  const tiltY = (offfsetX / rect.width) * -DEG

  img.value.style.setProperty('--tiltX', `${tiltX}deg`)
  img.value.style.setProperty('--tiltY', `${tiltY}deg`)

  setTimeout(() => {
    img.value.style.setProperty('--tiltX', `0deg`)
    img.value.style.setProperty('--tiltY', `0deg`)
  }, 300)

  const plusOne = document.createElement('div')
  plusOne.classList.add('plus-one')
  plusOne.textContent = '+1'
  plusOne.style.left = `${event.clientX - rect.left}px`
  plusOne.style.top = `${event.clientY - rect.top}px`

  img.value.parentElement.appendChild(plusOne)

  setTimeout(() => plusOne.remove(), 2000)
}
</script>
