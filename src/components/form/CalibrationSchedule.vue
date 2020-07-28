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
              <q-radio v-model="radio1" :val="true" label="Yes" />
              <q-radio v-model="radio1" :val="false" label="No" />
            </div>
            <div class="col q-pa-sm">
              End of the month*
              <q-radio v-model="radio1" :val="true" label="Yes" />
              <q-radio v-model="radio2" :val="false" label="No" />
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
      columns: [
        {
          name: 'fileId',
          required: true,
          label: 'File Id',
          align: 'left',
          field: row => row.fileId,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'fileName', align: 'center', label: 'File Name', field: 'fileName', sortable: true },
        { name: 'fileType', label: 'File Type', field: 'fileType', sortable: true },
        { name: 'fileSize', label: 'File Size', field: 'fileSize' },
        { name: 'dateChanged', label: 'Date Changed', field: 'dateChanged' },
        { name: 'changedBy', label: 'Changed By', field: 'changedBy' },
      ],
      data: [
        {
          fileId: 234,
          fileName: "test",
          fileType: 'png',
          fileSize: 24,
          dateChanged: '09/09/2020',
          changedBy: 'Test User',
        },
      ],
      visible: true,
      radio1: true,
      radio2: true,
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
        fileId: 234,
        fileName: "test",
        fileType: 'png',
        fileSize: 24,
        dateChanged: '09/09/2020',
        changedBy: 'Test User',
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