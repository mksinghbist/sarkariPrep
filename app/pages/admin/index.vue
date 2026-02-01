<template>
  <NuxtLayout name="admin">
    <h1 class="text-h5 font-weight-bold mb-6">Admin Dashboard</h1>

    <v-row>
      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <h3>Total Users</h3>
          <h2 class="text-primary">12,540</h2>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <h3>Total Questions</h3>
          <h2 class="text-success">8,230</h2>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <h3>Active Tests</h3>
          <h2 class="text-info">14</h2>
        </v-card>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>
