<template>
  <div class="progress">
    <h4 class="progress-level">
      <span>{{ store.currentScore }} / {{ store.level.value }}</span>
      <span>{{ store.level.level + 1 }}</span>
    </h4>
    <div class="progress-container">
      <div class="progress-value" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
import { useScoreStore } from '@/stores/score'
import { computed } from 'vue'

const store = useScoreStore()

const progress = computed(() => (100 * store.currentScore) / store.level.value)
</script>
