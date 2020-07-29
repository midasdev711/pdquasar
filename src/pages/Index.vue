<template>
  <q-page class="flex flex-center">
    <AttachmentSection />
    <BackgroundSummary />
    <CalSpecTemplate />
    <CalibrationSchedule/>
    <PreventativeMaintenance/>
    <RolesAndResponsibility/>
    
    <AttachmentSectionWithUpload/>
    <Background/>
    <CalTestingPlan/>
    <CalResultRecording/>
    <RolesAndResponsibility/>
  </q-page>
</template>

<script>
import AttachmentSection from '../components/form/AttachmentSection';
import BackgroundSummary from '../components/form/BackgroundSummary';
import CalSpecTemplate from '../components/form/CalSpecTemplate';
import CalibrationSchedule from '../components/form/CalibrationSchedule';
import PreventativeMaintenance from '../components/form/PreventativeMaintenance';
import RolesAndResponsibility from '../components/form/RolesAndResponsibility';
import AttachmentSectionWithUpload from '../components/form/AttachmentSectionWithUpload';
import Background from '../components/form/Background';
import CalTestingPlan from '../components/form/CalTestingPlan';
import CalResultRecording from '../components/form/CalResultRecording';


export default {
  name: 'Index',
  components: {
  	AttachmentSection,
  	BackgroundSummary,
  	CalSpecTemplate,
    CalibrationSchedule,
    PreventativeMaintenance,
    RolesAndResponsibility,
    AttachmentSectionWithUpload,
    Background,
    CalTestingPlan,
    CalResultRecording
  }
}
</script>
