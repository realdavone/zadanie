<template>
  <div class="banner"> 
    <div class="left">
      <div class="top">Lorem ipsum dolor <span style="color: var(--text-blue-color)">adipiscing elit</span></div>
      <div class="middle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Adipiscing sit bibendum erat mus egestas suscipit tristique id.
        Diam commodo venenatis.
      </div>
      <div class="bottom">
        <button class="button" @click="getData()">Naplniť tabuľku</button>
      </div>
    </div>
    <div class="right">
      <img src="../assets/image.png" alt="">
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/users'

const userStore = useUserStore()

async function getData() {
  try {
    const res = await fetch('https://random-data-api.com/api/v2/users')
    const user = await res.json()

    userStore.addUser(user)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.banner {
  width: 1180px;
  height: 460px;
  background: #EFF9FF;
  border-radius: 80px;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  gap: 140px;
}
div.left{
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: 100px;
}
button.button{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 48px;
  gap: 10px;

  background: #000000;
  border-radius: 24px;
  color: white;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  cursor: pointer;
}
div.right img {
  height: 460px;
}
div.top{
  font-size: 40px;
  font-weight: 600;
  line-height: 56px;
}
div.middle{
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
}
</style>