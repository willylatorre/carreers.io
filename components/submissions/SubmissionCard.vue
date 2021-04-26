<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    submission: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const styleBg = computed(() => ({
      backgroundImage: `url(${props.submission.logo})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }))

    return {
      styleBg
    }
  },
})
</script>

<template>
  <div class="cp-card">
    <div>
      <div
        class="rounded overflow-hidden w-[40px] h-[40px] mb-2"
        :style="styleBg"
      ></div>
      <h3 class="font-medium mb-2">{{ submission.name }}</h3>
      <p class="text-sm">
        {{ submission.description }}
      </p>
      <div class="flex my-4 flex-wrap">
        <el-tag size="small" type="info">
          {{ submission.category }}
        </el-tag>
      </div>
    </div>

    <span
      class="break-all text-xs"
      @click="$emit('check')"
    >
      <i class="el-icon-link mr-1"></i>
      {{ submission.url }}
    </span>
    <div class="flex mt-4">
      <el-button icon="el-icon-close" class="flex-1" type="error" @click="$emit('reject')" />
      <el-button
      class="flex-1"
        icon="el-icon-check"
        type="primary"
        @click="$emit('approve')"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>