import * as getters from './getters'
import * as actions  from './actions'
import * as state from './state'

export const useQuizStore = defineStore('quiz', () => {
  return {
    ...state,
    ...getters,
    ...actions
  }
})
