<script>
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  watch,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    location: {
      type: Object,
      default: null,
    },
  },
  setup(props, ctx) {
    const loc = reactive({
      city: '',
      country: '',
    })

    const visible = ref(false)

    loc.city = props.location?.city
    loc.country = props.location?.country

    const addLocation = () => {
      ctx.emit('location', { ...loc })
      visible.value = false
    }

    return {
      visible,
      loc,
      addLocation,
    }
  },
})
</script>

<template>
  <div>
    <el-popover width="300" :ref="'pop'" trigger="click" v-model="visible">
      <el-input
        label="City"
        v-model="loc.city"
        placeholder="Add a city"
        class="mb-2"
      >
        <template slot="prepend">City</template>
      </el-input>
      <el-input
        label="Country"
        v-model="loc.country"
        placeholder="Add a country"
        class="mb-2"
      >
        <template slot="prepend">Country</template>
      </el-input>

      <div style="text-align: right; margin: 0">
        <el-button type="primary" size="mini" @click="addLocation"
          >{{ location ? 'Update' : 'Add' }}
        </el-button>
      </div>
    </el-popover>
    <el-tag size="small" type="info" class="mr-2 cursor-pointer" v-popover:pop>
      <template v-if="location">
        <i class="el-icon-location mr-1"></i> {{ location.city }},
        {{ location.country }}
      </template>
      <template v-else>
        <i class="el-icon-add-location mr-1"></i> Add location
      </template>
    </el-tag>
  </div>
</template>