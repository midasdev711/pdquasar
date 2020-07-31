<template>
  <div class="form-card q-pa-md">
    <q-card>
      <q-card-section class="bg-teal-12" style="width: 100%;">
        <div class="text-h6">Attachment Section<q-icon name="minimize" class="float-right" @click="minimize"/></div>
      </q-card-section>
      <q-slide-transition>
        <q-card-section v-if="visible">
          <q-table
            :data="data"
            :columns="columns"
            row-key="name"
            :separator="separator"
          />
        </q-card-section>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "AttachmentSectionWithUpload",

  data () {
    return {
      visible: true,
      separator: 'cell',

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
      ]
    }
  },

  methods: {
    ...mapActions('pdmod6', {
      login: 'login'
    }),

    minimize() {
      this.visible = !this.visible;
    }

    // onSubmit () {
    //   // this.$store.dispatch('login', this.form)
    //   this.login(this.form)
    //   .then(res => {
    //     localstorage.setItem('token', res.id_token);
    //     this.$router.push('/')
    //   })
    // },
  }
}
</script>
