<template>
  <div class="form-card q-pa-md">
    <q-card>
      <q-card-section class="bg-teal-12" style="width: 100%;">
        <div class="text-h6">CAL Testing plan*<q-icon name="minimize" class="float-right" @click="minimize"/></div>
      </q-card-section>
      <q-slide-transition>
        <q-card-section v-if="visible">
          <div class="row">
            <div class="col-5 q-pa-sm">
              Actual Start Date*
              <q-input filled v-model="date" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-5 q-pa-sm">
              Actual End Date*
              <q-input filled v-model="date" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-2"></div>
          </div>
          <template v-for="(row, index) in refRows">
            <div class="row" :key="index">
              <div class="col-5 q-pa-sm">
                Ref STD ID {{index+1}}
                <q-select v-model="row.ref" :options="options"/>
              </div>
              <div class="col-5 q-pa-sm">
                Cal. Due Date {{index+1}}
                <q-input filled v-model="date" mask="date" :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="row.cal" @input="() => $refs.qDateProxy.hide()" />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-2">
                <q-btn round color="primary" style="margin-top: 35px;" @click="index===0?addNewRef():removeRef(index)">{{index===0?'+':'-'}}</q-btn>
              </div>
            </div>
          </template>
          <div class="row">
            <div class="col q-pa-sm">
              Results(As Found)
              <q-radio v-model="radio1" :val="true" label="Pass" />
              <q-radio v-model="radio1" :val="false" label="Fail" />
              <q-radio v-model="radio1" :val="false" label="NA" />
            </div>
            <div class="col q-pa-sm">
              Results(As Left)
              <q-radio v-model="radio1" :val="true" label="Pass" />
              <q-radio v-model="radio1" :val="false" label="Fail" />
              <q-radio v-model="radio1" :val="false" label="NA" />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              Over all result
              <q-radio v-model="radio1" :val="true" label="Pass" />
              <q-radio v-model="radio1" :val="false" label="Fail" />
              <q-radio v-model="radio1" :val="false" label="NA" />
            </div>
            <div class="col q-pa-sm">
              <q-input label="OOT No" />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <template v-for="(note, index) in results">
                <q-input
                  v-model="note.value"
                  label="Results Summary"
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
                @click="addNewResult"
              />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <template v-for="(note, index) in notes">
                <q-input
                  v-model="note.value"
                  label="Additional Notes"
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
                @click="addNewNote"
              />
            </div>
          </div>
          <h6>Squares Used</h6>
          <template v-for="(row, index) in spareRows">
            <div class="row" :key="index">
              <div class="col-2" style="padding-top: 40px; text-align: center">
                Square Used {{index+1}}
              </div>
              <div class="col-3 q-pa-sm">
                Square ID
                <q-select v-model="row.ref" :options="options"/>
              </div>
              <div class="col-3 q-pa-sm">
                Description
                <q-input />
              </div>
              <div class="col-3 q-pa-sm">
                Quantity
                <q-input />
              </div>
              <div class="col-1">
                <q-btn round color="primary" style="margin-top: 35px;" @click="index===0?addNewSpare():removeSpare(index)">{{index===0?'+':'-'}}</q-btn>
              </div>
            </div>
          </template>
        </q-card-section>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "CalResultRecording",

  data () {
    return {
      visible: true,
      radio1: true,
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      results: [{
        value: "",
        date: new Date()
      }],
      notes: [{
        value: "",
        date: new Date()
      }],
      date: '2019/02/01',
      refRows: [
        {ref: 'Google', cal: '2019/02/01'}
      ],
      spareRows: [
        {spareId: 'Google', description: "", quantity: ""}
      ],
    }
  },

  methods: {
    ...mapActions('pdmod6', {
      login: 'login'
    }),
    addNewRef() {
      this.refRows.push(
        {ref: 'Google', cal: '2019/02/01'}
      )
    },
    addNewSpare() {
      this.spareRows.push(
        {spareId: 'Google', description: "", quantity: ""}
      )
    },
    removeSpare(index) {
      this.spareRows = this.spareRows.filter((r, inx) => inx != index)
    },
    addNewNote() {
      this.notes.push({
        value: "",
        date: new Date()
      });
    },
    addNewResult() {
      this.results.push({
        value: "",
        date: new Date()
      });
    },
    removeRef(index) {
      this.refRows = this.refRows.filter((r, inx) => inx != index)
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