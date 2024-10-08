import {
  getOrCreateUser,
  registerRef,
  fetchTasks,
  completeTask,
} from '@/api/app'
import { defineStore } from 'pinia'
import { useScoreStore } from './score'
import { useTelegram } from '@/services/telegram'

const { user } = useTelegram()

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {},
    tasks: [],
  }),
  actions: {
    async init(ref) {
      this.user = await getOrCreateUser()

      const score = useScoreStore()

      score.setScore(this.user.score)

      if (ref && +ref !== +this.user.telegram) {
        await registerRef(user?.first_name ?? 'Lizard God', ref)
      }
    },
    async completeTask(task) {
      await completeTask(this.user, task)
    },
    async fetchTasks() {
      this.tasks = await fetchTasks()
    },
  },
})
