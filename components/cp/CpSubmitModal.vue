<script>
import {
  computed,
  defineComponent,
  nextTick,
  reactive,
  ref,
  watch,
} from '@nuxtjs/composition-api'
import { useMediaQuery } from '@vueuse/core'
import { useCareers, Category } from '@/plugins/careers'
import addCityPopover from '../common/add-city-popover.vue'

export default defineComponent({
  components: { addCityPopover },
  props: {
    url: {
      type: String,
      default: '',
    },
    edit: {
      type: Object,
      default: () => null,
    },
  },
  setup(props, ctx) {
    const isLargeScreen = useMediaQuery('(min-width: 727px)')
    const { submit, update, showSubmitForm } = useCareers()
    const loading = ref(false)
    const form = reactive({
      name: '',
      category: '',
      url: props.url || '',
      logo: '',
      description: '',
      locations: [],
    })

    const parseEdit = () => {
      form._id = props.edit?._id || ''
      form.name = props.edit?.name || ''
      form.category = props.edit?.category || ''
      form.url = props.edit?.url || ''
      form.logo = props.edit?.logo || ''
      form.description = props.edit?.description || ''
      form.locations = props.edit?.locations || []
    }

    watch(
      () => props.edit?._id,
      () => {
        nextTick(parseEdit)
      }
    )

    const clearForm = () => {
      form._id = ''
      form.name = ''
      form.category = ''
      form.url = ''
      form.logo = ''
      form.description = ''
      form.locations = []
    }

    const onSubmit = async () => {
      loading.value = true
      if (form._id) {
        await update(form)
      } else {
        await submit(form)
      }

      loading.value = false
      showSubmitForm.value = false
      clearForm()
    }

    const styleBg = computed(() => ({
      backgroundImage: `url(${
        form?.logo || ' https://via.placeholder.com/80x80.png'
      })`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }))

    const addLocation = (loc) => {
      form.locations.push(loc)
    }

    const editLocation = (loc) => {
      const index = form.locations.findIndex((lo) => lo.city === loc.city)
      form.locations.splice(index, 1, loc)
    }

    return {
      form,
      loading,
      styleBg,
      onSubmit,
      isLargeScreen,
      showSubmitForm,
      Category,
      addLocation,
      editLocation,
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
    <el-alert
      title="If you are missing a career page, feel free to submit it and it will be reviewed as soon as possible."
      type="info"
      show-icon
    />
    <div class="cp-card stateless border border-border rounded-xl p-4 mt-4">
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
      <div class="flex my-2 items-center justify-between">
        <add-city-popover
          @location="editLocation"
          :location="loc"
          v-for="loc in form.locations"
          :key="loc.city"
        >
        </add-city-popover>

        <add-city-popover
          @location="addLocation"
          key="addLocation"
        ></add-city-popover>
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
      <el-button type="primary" @click="onSubmit" :loading="loading">{{
        edit ? 'Update' : 'Confirm'
      }}</el-button>
    </span>
  </el-dialog>
</template>