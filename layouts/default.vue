<template>
  <div class="bg-gray-100">
    <div class="bg-white">
      <navbar class="max-w-screen-lg mx-auto" />
    </div>
    <main class="max-w-screen-lg mx-auto min-h-[100vh]">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>

<style>
html {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
