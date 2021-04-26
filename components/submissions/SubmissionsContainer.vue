<script>
import { defineComponent } from '@nuxtjs/composition-api'
import SubmissionCard from './SubmissionCard.vue'
import { useSubmissions } from '@/plugins/submissions'

export default defineComponent({
  components: { SubmissionCard },
  setup() {
    const { processSubmission, submissions } = useSubmissions()

    return {
      submissions,
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
        @approve="processSubmission(submission, 'approve')"
        @decline="processSubmission(submission, 'decline')"
      />
    </div>
  </div>
</template>