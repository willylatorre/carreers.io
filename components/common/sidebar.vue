<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useCareers, Category } from '@/plugins/careers'

export default defineComponent({
  setup() {
    const url = ref('')
    const { filters } = useCareers()

    console.log({ Category });

    return {
      url,
      filters,
      Category
    }
  },
})
</script>


<template>
  <div class="">
    <div class="bg-yellow-50 rounded-xl p-4">
      <h2 class="font-medium mb-2">Submit a career page</h2>
      <p class="text-sm">
        Are you missing an specific career page? Feel free to submit it!
      </p>
      <el-input v-model="url" class="my-2" />
      <el-button size="small" type="primary"> Submit career page </el-button>
    </div>
    <h3 class="font-medium mb-3 mt-4">Personalize view</h3>
    <el-checkbox v-model="filters.checked">Hide visited pages </el-checkbox>
    <h3 class="font-medium mb-3 mt-4">Categories</h3>
    <el-checkbox-group v-model="filters.categories" class="flex flex-col items-start">
      <el-checkbox
        v-for="(label, category) in Category"
        :key="category"
        :label="category"
      >
        {{ label }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>