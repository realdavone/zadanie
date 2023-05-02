<template>
  <main>
    <code v-if="user">
      {{ user }}
    </code>
    <div v-if="errorRef">{{ errorRef }}</div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useUserStore } from '../store/users'
import { ref, onMounted } from 'vue'

const route = useRoute()
const userStore = useUserStore()

const user = ref(null)
const errorRef = ref(null)

onMounted(async () => {
  try {
    user.value = await userStore.getUser(route.params.id)
  } catch (error) {
    errorRef.value = error
  }
})
</script>

<style>
main{
  padding: 20px;
}
</style>