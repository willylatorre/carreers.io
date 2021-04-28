<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SubmissionCard from './SubmissionCard.vue'
import { useSubmissions } from '@/plugins/submissions'
import SubmissionEditModal from './SubmissionEditModal.vue'

export default defineComponent({
  components: { SubmissionCard, SubmissionEditModal },
  setup() {
    const { processSubmission, submissions, showSubmissionEditForm } = useSubmissions()
    const submissionToEdit = ref(null)

    const editSubmission = (sub) => {
      submissionToEdit.value = sub
      showSubmissionEditForm.value = true
    }

    return {
      submissions,
      editSubmission,
      submissionToEdit,
      processSubmission
    }
  },
})
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-medium text-xl">
        Showing <strong>{{submissions.length}}</strong> submissions
      </h2>
      <span class="text-xs">Sort by <strong>newest</strong></span>
    </div>

    <div class="grid grid-cols-fill gap-4">
      <submission-card
        :submission="submission"
        v-for="submission in submissions"
        :key="submission._id"
        @edit="editSubmission(submission)"
        @approve="processSubmission(submission, 'approve')"
        @decline="processSubmission(submission, 'decline')"
      />
    </div>
    <submission-edit-modal :submission="submissionToEdit" @close="submissionToEdit = null" />
  </div>
</template>