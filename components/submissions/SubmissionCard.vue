<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    submission: {
      type: Object,
      required: true,
    },
    loading: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const styleBg = computed(() => ({
      backgroundImage: `url(${props.submission.logo})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }))

    return {
      styleBg,
    }
  },
})
</script>

<template>
  <div class="cp-card stateless">
    <div>
      <div
        class="rounded overflow-hidden w-[40px] h-[40px] mb-2"
        :style="styleBg"
      ></div>
      <h3 class="font-medium mb-2">{{ submission.name }}</h3>
      <p class="text-sm">
        {{ submission.description }}
      </p>
    </div>

    <div>
      <div class="flex my-4 justify-between">
        <el-tag
          size="small"
          class="cursor-pointer"
        >
          {{ submission.category }}
        </el-tag>
        <el-popover trigger="hover" v-if="submission.locations">
          <h4 class="font-medium text-sm">Locations</h4>
          <ul class="text-xs">
            <li v-for="location in submission.locations" :key="location.city">
              {{ location.city }}, {{ location.country }}
            </li>
          </ul>
          <div class="inline text-gray-600" slot="reference">
            <i class="el-icon-location"></i> {{ submission.locations.length }}
          </div>
        </el-popover>
      </div>

      <span class="break-all text-xs" @click="$emit('check')">
        <i class="el-icon-link mr-1"></i>
        {{ submission.url }}
      </span>
      <div class="flex mt-4">
        <el-button
          icon="el-icon-close"
          class="flex-1"
          type="error"
          :loading="loading === 'decline'"
          @click="$emit('decline')"
        />
        <el-button
          class="flex-1"
          icon="el-icon-check"
          type="primary"
          :loading="loading === 'approve'"
          @click="$emit('approve')"
        />
      </div>
    </div>

    <el-button
      icon="el-icon-edit"
      class="absolute top-4 right-4"
      size="small"
      circle
      @click="$emit('edit')"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>