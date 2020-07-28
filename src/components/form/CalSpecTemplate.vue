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
          <div class="row">
            <div class="col q-pa-sm">
              <template v-for="(note, index) in notes">
                <q-input
                  v-model="note.value"
                  label="Risk notes"
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
  name: "CalSpecTemplate",

  data () {
    return {
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