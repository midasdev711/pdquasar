<template>
  <div class="form-card q-pa-md">
    <q-card>
      <q-card-section class="bg-teal-12" style="width: 100%;">
        <div class="text-h6">Roles And Responsibility*<q-icon name="minimize" class="float-right" @click="minimize"/></div>
      </q-card-section>
      <q-slide-transition>
        <q-card-section v-if="visible">
          <div class="row">
            <div class="col q-pa-sm">
              Approval Required
              <q-radio v-model="form.approvalRequired" :val="true" label="Yes" />
              <q-radio v-model="form.approvalRequired" :val="false" label="No" />
            </div>
            <div class="col q-pa-sm">
              <q-select v-model="form.defaultCoordinator" :options="options" label="Default Coordinator*"/>
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
  name: "RolesAndResponsibility",

  data () {
    return {
      visible: true,
      radio1: true,
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      form: {
        approvalRequired: true,
        defaultCoordinator: null
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
  }
}
</script>

<style scoped>
  .date-picker {
    padding-bottom: 0;
  }
</style>