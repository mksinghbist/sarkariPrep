<script setup lang="ts">
import type { Option } from '@/domain/interface/common'
import QuestionCard from '@/components/quiz/QuestionCard.vue'
import Options from '@/components/quiz/Options.vue'
import Timer from '@/components/quiz/Timer.vue'
import { useQuizStore } from '~/stores/quiz/store'

const quizStore = useQuizStore()

const route = useRoute()
const router = useRouter()
const { startQuiz, setAnswer, 
  nextQuestion, markForReview, previousQuestion } 
  = quizStore
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

const previousQuest = () => {
  selectOptionId.value = answers.value[currentQuestion.value.id - 1] || ''
  previousQuestion()
}



const enablePrev = computed(() => currentIndex.value > 0)

const skip = () => {
  quizStore.nextQuestion()
}

const next = async () => {
  if (isLastQuestion.value) {
    await quizStore.submitQuiz()
    navigateTo('/quizz/result')
  } else {
    selectOptionId.value = answers.value?.[currentQuestion.value.id + 1] || ''
    nextQuestion()
  }
}

const optionList = computed<Option[]>(() => {
  const opts = currentQuestion.value?.options
  if (!opts) return []

  return Object.keys(opts).map(key => ({
    id: key,
    en: opts[key]?.en ?? '',
    hi: opts[key]?.hi ?? ''
  }))
})


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
        {{ quiz.title }}
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
      :options="optionList"
      :selected="selectOptionId"
      @select="(optionId: string) => selectOption(optionId)"
    />

    <!-- Actions -->
    <v-row class="mt-6">
      <v-col cols="6" v-if="enablePrev">
        <v-btn variant="outlined" @click="previousQuest">
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

