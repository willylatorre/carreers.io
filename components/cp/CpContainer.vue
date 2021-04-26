<script>
import { defineComponent } from '@nuxtjs/composition-api'
import CpCard from './CpCard.vue'
import { useCareers } from '@/plugins/careers'
import { useMediaQuery } from '@vueuse/core'

export default defineComponent({
  components: { CpCard },
  setup() {
    const { filteredCps, toggleCheck, loading } = useCareers()
    const isLargeScreen = useMediaQuery('(min-width: 727px)')

    return {
      loading,
      toggleCheck,
      filteredCps,
      isLargeScreen,
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
        @filter="filterCategory(cp.category)"
      />
    </div>
  </div>
</template>