<script setup>
import Banner from '../components/Banner.vue'
import Table from '../components/Table.vue'
</script>

<template>
  <main>
    <Banner />
    <Table />
  </main>
</template>

<style scoped>
main{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  padding: 20px;
}
</style>