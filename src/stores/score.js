import { defineStore } from 'pinia'
import debounce from 'lodash.debounce'
import { updateScore } from '@/api/app'

const debouncedUpdateScore = debounce(updateScore, 500)

// const debounced = debounce((score) => {
//   console.log('score', score)
// }, 500)

const baseLevelScore = 25

// [25, 50, 100]
const levels = new Array(15)
  .fill(0)
  .map((_, i) => baseLevelScore * Math.pow(2, i))

const levelScores = levels.map((_, level) => {
  let sum = 0

  for (let [index, value] of levels.entries()) {
    if (index >= level) {
      return sum + value
    }
    sum += value
  }

  return sum
})

function computeLevelByScore(score) {
  for (let [index, value] of levelScores.entries()) {
    if (score <= value) {
      return {
        level: index,
        value: levels[index],
      }
    }
  }
}

export const useScoreStore = defineStore('score', {
  state: () => ({
    score: 0,
  }),
  getters: {
    level: (state) => computeLevelByScore(state.score),
    currentScore(state) {
      if (this.level.level === 0) {
        return state.score
      }
      return state.score - levelScores[this.level.level - 1]
    },
  },
  actions: {
    add(score = 1) {
      this.score += score
      debouncedUpdateScore(this.score)
    },
    setScore(score) {
      this.score = score
    },
  },
})
