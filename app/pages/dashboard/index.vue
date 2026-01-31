<template>
  <v-container>
    <h1 class="text-h5 font-weight-bold mb-6">
      Welcome back 👋
    </h1>

    <v-row>
      <!-- Daily Quiz -->
      <v-col cols="12" md="4">
        <v-card elevation="4" class="pa-4">
          <h3 class="text-subtitle-1 font-weight-bold">
            Daily Quiz
          </h3>
          <p class="text-body-2 text-medium-emphasis mt-2">
            Practice today’s questions
          </p>
          <v-btn block color="primary" class="mt-4">
            Start Quiz
          </v-btn>
        </v-card>
      </v-col>

      <!-- Mock Test -->
      <v-col cols="12" md="4">
        <v-card elevation="4" class="pa-4">
          <h3 class="text-subtitle-1 font-weight-bold">
            Full Mock Test
          </h3>
          <p class="text-body-2 text-medium-emphasis mt-2">
            Simulate real exam experience
          </p>
          <v-btn block color="primary" class="mt-4">
            Take Mock
          </v-btn>
        </v-card>
      </v-col>

      <!-- Performance -->
      <v-col cols="12" md="4">
        <v-card elevation="4" class="pa-4">
          <h3 class="text-subtitle-1 font-weight-bold">
            Performance
          </h3>
          <p class="text-body-2 text-medium-emphasis mt-2">
            Track your accuracy & rank
          </p>
          <v-btn
            block
            color="primary"
            class="mt-4"
            to="/dashboard/analytics"
          >
            View Analytics
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
