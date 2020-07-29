<template>
  <div class="form-card q-pa-md">
    <q-card>
      <q-card-section class="bg-teal-12" style="width: 100%;">
        <div class="text-h6">Cal Spec Template*<q-icon name="minimize" class="float-right" @click="minimize"/></div>
      </q-card-section>
      <q-slide-transition>
        <q-card-section v-if="visible">
          <div class="row">
            <div class="col q-pa-sm">
              CAL Spec Template *
              <q-radio v-model="radio1" :val="true" label="Yes" />
              <q-radio v-model="radio1" :val="false" label="No" />
            </div>
            <div class="col q-pa-sm">
              <div class="row">
                <div class="col-10">
                  <q-select v-model="model" :options="options" label="Manfr. Spec" :disable="!check1" />
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
                  <q-select v-model="model" :options="options" label="ISO Spec" :disable="!check2" />
                </div>
                <div class="col-2 q-pl-sm">
                  <q-checkbox v-model="check2" />
                </div>
              </div>
            </div>
            <div class="col q-pa-sm">
              <div class="row">
                <div class="col-10">
                  <q-select v-model="model" :options="options" label="Additional template2" :disable="!check3" />
                </div>
                <div class="col-2 q-pl-sm">
                  <q-checkbox v-model="check3" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col q-pt-md">
              <p class="text-center">Pipette Fix. Volume 1 Ch. Eppendorf Reference 2000 Fix 50uL-1X1</p>
              <q-separator color="red" inset />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <q-input v-model="text" label="Env Temp" />
              <q-input v-model="text" label="Env Pr" />
            </div>
            <div class="col q-pa-sm">
              <q-input v-model="text" label="Env Humidity" />
              <q-input v-model="text" label="Corre Factor" />
            </div>
          </div>
          <div class="row" style="margin-top: 20px;">
            <div class="col">
              <q-table
                :data="data"
                :columns="columns"
                row-key="name"
                hide-bottom
              />
            </div>
          </div>
          <div class="row" style="margin-top: 20px;">
            <div class="col">
              <q-table
                :data="data"
                :columns="columns"
                row-key="name"
                hide-bottom
              />
            </div>
          </div>
          <div class="row" style="margin-top: 20px;">
            <div class="col">
              <p>Note1: The unit of results is: ( mg )</p>
              <p>Note2: The results will be corrected with the correction factor.</p>
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
  name: "CalSpecTemplate",

  data () {
    return {
      columns: [
        {
          name: 'title',
          required: true,
          label: '',
          align: 'left',
          field: row => row.title,
        },
        {
          name: 'result',
          label: 'Result(As Found)',
          field: row => row.result,
        },
        {
          name: 'avg',
          label: 'Avg',
          field: row => row.avg
        },
        {
          name: 'sd',
          label: 'SD',
          field: row => row.sd
        },
        {
          name: 'cv',
          label: 'CV(%)',
          field: row => row.cv
        },
        {
          name: 'target',
          label: 'Target',
          field: row => row.target
        },
        {
          name: 'diff',
          label: 'Diff(%)',
          field: row => row.diff
        },
        {
          name: 'pf',
          label: 'Pass/Fail',
          field: row => row.pf
        },
      ],
      data: [
        {
          title: "5OuL",
          result: "No. Counter",
          avg: '',
          sd: '',
          cv: '<=0.3',
          target: '50.0',
          diff: '<=0.7',
          pf: 'Test User',
        },
        {
          title: "5OuL",
          result: "No. Counter",
          avg: '',
          sd: '',
          cv: '<=0.3',
          target: '50.0',
          diff: '<=0.7',
          pf: 'Test User',
        },
        {
          title: "5OuL",
          result: "No. Counter",
          avg: '',
          sd: '',
          cv: '<=0.3',
          target: '50.0',
          diff: '<=0.7',
          pf: 'Test User',
        },
      ],
      visible: true,
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
      radio1: true,
      check1: true,
      check2: true,
      check3: true
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
      this.notes.push({
        value: "",
        date: new Date()
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