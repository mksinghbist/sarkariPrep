<template>
  <v-app>
    <!-- Top Bar -->
    <v-app-bar color="primary" dark>
      <v-app-bar-title>SarkariPrep Admin</v-app-bar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer permanent>
      <v-list nav>
        <v-list-item to="/admin" title="Dashboard" prepend-icon="mdi-view-dashboard" />
        <v-list-item to="/admin/questions" title="Questions" prepend-icon="mdi-help-circle" />
        <v-list-item to="/admin/users" title="Users" prepend-icon="mdi-account-group" />
      </v-list>
    </v-navigation-drawer>

    <!-- Page Content -->
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
