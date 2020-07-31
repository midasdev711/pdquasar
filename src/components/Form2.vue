<template>
  <div class="q-pa-md">
    <AttachmentSectionWithUpload/>
    <Background/>
    <CalTestingPlan/>
    <CalResultRecording/>
    <RolesAndResponsibility/>
  </div>
</template>

<script>
import AttachmentSectionWithUpload from '../components/form/AttachmentSectionWithUpload';
import Background from '../components/form/Background';
import CalTestingPlan from '../components/form/CalTestingPlan';
import CalResultRecording from '../components/form/CalResultRecording';
import RolesAndResponsibility from '../components/form/RolesAndResponsibility';

export default {
  name: 'Form2',
  components: {
    AttachmentSectionWithUpload,
    Background,
    CalTestingPlan,
    CalResultRecording,
    RolesAndResponsibility
  }
}
</script>
