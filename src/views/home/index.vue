<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useUserStore } from "@/store"

const userStore = useUserStore()
const { name } = storeToRefs(userStore)
const handleClickSetStore = () => {
  userStore.increment("是狗")
}
</script>

<template>
  <h1>我是page-home</h1>
  <h2>来自store的数据：{{ name }}</h2>
  <button @click="handleClickSetStore">修改store的数据</button>
</template>

<style scoped lang="scss"></style>
