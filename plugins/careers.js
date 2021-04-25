import { inject, provide, reactive, ref } from "@vue/composition-api"
import api from '@/api'

const CAREERS_KEY = Symbol.for('careers')

const createCareersInstance = () => {
  const cps = ref([])
  const filters = reactive({
    location: ''
  })

  const loadCps = async () => {
    const data = await api.cps(filters)
    cps.value = data
  }

  return {
    loadCps,
    cps,
    filters
  }

}

export const useCareers = () => {
  return inject(CAREERS_KEY)
}

export const provideCareers = () => {
  provide(CAREERS_KEY, createCareersInstance())
}