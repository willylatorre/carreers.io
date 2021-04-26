<script>
import {
  computed,
  defineComponent,
  reactive,
  ref,
} from '@nuxtjs/composition-api'
import { useMediaQuery } from '@vueuse/core'
import { useCareers, Category } from '@/plugins/careers'

export default defineComponent({
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  setup(props, ctx) {
    const isLargeScreen = useMediaQuery('(min-width: 727px)')
    const { submit, showSubmitForm } = useCareers()
    const loading = ref(false)
    const form = reactive({
      name: '',
      category: '',
      url: props.url || '',
      logo: '',
      description: '',
    })

    const onSubmit = async () => {
      loading.value = true
      await submit(form)
      loading.false
      showSubmitForm.value = false
    }

    const styleBg = computed(() => ({
      backgroundImage: `url(${
        form?.logo || ' https://via.placeholder.com/80x80.png'
      })`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }))

    return {
      form,
      loading,
      styleBg,
      onSubmit,
      isLargeScreen,
      showSubmitForm,
      Category,
    }
  },
})
</script>

<template>
  <el-dialog
    title="Submit a career page"
    lock-scroll
    :visible.sync="showSubmitForm"
    :fullscreen="!isLargeScreen"
    :width="isLargeScreen ? '45%' : 'full'"
  >
    <div class="cp-card stateless border border-border rounded-xl p-4">
      <div class="flex items-center mb-2">
        <div
          class="rounded overflow-hidden w-[40px] h-[40px] flex-shrink-0"
          :style="styleBg"
        ></div>
        <el-input
          placeholder="Add a logo url"
          class="ml-4"
          v-model="form.logo"
        ></el-input>
      </div>

      <el-input
        class="font-medium mb-2"
        placeholder="Add a name"
        v-model="form.name"
      ></el-input>
      <el-input
        class="text-sm"
        v-model="form.description"
        placeholder="Add a description"
      >
      </el-input>
      <div class="flex my-2 items-center justify-between">
        <el-tag size="small" type="info" class="mr-2" v-if="form.category">
          {{ Category[form.category] }}
        </el-tag>

        <el-select v-model="form.category" placeholder="Pick a category">
          <el-option
            :label="label"
            :value="category"
            v-for="(label, category) in Category"
            :key="category"
          />
        </el-select>
      </div>

      <el-input
        v-model="form.url"
        prefix-icon="el-icon-link"
        placeholder="Add the careers page url"
        class="w-full flex items-center"
      >
        {{ form.url }}
      </el-input>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="showSubmitForm = false">Cancel</el-button>
      <el-button type="primary" @click="onSubmit" :loading="loading"
        >Confirm</el-button
      >
    </span>
  </el-dialog>
</template>