<script>
import { defineComponent } from '@nuxtjs/composition-api'
import CpCard from './CpCard.vue'
import { useCareers } from '@/plugins/careers'

export default defineComponent({
  components: { CpCard },
  setup() {
    const { cps } = useCareers()
    return {
      cps
    }
  }
})
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-medium text-xl">Showing <strong>43</strong> career pages</h2>
      <span class="text-xs">Sort by <strong>newest</strong></span>
    </div>

    <div class="grid grid-cols-fill gap-4" >
      <cp-card :cp="cp" v-for="cp in cps" :key="cp.name" />
    </div>
    
  </div>
</template>