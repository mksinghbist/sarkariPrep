export type QuizType = 'DAILY' | 'MOCK'

export type Option = {
  id: string
  en: string
  hi?: string
}
export interface Question {
    id: string
    question_hi: string
    question_en: string
    options: Record<string, Option>
    answer: string
    timeLimit?: number          // seconds
}

export interface Quiz {
  id: string
  title: string
  exam: 'SSC' | 'UPSC' | 'BANKING' | 'RAILWAY' | 'POLICE'
  type?: QuizType
  totalQuestions: number
  totalTime: number
}
export interface ExamSet {
    id: string
    title: string
    type: string
    duration: number
    totalQuestions: number
    questions: Question[]
}
export interface Exam {
  name: string
  code: string
  desc: string
  sets: ExamSet[]
}

export interface QuizState {
    exam: Exam[]
    quiz: Quiz | null
    questions: Question[]
    currentIndex: number
    answers: Record<string, string>
    reviewLater: string[]
    timeLeft: number
    startedAt: number | null
    completed: boolean
}
