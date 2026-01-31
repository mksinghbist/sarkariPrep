<template>
  <v-app-bar
    color="primary"
    density="comfortable"
    flat
  >
    <v-container class="d-flex align-center">
      <v-img
        src="/sarkariprep-logo.svg"
        max-width="150"
        class="mr-6"
      />

      <v-spacer />

      <v-btn variant="text" to="/dashboard">Dashboard</v-btn>
      <v-btn variant="text" to="/dashboard/exams">Exams</v-btn>
      <v-btn variant="text" to="/dashboard/analytics">Analytics</v-btn>
      <v-btn variant="text">Logout</v-btn>
    </v-container>
  </v-app-bar>
</template>
