<script>
export default {
  props: {
    cp: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div
    class="bg-white rounded drop-shadow border border-border min-w-card p-4"
  >
    <div></div>
    <h3 class="font-medium mb-2">Dropbox</h3>
    <p>
      Dropbox exists wherever our people do. We are now a Virtual First company.
    </p>
    <div class="flex my-4 flex-wrap">
      <el-tag size="small" class="m-1">Remote</el-tag>
      <el-tag size="small" class="m-1">San Francisco</el-tag>
      <el-tag size="small" class="m-1">Austin</el-tag>
    </div>
    <a href="/" target="_new" rel="norel noopener" class="el-button el-button--primary w-full flex items-center">
      <i class="el-icon-link mr-2"></i>Visit
    </a>
  </div>
</template>