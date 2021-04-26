import {
  computed,
  inject,
  provide,
  reactive,
  ref,
  watch,
} from '@vue/composition-api'
import api from '@/api'
import Vue from 'vue'
import { Message } from 'element-ui'

const CAREERS_KEY = Symbol.for('careers')

export const Category = Object.freeze({
  fintech: 'Fintech',
  biotech: 'Biotech',
  health: 'Health & Medtech',
  education: 'Education & Tools',
  ecommerce: 'E-commerce',
  food: 'Food',
  proptech: 'Proptech',
  environment: 'Environment',
  iot: 'IoT',
  blockchain: 'Blockchain',
})

const createCareersInstance = () => {
  const cps = ref([])
  const loading = ref(false)
  const showSubmitForm = ref(false)
  let checkedCps = {}
  const filters = reactive({
    checked: false,
    categories: [],
  })

  const filteredCps = computed(() => {
    let pages = cps.value
    if (filters.checked) {
      pages = pages.filter((cp) => !cp.checked)
    }

    if (filters.categories.length > 0) {
      pages = pages.filter((cp) => filters.categories.includes(cp.category))
    }

    return pages
  })

  const loadLocalStoreData = () => {
    let checkedStorage = localStorage?.getItem('cps-checked')
    checkedCps = JSON.parse(checkedStorage || '{}')
  }

  const loadCps = async () => {
    loading.value = true
    try {
      const data = await api.cps(filters)
      if (!process.server) {
        loadLocalStoreData()
      }
      cps.value = data.map((cp) => ({
        ...cp,
        categoryLabel: Category[cp.category],
        checked: checkedCps[cp._id],
      }))
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const submit = async (data) => {
    try {
      await api.cpsSubmit(data)
      Message({
        message: 'Career page submited correctly',
        type: 'success',
      })
    } catch (err) {
      Message({
        message: 'An error ocurred',
        type: 'error',
      })
    }
  }

  const filterCategory = (category) => {
    filters.categories.push(category)
  }

  const toggleCheck = (cp) => {
    cp.checked = !cp.checked
    Vue.set(checkedCps, cp._id, cp.checked)
    localStorage?.setItem('cps-checked', JSON.stringify(checkedCps))
  }

  return {
    loading,
    submit,
    loadCps,
    cps,
    filters,
    filterCategory,
    checkedCps,
    toggleCheck,
    filteredCps,
    loadLocalStoreData,
    showSubmitForm,
  }
}

export const useCareers = () => {
  return inject(CAREERS_KEY)
}

export const provideCareers = () => {
  provide(CAREERS_KEY, createCareersInstance())
}
