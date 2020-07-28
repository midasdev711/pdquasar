<template>
  <div class="form-card q-pa-md">
    <q-card>
      <q-card-section class="bg-teal-12" style="width: 100%;">
        <div class="text-h6">CAL Testing plan*<q-icon name="minimize" class="float-right" @click="minimize"/></div>
      </q-card-section>
      <q-slide-transition>
        <q-card-section v-if="visible">
          <div class="row">
            <div class="col-3 q-pa-sm">
              Schedule Type
            </div>
            <div class="col-4 q-pa-sm">
              Manual
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              Planned CAL Start Date*
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
            <div class="col q-pa-sm">
              Planned CAL End Date*
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
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              Uncertainty*
              <q-radio v-model="radio1" :val="true" label="Yes" />
              <q-radio v-model="radio1" :val="false" label="No" />
            </div>
            <div class="col q-pa-sm">
              <q-select v-model="model" :options="options" label="Uncertainty Type*"/>
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <q-select v-model="model" :options="options" label="Ref CAL Auto Schedule Id*"/>
            </div>
            <div class="col q-pa-sm">
              <p style="margin-top: 30px;">
                Balance cal schedule
              </p>
            </div>
          </div>

          <p style="margin-top: 30px;">
            Specification And Method
          </p>
          <div class="row">
            <div class="col q-pa-sm">
              <q-input v-model="text" label="CAL Spec" />
            </div>
            <div class="col q-pa-sm">
              <q-input v-model="text" label="Precision Spec" />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <q-input v-model="text" label="Use Spec" />
            </div>
            <div class="col q-pa-sm">
              <q-input v-model="text" label="Process Spec/Tolerance" />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <q-input v-model="text" label="Additional Spec1" />
            </div>
            <div class="col q-pa-sm">
              <q-input v-model="text" label="Additional Spec2" />
            </div>
          </div>
          <div class="row">
            <div class="col q-pa-sm">
              <q-input v-model="text" label="Method1" />
            </div>
            <div class="col q-pa-sm">
              <q-input v-model="text" label="Method2" />
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
  name: "CalTestingPlan",

  data () {
    return {
      visible: true,
      radio1: true,
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      date: '2019/02/01'
    }
  },

  methods: {
    ...mapActions('pdmod6', {
      login: 'login'
    }),

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