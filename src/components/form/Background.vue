<template>
  <div class="form-card q-pa-md">
    <q-card>
      <q-card-section class="bg-teal-12" style="width: 100%;">
        <div class="text-h6">Background*<q-icon name="minimize" class="float-right" @click="minimize"/></div>
      </q-card-section>
      <q-slide-transition>
        <q-card-section v-if="visible">
          <div class="row">
            <div class="col">
              <q-input v-model="form.description" label="Description*" />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              CAL Assigned To
              <q-radio v-model="form.calAssignedParty" :val="true" label="Internal" />
              <q-radio v-model="form.calAssignedParty" :val="false" label="External" />
            </div>
            <div class="col q-pa-sm">
              <q-select v-model="form.assignedTo" :options="options" label="Assigned to*"/>
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              Created By
            </div>
            <div class="col q-pa-sm">
              Created On
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <q-select v-model="form.calAssessmentType" :options="options" label="CAL Assessment Type*"/>
            </div>
            <div class="col q-pa-sm">
              <q-input v-model="form.refPo" label="Work Order No" />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <q-select v-model="form.calAssessmentSubType" :options="options" label="CAL Assessment Sub Type"/>
            </div>
            <div class="col q-pa-sm">
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <template v-for="(note, index) in form.summaryNotes">
                <q-input
                  v-model="note.value"
                  label="Summary notes"
                  type="textarea"
                  :hint="`${note.date} System Admin`"
                  :key="`note-${index}`"
                />
              </template>
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <q-btn
                align="around"
                class="btn-fixed-width"
                color="primary"
                label="Add New"
                icon="add"
                @click="addNew"
              />
            </div>
          </div>
        </q-card-section>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "Background",

  data () {
    return {
      visible: true,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      form: {
        description: null,
        calAssignedParty: true,
        assignedTo: null,
        calAssessmentType: null,
        refPo: null,
        calAssessmentSubType: null,
        summaryNotes: []
      }
    }
  },

  methods: {
    ...mapActions('pdmod6', {
      login: 'login'
    }),

    addNew() {
      this.form.summaryNotes.push({
        value: "",
        date: new Date()
      });
    },
    
    minimize() {
      this.visible = !this.visible;
    },
  }
}
</script>

<style scoped>
  .date-picker {
    padding-bottom: 0;
  }
</style>