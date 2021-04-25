<script>
import { computed, defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  props: {
    cp: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    const styleBg = computed(() => ({
      backgroundImage: `url(${props.cp.logo})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center'
    }))

    return {
      styleBg
    }
  }
})
</script>

<template>
  <div
    class="bg-white rounded drop-shadow border border-border min-w-card p-4 relative"
    :class="{'opacity-60': cp.checked}"
  >
    <div class="rounded overflow-hidden w-[40px] h-[40px] mb-2" :style="styleBg"></div>
    <h3 class="font-medium mb-2">{{cp.name}}</h3>
    <p class="text-sm">
     {{ cp.description}}
    </p>
    <div class="flex my-4 flex-wrap">
      <el-tag size="small" class="m-1" v-for="tag in cp.tags" :key="tag">{{ tag }}</el-tag>
    </div>
    <a
    :href="cp.url" 
    target="_new" 
    rel="norel noopener" 
    class="el-button el-button--primary w-full flex items-center"
    @click="$emit('check')"
    >
      <i class="el-icon-link mr-2"></i>
      {{ cp.checked ? 'Visited' : 'Visit'}}
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