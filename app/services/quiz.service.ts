/* ---------------- TYPES ---------------- */

export type QuestionOption = {
  id: string
  text: {
    en: string
    hi?: string
  }
}

export type Question = {
  id: string
  question: {
    en: string
    hi?: string
  }
  options: QuestionOption[]
  correctOption: string
  marks: number
  negativeMarks?: number
}

export type QuizSection = {
  id: string
  name: string
  questions: Question[]
}

export type QuizSet = {
  id: string
  title: string
  duration: number
  totalQuestions: number
  sections: QuizSection[]
}

export type ExamResponse = {
  exam: string
  examCode: string
  sets: QuizSet[]
}

/* ---------------- SERVICE ---------------- */

class QuizService {
  /**
   * Load full exam JSON (SSC / UPSC / Banking)
   */
  async loadExam(examCode: string): Promise<ExamResponse> {
    try {
      return await $fetch<ExamResponse>(
        `/questions/${examCode}.json`
      )
    } catch (error) {
      console.error('Failed to load exam:', examCode)
      throw error
    }
  }

  /**
   * Load a single quiz set by setId
   */
  async loadQuizSet(
    examCode: string,
    setId: string
  ): Promise<QuizSet | null> {
    const exam = await this.loadExam(examCode)
    return exam.sets.find(set => set.id === setId) ?? null
  }

  /**
   * Flatten questions for quiz runner
   */
  extractQuestions(set: QuizSet): Question[] {
    return set.sections.flatMap(
      (section) => section.questions
    )
  }
}

export const quizService = new QuizService()
