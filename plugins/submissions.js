import {  inject, provide,  ref } from '@nuxtjs/composition-api'
import api from '@/api'
import { Message } from 'element-ui'

const SUBMISSIONS_KEY = Symbol.for('submissions')

const createSubmissionsInstance = () => {
  const submissions = ref([])
  const loadSubmissions = async () => {
    const data = await api.submissions()
    submissions.value = data
  }

  const processSubmission = async (submission, action) => {
    try {
      const subs = await api.processSubmission(submission._id, action)
      Message({
          message: `Submission ${action === 'approve' ? 'approved' : 'declined'} correctly`,
          type: 'success'
      })
      submissions.value = subs
    } catch (err) {
      Message({
        message: 'An error ocurred',
        type: 'error'
    })
    }
  }

  return {
    processSubmission,
    loadSubmissions,
    submissions
  }
}

export const useSubmissions = () => {
  return inject(SUBMISSIONS_KEY)
}

export const provideSubmissions = () => {
  const instance = createSubmissionsInstance()
  provide(SUBMISSIONS_KEY, instance)
  return instance
}
