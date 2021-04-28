<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import CpCard from './CpCard.vue'
import { useCareers } from '@/plugins/careers'
import { useMediaQuery } from '@vueuse/core'
import CpSubmitModal from './CpSubmitModal.vue'

export default defineComponent({
  components: { CpCard, CpSubmitModal },
  setup() {
    const { filteredCps, filterCategory, toggleCheck, loading, showSubmitForm } = useCareers()
    const isLargeScreen = useMediaQuery('(min-width: 727px)')
    const editCp = ref(null)

    const edit = (cp) => {
      editCp.value = cp
      showSubmitForm.value = true
    }

    return {
      edit,
      editCp,
      loading,
      toggleCheck,
      filteredCps,
      filterCategory,
      isLargeScreen,
      showSubmitForm,
    }
  },
})
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-medium text-xl">
        Showing <strong>{{ filteredCps.length }}</strong> career pages
      </h2>
      <span class="text-xs" v-show="isLargeScreen"
        >Sort by <strong>newest</strong></span
      >
    </div>

    <div
      class="flex flex-col items-center justify-center min-h-[400px] w-full"
      v-if="loading"
      v-loading="true"
      element-loading-text="Loading careeer pages..."
      element-loading-background="rgba(255, 255, 255, 0.1)"
    ></div>
    <div class="grid grid-cols-fill gap-4" v-else>
      <cp-card
        :cp="cp"
        v-for="cp in filteredCps"
        :key="cp._id"
        @check="toggleCheck(cp)"
        @edit="edit(cp)"
        @filter="filterCategory(cp.category)"
      />
    </div>
    <cp-submit-modal
      :edit="editCp"
      />
  </div>
</template>