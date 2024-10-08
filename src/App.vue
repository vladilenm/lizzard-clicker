<template>
  <main class="game" v-if="loaded">
    <div class="page">
      <RouterView />
    </div>
    <TheMenu />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheMenu from './components/TheMenu.vue'
import { onMounted, ref } from 'vue'
import { useAppStore } from '@/stores/app'
import { useTelegram } from '@/services/telegram'

const loaded = ref(false)
const app = useAppStore()

const { tg } = useTelegram()

const urlParams = new URLSearchParams(window.location.search)

app.init(urlParams.get('ref')).then(() => {
  loaded.value = true
})

onMounted(() => {
  tg.ready()

  tg.expand()
})
</script>
