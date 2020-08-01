<template>
  <div class="q-pa-md">
    <AttachmentSectionWithUpload />
    <BackgroundSummary />
    <CalSpecTemplate />
    <CalibrationSchedule/>
    <PreventativeMaintenance/>
    <RolesAndResponsibility/>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import AttachmentSectionWithUpload from './form/AttachmentSectionWithUpload';
import BackgroundSummary from './form/BackgroundSummary';
import CalSpecTemplate from './form/CalSpecTemplate';
import CalibrationSchedule from './form/CalibrationSchedule';
import PreventativeMaintenance from './form/PreventativeMaintenance';
import RolesAndResponsibility from './form/RolesAndResponsibility';

export default {
  name: 'Form1',
  components: {
  	AttachmentSectionWithUpload,
  	BackgroundSummary,
  	CalSpecTemplate,
    CalibrationSchedule,
    PreventativeMaintenance,
    RolesAndResponsibility
  },
  validations: {
    form: {
      name: { required },
      email: { required }
    }
  },
  data() {
    return {
      form: {
        name: "",
        email: ""
      }
    };
  },
}
</script>
