<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useCareers, Category } from '@/plugins/careers'
import { useMediaQuery } from '@vueuse/core'

export default defineComponent({
  setup() {
    const url = ref('')
    const showFilters = ref(false)
    const { filters, showSubmitForm } = useCareers()
    const isSmallScreen = useMediaQuery('(max-width: 727px)')
    const isLargeScreen = useMediaQuery('(min-width: 727px)')

    return {
      url,
      showFilters,
      isSmallScreen,
      isLargeScreen,
      showSubmitForm,
      filters,
      Category,
    }
  },
})
</script>


<template>
  <div class="">
    <div class="bg-yellow-50 rounded-xl p-4" v-show="isLargeScreen">
      <h2 class="font-medium mb-2">Submit a career page</h2>
      <p class="text-sm">
        Are you missing an specific career page? Feel free to submit it!
      </p>
      <el-input v-model="url" class="my-2" />
      <el-button size="small" type="primary" @click="showSubmitForm = true">
        Submit career page
      </el-button>
    </div>

    <el-button
      plain
      size="small"
      icon="el-icon-s-operation"
      v-show="isSmallScreen"
      class="absolute right-4"
      @click="showFilters = true"
    >
      Filters
    </el-button>

    <no-ssr>
      <portal to="filters-dialog" :disabled="isLargeScreen">
        <h3 class="font-medium mb-3 mt-4">Personalize view</h3>
        <el-checkbox v-model="filters.checked">Hide visited pages </el-checkbox>
        <h3 class="font-medium mb-3 mt-4">Categories</h3>
        <el-checkbox-group
          v-model="filters.categories"
          class="flex flex-col items-start"
        >
          <el-checkbox
            v-for="(label, category) in Category"
            :key="category"
            :label="category"
          >
            {{ label }}
          </el-checkbox>
        </el-checkbox-group>
      </portal>
    </no-ssr>

    <el-dialog
      :visible.sync="showFilters"
      title="Filters"
      lock-scroll
      fullscreen
    >
      <portal-target name="filters-dialog"> </portal-target>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="showFilters = false">Apply</el-button>
      </span>
    </el-dialog>
  </div>
</template>