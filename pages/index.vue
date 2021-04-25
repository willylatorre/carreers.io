<template>
  <div class="home">
    <!-- <searchbar /> -->
    <sidebar />
    <cp-container />
  </div>
</template>

<script>
import Searchbar from '../components/common/searchbar.vue'
import Sidebar from '../components/common/sidebar.vue'
import CpContainer from '../components/cp/CpContainer.vue'
export default {
  components: {
    Searchbar,
    Sidebar,
    CpContainer
  }
}
</script>

<style>
.home {
 @apply p-4;
 display: grid;
 grid-template-columns: 240px 1fr;
 gap: 24px;

}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
