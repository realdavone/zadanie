<template>
  <div class="table">
    <div v-if="userStore.users.length === 0">Žiadny užívatelia</div>
    <template v-else>
      <table>
        <tr>
          <th>Meno</th>
          <th>Priezvisko</th>
          <th>Email</th>
        </tr>
        <tr v-for="user in userStore.users" :key="user.id">
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td><RouterLink :to="`/user/${user.id}`">Prejsť</RouterLink></td>
        </tr>
      </table>
    </template>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/users'

const userStore = useUserStore()
</script>

<style scoped>
div.table {
  width: 1180px;
  background-color: #F5F5F5;
  margin-top: 76px;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
}
table{
  width: 100%
}
table th {
  text-align: left;
  color: var(--text-blue-color);
}
a{
  all: unset;
  cursor: pointer;
}
</style>