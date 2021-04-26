<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useCareers } from '@/plugins/careers'

export default defineComponent({
  setup() {
    const { showSubmitForm } = useCareers()

    return {
      showSubmitForm,
    }
  },
})
</script>

<template>
  <nav class="p-4 flex items-center justify-between">
    <n-link to="/">
      <img
        src="~/assets/img/logo.svg"
        alt="career pages"
        width="180"
        class="w-logo"
      />
    </n-link>
    <el-button icon="el-icon-upload2" @click="showSubmitForm = true">
      Submit a page
    </el-button>
  </nav>
</template>