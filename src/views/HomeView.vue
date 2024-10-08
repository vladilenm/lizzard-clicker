<template>
  <div class="game-container">
    <ScoreProgress />
    <div class="header">
      <img src="../assets/coin.png" alt="coin" />
      <h2 class="score" id="score">{{ store.score }}</h2>
    </div>
    <div class="circle">
      <img @click="increment" ref="img" id="circle" :src="imgSrc" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ScoreProgress from '@/components/ScoreProgress.vue'
import { useScoreStore } from '@/stores/score'
import frog from '@/assets/frog.png'
import lizard from '@/assets/lizzard.png'

const img = ref(null)
const imgSrc = computed(() => (store.score > 25 ? lizard : frog))

const store = useScoreStore()

function increment(event) {
  store.add(1)
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
