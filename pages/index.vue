

<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import Searchbar from '../components/common/searchbar.vue'
import Sidebar from '../components/common/sidebar.vue'
import CpContainer from '../components/cp/CpContainer.vue'
import { useCareers } from '@/plugins/careers'

export default defineComponent({
   components: {
    Searchbar,
    Sidebar,
    CpContainer
  },
  setup() {
    const { loadCps } = useCareers()
  
    onMounted(() => {
      loadCps()
    })
    
    return  {
    }
  },
})
</script>


<template>
  <div class="home">
    <!-- <searchbar /> -->
    <sidebar />
    <cp-container />
  </div>
</template>

<style>
.home {
 @apply p-4;
 display: grid;
 grid-template-columns: 1fr;
 gap: 24px;

 @media (min-width: 727px) {
   grid-template-columns: 240px 1fr;
 }
}


</style>
