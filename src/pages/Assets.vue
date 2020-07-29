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
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filters"
      :filter-method="customFilter"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filters['global']" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:top-row>
        <q-tr>
          <q-td 
            v-for="col in columns"
            :key="col.name"
          >
            <q-input v-model="filters[col.label]" :label="col.label" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
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
import { mapActions, mapGetters } from 'vuex'

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
      eqpSelectSubType: "",
      filters: {},
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  methods: {
    ...mapActions('pdmod6', {
      loadAssetData: 'loadAssetData'
    }),
    fetchData() {
      this.loadAssetData()
        .then(response => {
          console.log(response.data);
          // this.$store.commit("pdmod6/updateAssets", response.data);
        })
        .catch(error => console.log(error));
    },
    customFilter(rows, terms, cols, getCellValue) {
      return rows;
    },
    onAddNew() {
      confirm("Test");
    },
    onItemClick() {}
  }
};
</script>
