<template>
  <div class="form-card q-pa-md">
    <q-card>
      <q-card-section class="bg-teal-12" style="width: 100%;">
        <div class="text-h6">Preventative Maintenance - Auto Schedule<q-icon name="minimize" class="float-right" @click="minimize"/></div>
      </q-card-section>
      <q-slide-transition>
        <q-card-section v-if="visible">
          <div class="row">
            <div class="col q-pa-sm">
              Preventative Maintenance Schedule Set-Up*
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
          <q-separator color="black" inset />
          <div class="row">
            <div class="col q-pa-sm">
              PM Checklist *
              <q-radio v-model="radio1" :val="true" label="Yes" />
              <q-radio v-model="radio1" :val="false" label="No" />
            </div>
            <div class="col q-pa-sm">
              <div class="row">
                <div class="col-10">
                  <q-select v-model="model" :options="options" label="Eqp Type Checklist" :disable="!check1" />
                </div>
                <div class="col-2 q-pl-sm">
                  <q-checkbox v-model="check1" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <div class="row">
                <div class="col-10">
                  <q-select v-model="model" :options="options" label="Others" :disable="!check2" />
                </div>
                <div class="col-2 q-pl-sm">
                  <q-checkbox v-model="check2" />
                </div>
              </div>
            </div>
            <div class="col q-pa-sm">
              <div class="row">
                <div class="col-10">
                  <q-select v-model="model" :options="options" label="Custom" :disable="!check3" />
                </div>
                <div class="col-2 q-pl-sm">
                  <q-checkbox v-model="check3" />
                </div>
              </div>
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
  name: "PreventativeMaintenance",

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
      check1: true,
      check2: true,
      check3: true,
      separator: 'cell',
      text: "",
      model: "",
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      dateOfPurchase: '2019/02/01',
      dateOfServiceStart: '2019/02/01',
      noteCount: 1,
      notes: [{
        value: "",
        date: new Date()
      }],
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