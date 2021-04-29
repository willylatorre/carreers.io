

<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import Searchbar from '../components/common/searchbar.vue'
import Sidebar from '../components/common/sidebar.vue'
import CpContainer from '../components/cp/CpContainer.vue'
import { useCareers } from '@/plugins/careers'
import CpSubmitModal from '../components/cp/CpSubmitModal.vue'

export default defineComponent({
  components: {
    Searchbar,
    Sidebar,
    CpContainer,
    CpSubmitModal,
  },
  setup() {
    const { loadCps, showSubmitForm } = useCareers()

    onMounted(() => {
      loadCps()
    })

    return {
      showSubmitForm
    }
  },
})
</script>


<template>
  <div class="home">
    <!-- <searchbar /> -->
    <sidebar />
    <cp-container />

    <cp-submit-modal v-if="showSubmitForm" @close="showSubmitForm = false" />
  </div>
</template>

<style>
.home {
  @apply p-4;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 727px) {
    grid-template-columns: 240px 1fr;
    gap: 24px;
  }
}
</style>
