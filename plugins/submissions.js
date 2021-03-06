import { inject, provide, reactive, ref } from '@nuxtjs/composition-api'
import api from '@/api'
import { Message } from 'element-ui'

const SUBMISSIONS_KEY = Symbol.for('submissions')

const createSubmissionsInstance = () => {
  const submissions = ref([])
  const showSubmissionEditForm = ref(false)
  const loading = ref(null)
  const loadSubmissions = async () => {
    const data = await api.submissions()
    submissions.value = data
  }

  const processSubmission = async (submission, action) => {
    try {
      loading.value = action
      const subs = await api.processSubmission(submission._id, action)
      Message({
        message: `Submission ${
          action === 'approve' ? 'approved' : 'declined'
        } correctly`,
        type: 'success',
      })
      submissions.value = subs
    } catch (err) {
      Message({
        message: 'An error ocurred',
        type: 'error',
      })
    } finally {
      loading.value = null
    }
  }

  const update = async (submission) => {
    try {
      loading.value = 'update'
      const sub = await api.updateSubmission(submission)
      const indexToReplace = submissions.value.findIndex(
        (s) => s._id === sub._id
      )
      submissions.value.splice(indexToReplace, 1, sub)

      Message({
        message: `Submission updated correctly`,
        type: 'success',
      })
    } catch (err) {
      Message({
        message: 'An error ocurred',
        type: 'error',
      })
    } finally {
      loading.value = null
    }
  }

  return {
    update,
    loading,
    showSubmissionEditForm,
    processSubmission,
    loadSubmissions,
    submissions,
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
