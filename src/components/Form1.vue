<template>
  <div class="q-pa-md">
    <AttachmentSection />
    <BackgroundSummary />
    <CalSpecTemplate />
    <CalibrationSchedule/>
    <PreventativeMaintenance/>
    <RolesAndResponsibility/>
  </div>
</template>

<script>
import AttachmentSection from './form/AttachmentSection';
import BackgroundSummary from './form/BackgroundSummary';
import CalSpecTemplate from './form/CalSpecTemplate';
import CalibrationSchedule from './form/CalibrationSchedule';
import PreventativeMaintenance from './form/PreventativeMaintenance';
import RolesAndResponsibility from './form/RolesAndResponsibility';

export default {
  name: 'Form1',
  components: {
  	AttachmentSection,
  	BackgroundSummary,
  	CalSpecTemplate,
    CalibrationSchedule,
    PreventativeMaintenance,
    RolesAndResponsibility
  }
}
</script>
