<template>
  <div class="q-pa-md">
    <q-btn
      align="around"
      class="btn-fixed-width"
      color="primary"
      label="Add New"
      icon="add"
      @click="basic = true"
    />
    <q-table
      title="Equipment/Assets"
      :data="data"
      :columns="columns"
      row-key="id"
    />
    <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate">
      <q-card>
        <q-card-section>
          <div class="text-h6">Add New Master Asset</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p v-for="n in 1" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </p>
          <q-form>
            <q-expansion-item
              switch-toggle-side
              expand-separator
              icon="attach_file"
              label="Attachments"
            >
              <q-layout>
                <div class="row">
                  <div class="col-10">
                    <q-file
                      v-model="files"
                      label="Pick Attachments"
                      filled
                      multiple
                      style="max-width: 300px"
                    />
                  </div>
                  <div class="col">
                    <q-btn round color="secondary" icon="delete" />
                  </div>
                </div>
              </q-layout>
            </q-expansion-item>
            <q-expansion-item
              switch-toggle-side
              expand-separator
              icon="background"
              label="Eqp Background Summary"
            >
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-select
                  clearable
                  filled
                  color="purple-12"
                  v-model="eqpSelectType"
                  :options="filteredDocTypes"
                  label="Eqp Type:"
                />
              </div>
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-select
                  clearable
                  filled
                  color="purple-12"
                  v-model="eqpSelectSubType"
                  :options="filteredSubDocTypes"
                  label="Eqp Sub Type:"
                />
              </div>
            </q-expansion-item>
          </q-form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Submit" color="primary" v-close-popup />
          <q-btn flat label="Save" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    filteredDocTypes() {
      var filteredList = this.$store.state.pdmod6.refData.docTypes.map(
        e => e.type
      );
      var uniqList = [...new Set(filteredList)];
      return uniqList;
    },
    filteredSubDocTypes() {
      var filteredList = this.$store.state.pdmod6.refData.docTypes.map(
        e => e.subType
      );
      var uniqList = [...new Set(filteredList)];
      return uniqList;
    }
  },
  data() {
    return {
      columns: this.$store.state.pdmod6.assetsColumnInfo,
      data: this.$store.state.pdmod6.assetsData,
      basic: false,
      files: null,
      docTypes: this.$store.state.pdmod6.refData.docTypes,
      eqpSelectType: "",
      eqpSelectSubType: ""
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.$axios
        .get("https://run.mocky.io/v3/0c938f7a-f230-4638-85be-84345a4776de")
        .then(response => {
          console.log(this.$store);
          console.log(response.data);
          this.$store.commit("pdmod6/updateAssets", response.data);
        })
        .catch(error => console.log(error));
    },
    onAddNew() {
      confirm("Test");
    },
    onItemClick() {}
  }
};
</script>
