import type { QuizState } from '~/domain/interface/common'
export const exam: Ref<QuizState['exam']> = ref([])
export const quiz: Ref<QuizState['quiz']> = ref(null)
export const questions: Ref<QuizState['questions']> = ref([])
export const currentIndex: Ref<QuizState['currentIndex']> = ref(0)
export const answers: Ref<QuizState['answers']> = ref({})
export const reviewLater: Ref<QuizState['reviewLater']> = ref([])
export const timeLeft: Ref<QuizState['timeLeft']> = ref(0)
export const startedAt: Ref<QuizState['startedAt']> = ref(null)
export const completed: Ref<QuizState['completed']> = ref(false)


