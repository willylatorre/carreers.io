<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
const tagTypes = ['', 'info', 'success', 'warning']

export default defineComponent({
  props: {
    cp: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const styleBg = computed(() => ({
      backgroundImage: `url(${props.cp.logo})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }))

    return {
      styleBg,
      tagTypes,
    }
  },
})
</script>

<template>
  <div class="cp-card" :class="{ 'opacity-60': cp.checked }">
    <div>
      <div
        class="rounded overflow-hidden w-[40px] h-[40px] mb-2"
        :style="styleBg"
      ></div>
      <h3 class="font-medium mb-2">{{ cp.name }}</h3>
      <p class="text-sm">
        {{ cp.description }}
      </p>
    </div>

    <div>
      <div class="flex my-4 justify-between">
        <el-tag
          size="small"
          class="cursor-pointer"
          :type="tagTypes[cp.category.length % 4]"
          @click="$emit('filter')"
        >
          {{ cp.categoryLabel }}
        </el-tag>
        <el-popover trigger="hover" v-if="cp.locations">
          <h4 class="font-medium text-sm">Locations</h4>
          <ul class="text-xs">
            <li v-for="location in cp.locations" :key="location.city">
              {{ location.city }}, {{ location.country }}
            </li>
          </ul>
          <div class="inline text-gray-600" slot="reference">
            <i class="el-icon-location"></i> {{ cp.locations.length }}
          </div>
        </el-popover>
      </div>

      <a
        :href="cp.url"
        target="_new"
        rel="norel noopener"
        class="el-button el-button--primary w-full flex items-center"
        @click="$emit('check')"
      >
        <i class="el-icon-link mr-1"></i>
        {{ cp.checked ? 'Visited' : 'Visit' }}
      </a>
    </div>
    <el-button
      icon="el-icon-edit"
      class="absolute top-4 right-4"
      size="small"
      circle
      @click="$emit('edit')"
      v-if="$route.name === 'edit'"
    />
    <el-button
      icon="el-icon-check"
      class="absolute top-4 right-4"
      :type="cp.checked ? 'warning' : ''"
      size="small"
      circle
      v-else
      @click="$emit('check')"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>