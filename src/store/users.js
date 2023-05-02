import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const users = ref([])
  

  function addUser(user) {
    users.value = [...users.value, user]
  }

  async function getUser(id) {
    const found = users.value.find(user => +user.id === +id)
    if(!found) return Promise.reject('User not found')
    return Promise.resolve(found)
  }

  return { users, addUser, getUser }
})