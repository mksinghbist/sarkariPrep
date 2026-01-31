import type { Question, QuizState } from '@/domain/interface/common'
import {
  exam,
  quiz,
  questions,
  currentIndex,
  answers,
  reviewLater,
  timeLeft,
  startedAt,
  completed
} from './state'

  export const examlist = computed(() => {
    console.log('Exam Value:', exam.value);
    return exam.value || []
  })
  export const quizSet = computed(() => exam.value.map(e => e.sets))
  export const allQuestions = computed(() => questions.value)
  export const currentQuestion = computed(() => {
    const currentQuestions = questions.value
    const currentIndexValue = currentIndex.value
    return currentQuestions[currentIndexValue] as Question
  })

  export const totalAnswered = computed(() => Object.keys(answers.value).length
  )

  export const isLastQuestion = computed(() => currentIndex.value === questions.value.length - 1)

  export const isQuestionMarkedForReview = computed((): boolean =>
    {
    return reviewLater.value.includes(currentQuestion.value.id)
  })

  export const progressPercent = computed((): number  => {
    const totalQuestions = questions.value.length
    if (totalQuestions === 0) return 0
    return (totalAnswered.value / totalQuestions) * 100
  }
)