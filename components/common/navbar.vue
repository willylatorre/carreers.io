<script>
export default {
  methods: {
    submitCarreerPage() {
    }
  }
}
</script>

<template>
  <nav class="p-4 flex items-center justify-between">
    <n-link to="/">
      <img src="~/assets/img/logo.svg" alt="career pages" width="180" class="w-logo" />
    </n-link>
    <el-button
      icon="el-icon-upload2"
      @click="submitCarreerPage"
    > Submit a carreer page
    </el-button>
  </nav>
</template>