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
    }))

    return {
      styleBg,
      tagTypes
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
      <div class="flex my-4 flex-wrap">
        <!-- <el-tag size="small" class="m-1" v-for="tag in cp.tags" :key="tag">{{
          tag
        }}</el-tag> -->
        <el-tag size="small"
        :type="tagTypes[cp.category.length % 4]"
        @click="$emit('filter')"
        >
        {{ cp.categoryLabel}}
        </el-tag>
      </div>
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
    <el-button
      icon="el-icon-check"
      class="absolute top-4 right-4"
      :type="cp.checked ? 'warning' : ''"
      size="small"
      circle
      @click="$emit('check')"
    />
  </div>
</template>

<style lang="scss" scoped>
.cp-card {
  @apply bg-white;
  @apply rounded;
  @apply drop-shadow;
  @apply border;
  @apply border-border;
  @apply min-w-card;
  @apply p-4;
  @apply relative;
  @apply flex;
  @apply flex-col;
  @apply justify-between;

  transition: transform .2s ease-in;

  &:hover {
    transform: scale(1.05);
  }
}
</style>