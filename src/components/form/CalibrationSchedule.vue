<template>
  <div class="form-card q-pa-md">
    <q-card>
      <q-card-section class="bg-teal-12" style="width: 100%;">
        <div class="text-h6">Calibration-Auto Schedule*<q-icon name="minimize" class="float-right" @click="minimize"/></div>
      </q-card-section>
      <q-slide-transition>
        <q-card-section v-if="visible">
          <div class="row">
            <div class="col q-pa-sm">
              Calibration Schedule Set-Up*
              <q-radio v-model="form.calPeriodicAssessmentPlan" :val="true" label="Yes" />
              <q-radio v-model="form.calPeriodicAssessmentPlan" :val="false" label="No" />
            </div>
            <div class="col q-pa-sm">
              End of the month*
              <q-radio v-model="endOftheMonth" :val="true" label="Yes" />
              <q-radio v-model="endOftheMonth" :val="false" label="No" />
            </div>
          </div>
          <q-separator color="red" inset />
          <div class="row">
            <div class="col q-pa-sm">
              <q-table
                :data="data"
                :columns="columns"
                row-key="name"
                :separator="separator"
              />
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
  name: "CalibrationSchedule",

  data () {
    return {
      separator: 'cell',
      columns: [
        {
          name: 'autoId',
          required: true,
          label: 'Auto Id',
          align: 'left',
          field: row => row.autoId,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'description', align: 'center', label: 'Description', field: 'description', sortable: true },
        { name: 'assignedTo', label: 'Assigned to', field: 'assignedTo', sortable: true },
        { name: 'startDate', label: 'Start Date', field: 'startDate' },
        { name: 'dueDate', label: 'Due Date', field: 'dueDate' },
        { name: 'intervalDays', label: 'Interval (days)', field: 'intervalDays' },
        { name: 'status', label: 'Status', field: 'status' },
      ],
      data: [
        {
          autoId: 'Cal-295',
          description: "Cal Schedule",
          assignedTo: 'Emily G',
          startDate: '05/15/2020',
          dueDate: '11/30/2020',
          intervalDays: 180,
          status: ''
        },
      ],
      visible: true,
      endOftheMonth: true,
      form: {
        calPeriodicAssessmentPlan: true,
      }
    }
  },

  methods: {
    ...mapActions('pdmod6', {
      login: 'login'
    }),

    minimize() {
      this.visible = !this.visible;
    },

    addNew() {
      this.data.push({
        autoId: 'Cal-295',
        description: "Cal Schedule",
        assignedTo: 'Emily G',
        startDate: '05/15/2020',
        dueDate: '11/30/2020',
        intervalDays: 180,
        status: ''
      });
    }
  }
}
</script>

<style scoped>
  .date-picker {
    padding-bottom: 0;
  }
</style>