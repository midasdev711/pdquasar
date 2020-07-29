<template>
  <div class="form-card q-pa-md">
    <q-card>
      <q-card-section class="bg-teal-12" style="width: 100%;">
        <div class="text-h6">Background Summary*<q-icon name="minimize" class="float-right" @click="minimize"/></div>
      </q-card-section>
      <q-slide-transition>
        <q-card-section v-if="visible">
          <div class="row">
            <div class="col q-pa-sm">
              <q-input
                v-model="form.description"
                label="Description *"
                type="textarea"
              />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <q-select v-model="form.assestType" :options="options" label="Pipette-Eqp Type *" />
              <q-select v-model="form.assestSubType" :options="options" label="Manufacturer *" />
              <q-select v-model="form.manfr" :options="options" label="Brand *" />
              <q-select v-model="form.model" :options="options" label="Model-Vol. *" />
              <q-select v-model="form.slNo" :options="options" label="S/L No: *" />
              <q-input v-model="form.dateOfPurchase" mask="date" :rules="['date']" class="date-picker">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="form.dateOfPurchase" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input v-model="form.dateOfServiceStarted" mask="date" :rules="['date']" class="date-picker">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="form.dateOfServiceStarted" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input v-model="form.po" label="ID" />
              <q-select v-model="form.criticality" :options="options" label="Tip Type" />
            </div>
            <div class="col q-pa-sm">
              <q-select v-model="form.businessSegment" :options="options" label="Customer Name *" />
              <q-select v-model="form.subBusinessSegment" :options="options" label="Street Address *" />
              <q-select v-model="form.siteLocation" :options="options" label="City-Zip Code *" />
              <q-select v-model="form.siteLocation2" :options="options" label="Contact" />
              <q-select v-model="form.siteLocation3" :options="options" label="Ph. No" />
              <q-select v-model="form.owner" :options="options" label="Account Mgr *" />
              <q-select v-model="form.owningDept" :options="options" label="Owning dept" />
              <q-select v-model="form.location1" :options="options" label="Physical Location1" />
              <q-select v-model="form.location2" :options="options" label="Physical Location1-2" />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <template v-for="(note, index) in riskNotes">
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
  name: "BackgroundSummary",

  data () {
    return {
      visible: true,
      separator: 'cell',
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      riskNotes: [{
        value: "",
        date: new Date()
      }],
      form: {
        description: null,
        assestType: null,
        assestSubType: null,
        manfr: null,
        model: null,
        slNo: null,
        businessSegment: null,
        dateOfPurchase: null,
        dateOfServiceStarted: null,
        po: null,
        criticality: null,
        subBusinessSegment: null,
        siteLocation: null,
        siteLocation2: null,
        siteLocation3: null,
        owner: null,
        owningDept: null,
        location1: null,
        location2: null
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