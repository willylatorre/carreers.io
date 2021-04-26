
<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import { useSubmissions, provideSubmissions } from '@/plugins/submissions'
import SubmissionsContainer from '../components/submissions/SubmissionsContainer.vue'

export default defineComponent({
  components: {
    SubmissionsContainer,
  },
  setup() {
    const { loadSubmissions } = provideSubmissions()

    onMounted(() => {
      loadSubmissions()
    })

    return {}
  },
})
</script>

<template>
  <div class="p-4">
    <submissions-container />
  </div>
</template>