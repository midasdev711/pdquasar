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
                v-model="text"
                label="Description *"
                type="textarea"
              />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <q-select v-model="form.assestType" :options="options" label="Pipette-Eqp Type *" />
              <q-select v-model="model" :options="options" label="Manufacturer *" />
              <q-select v-model="model" :options="options" label="Brand *" />
              <q-select v-model="model" :options="options" label="Model-Vol. *" />
              <q-select v-model="model" :options="options" label="S/L No: *" />
              <q-input v-model="dateOfPurchase" mask="date" :rules="['date']" class="date-picker">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="dateOfPurchase" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input v-model="dateOfServiceStart" mask="date" :rules="['date']" class="date-picker">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="dateOfServiceStart" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input v-model="text" label="ID" />
              <q-select v-model="model" :options="options" label="Tip Type" />
            </div>
            <div class="col q-pa-sm">
              <q-select v-model="model" :options="options" label="Customer Name *" />
              <q-select v-model="model" :options="options" label="Street Address *" />
              <q-select v-model="model" :options="options" label="City-Zip Code *" />
              <q-select v-model="model" :options="options" label="Contact" />
              <q-select v-model="model" :options="options" label="Ph. No" />
              <q-select v-model="model" :options="options" label="Account Mgr *" />
              <q-select v-model="model" :options="options" label="Owning dept" />
              <q-select v-model="model" :options="options" label="Physical Location1" />
              <q-select v-model="model" :options="options" label="Physical Location1-2" />
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
  name: "BackgroundSummary",

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
      form: {
        assestType: null
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