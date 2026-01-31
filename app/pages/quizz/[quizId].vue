<script setup lang="ts">
import QuestionCard from '@/components/quiz/QuestionCard.vue'
import Options from '@/components/quiz/Options.vue'
import Timer from '@/components/quiz/Timer.vue'
import { useQuizStore } from '~/stores/quiz/store'

const quizStore = useQuizStore()

const route = useRoute()
const router = useRouter()
const { startQuiz, setAnswer, nextQuestion, markForReview } = quizStore
const {
  quiz,
  questions,
  totalAnswered,
  currentIndex,
  currentQuestion,
  timeLeft,
  answers,
  isLastQuestion
} = storeToRefs(quizStore)
const selectOptionId = ref<string>('')
onMounted(() => {
  const courseId = route.query.courseId as string
  const quizId = route.params.quizId as string
  startQuiz(courseId, quizId)
})

const selectOption = (optionId: string) => {
  selectOptionId.value = optionId
  if (currentQuestion.value) {
    setAnswer(currentQuestion.value.id, optionId)
  }
}

// const markReview = () => {
//   if (currentQuestion.value) {
//     const questionId = currentQuestion.value.id - 1
//     console.log('Marking question for review:', questionId)
//     markForReview(questionId)
//     selectOptionId.value = answers.value[currentQuestion.value.id] || ''
//     nextQuestion()
//   }
// }

const previousQuestion = () => {
  quizStore.previousQuestion()
  selectOptionId.value = answers.value[currentQuestion.value.id - 1] || ''
}



const enablePrev = computed(() => currentIndex.value > 0)

const skip = () => {
  quizStore.nextQuestion()
}

const next = async () => {
  if (isLastQuestion.value) {
    await quizStore.submitQuiz()
    router.push('/quiz/result')
  } else {
    selectOptionId.value = ''
    nextQuestion()
  }
}

const onTimeout = () => {
  nextQuestion()
}

const isLast = computed(() => isLastQuestion.value)
</script>
<template>
  <v-container v-if="quiz">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-4">
      <h2 class="text-h6 font-weight-bold">
        {{ quiz.title }} - Answered: {{ totalAnswered }} / {{ questions.length }}
      </h2>

      <Timer
        :time="timeLeft"
        @timeout="onTimeout"
      />
    </div>

    <!-- Question -->
    <QuestionCard
      :question="currentQuestion"
      :index="currentIndex"
      :total="questions.length"
    />

    <!-- Options -->
    <Options
      v-if="currentQuestion?.options"
      :options="currentQuestion.options"
      :selected="selectOptionId"
      @select="selectOption"
    />

    <!-- Actions -->
    <v-row class="mt-6">
      <v-col cols="6" v-if="enablePrev">
        <v-btn variant="outlined" @click="previousQuestion">
          Previous
        </v-btn>
      </v-col>
      <v-col :cols="enablePrev ? 6 : 12" class="d-flex justify-end">
        <div>
          <v-btn
            v-if="!isLast"
            variant="text"
            class="mr-4"
            @click="skip"
          >
            Skip
          </v-btn>
        </div>
        <div>
            <v-btn color="primary" @click="next">
            {{ isLast ? 'Submit' : 'Next' }}
        </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

