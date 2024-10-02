import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => ({
    score: 0,
  }),
})
