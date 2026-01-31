<script setup lang="ts">
const tab = ref<'login' | 'signup'>('login')
</script>

<template>
  <v-container
    fluid
    class="fill-height d-flex align-center justify-center bg"
  >
    <v-row class="w-100" align="center" justify="center">
      
      <!-- Branding (Desktop only) -->
      <v-col
        cols="12"
        md="6"
        class="d-none d-md-flex flex-column justify-center px-10"
      >
        <h1 class="text-h3 font-weight-bold text-primary">
          SarkariPrep
        </h1>
        <p class="text-subtitle-1 text-medium-emphasis mt-4">
          Prepare Smart. Crack Government Exams with Confidence.
        </p>
      </v-col>

      <!-- Auth Card -->
      <v-col cols="12" md="4">
        <v-card
          elevation="8"
          rounded="xl"
          class="pa-6"
        >
          <!-- Mobile Logo -->
          <div class="text-center d-md-none mb-4">
            <h2 class="font-weight-bold text-primary">
              SarkariPrep
            </h2>
          </div>

          <!-- Tabs -->
          <v-tabs
            v-model="tab"
            grow
            color="primary"
          >
            <v-tab value="login">Login</v-tab>
            <v-tab value="signup">Signup</v-tab>
          </v-tabs>

          <!-- Forms -->
          <v-window v-model="tab" class="pt-8" touch>

            <!-- LOGIN -->
            <v-window-item value="login">
              <v-text-field
                label="Mobile / Email"
                variant="outlined"
                density="comfortable"
              />

              <v-text-field
                label="Password / OTP"
                type="password"
                variant="outlined"
                density="comfortable"
              />

              <v-btn
                block
                color="primary"
                size="large"
                class="mt-4"
              >
                Login
              </v-btn>
            </v-window-item>

            <!-- SIGNUP -->
            <v-window-item value="signup">
              <v-text-field
                label="Full Name"
                variant="outlined"
                density="comfortable"
              />

              <v-text-field
                label="Mobile Number"
                variant="outlined"
                density="comfortable"
              />

              <v-text-field
                label="Email (optional)"
                variant="outlined"
                density="comfortable"
              />

              <v-btn
                block
                color="primary"
                size="large"
                class="mt-4"
              >
                Signup
              </v-btn>
            </v-window-item>

          </v-window>

        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<style scoped>
/* ONLY branding background – acceptable even with Vuetify */
.bg {
  background: linear-gradient(135deg, #f5f7fa, #eceff1);
}
</style>
