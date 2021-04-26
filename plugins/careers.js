import { computed, inject, provide, reactive, ref, watch } from '@vue/composition-api'
import api from '@/api'
import Vue from 'vue'

const CAREERS_KEY = Symbol.for('careers')

const createCareersInstance = () => {
  const cps = ref([])
  let checkedCps = {}
  const filters = reactive({
    checked: false,
  })

  const filteredCps = computed(() => {
    let pages = cps.value
    if (filters.checked) {
      pages = pages.filter(cp => !cp.checked)
    }

    return pages
  })

  const loadLocalStoreData = () => {
    let checkedStorage = localStorage?.getItem('cps-checked')
    checkedCps = JSON.parse(checkedStorage || "{}")
  }

  const loadCps = async () => {
    const data = await api.cps(filters)
    if (!process.server) {
      loadLocalStoreData()
    }
    cps.value = data.map(cp => ({ ...cp, checked: checkedCps[cp._id]}))
  }

  const toggleCheck = (cp) => {
    cp.checked = !cp.checked
    Vue.set(checkedCps, cp._id, cp.checked)
    localStorage?.setItem('cps-checked', JSON.stringify(checkedCps))
  }

  return {
    loadCps,
    cps,
    filters,
    checkedCps,
    toggleCheck,
    filteredCps,
    loadLocalStoreData
  }
}

export const useCareers = () => {
  return inject(CAREERS_KEY)
}

export const provideCareers = () => {
  provide(CAREERS_KEY, createCareersInstance())
}
