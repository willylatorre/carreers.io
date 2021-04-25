<script>
import CpCard from './CpCard.vue'
export default {
  components: { CpCard },
}
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center mb-8">
      <h2 class="font-medium text-xl">Showing <strong>43</strong> career pages</h2>
      <span class="text-xs">Sort by <strong>newest</strong></span>
    </div>

    <div class="grid grid-cols-fill gap-4" >
      <cp-card :cp="{}" />
      <cp-card :cp="{}" />
      <cp-card :cp="{}" />
    </div>
    
  </div>
</template>