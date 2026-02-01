import { quizService } from '@/services/quiz.service'
import type {Question, ExamSet } from '@/domain/interface/common'
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
export const examLoadQuiz = async (quizId: string) => {
    const examResponse = await quizService.loadExam(quizId);
    console.log('Exam Response:', examResponse);
    exam.value = examResponse // Assuming 'exams' is the correct property
  }
export const startQuiz = async (courdId: string, setId: string) => {
  const res = exam.value.find(e => e.code === courdId)?.sets.find(s => s.id === setId)
  quiz.value = res as ExamSet || null
  questions.value = res?.questions as Question[] || []
  currentIndex.value = 0
  answers.value = {}
  reviewLater.value = []
  completed.value = false
  startedAt.value = Date.now()
}
export const setAnswer = (questionId: string, optionId: string) => {
  answers.value[questionId] = optionId
}

export const markForReview = (questionId: string) => {
  if (!reviewLater.value.includes(questionId)) {
    reviewLater.value.push(questionId)
  }
}
export const nextQuestion = () => {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++
  }
}
export const previousQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
export const submitQuiz = () => {
  if (completed.value) {
    return
  }
    completed.value = true

    return {
      quizId: quiz.value?.id,
      answers: answers.value,
      startedAt: startedAt.value,
      submittedAt: Date.now()
    }
}
export const resetQuiz = () => {
    quiz.value = null
    questions.value = []
    currentIndex.value = 0
    answers.value = {}
    reviewLater.value = []
    startedAt.value = null
    completed.value = false
    timeLeft.value = 60 * 1000 // Reset to default time (e.g., 60 seconds)  
}