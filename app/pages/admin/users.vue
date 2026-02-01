<template>
  <NuxtLayout name="admin">
    <h1 class="text-h5 font-weight-bold mb-4">Users</h1>

    <v-data-table
      :headers="headers"
      :items="users"
      item-key="id"
    >
      <template #item.status="{ item }">
        <v-chip
          :color="item.status === 'active' ? 'green' : 'red'"
          size="small"
        >
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>
  </NuxtLayout>
</template>

<script setup lang="ts">
const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Role', key: 'role' },
  { title: 'Status', key: 'status' }
]

const users = [
  {
    id: 1,
    name: 'Manoj Kumar',
    email: 'manoj@gmail.com',
    role: 'User',
    status: 'active'
  },
  {
    id: 2,
    name: 'Admin',
    email: 'admin@sarkariprep.com',
    role: 'Admin',
    status: 'active'
  }
]
</script>
