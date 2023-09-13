<template>
  <div>
    <h1>我是page-about</h1>
    <button @click="handleCheckOut(1)">切换about1页面</button>
    <button @click="handleCheckOut(2)">切换about2页面</button>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useApp } from "@/hooks/useApp"

const { router } = useApp()

const handleCheckOut = (val: number) => {
  router.push(`/about/${val}`)
}
</script>

<style lang="scss" scoped></style>
