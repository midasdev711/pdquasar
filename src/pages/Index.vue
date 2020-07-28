<template>
  <q-page class="flex flex-center">
    <AttachmentSection />
    <BackgroundSummary />
    <CalSpecTemplate />
  </q-page>
</template>

<script>
import AttachmentSection from '../components/form/AttachmentSection';
import BackgroundSummary from '../components/form/BackgroundSummary';
import CalSpecTemplate from '../components/form/CalSpecTemplate';
export default {
  name: 'Index',
  components: {
  	AttachmentSection,
  	BackgroundSummary,
  	CalSpecTemplate
  }
}
</script>
