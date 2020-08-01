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
      :data="calibrationsData"
      :columns="calibrationsColumnInfo"
      row-key="id"
      :filter="filters"
      :filter-method="customFilter"
      :pagination.sync="pagination"
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
            v-for="col in calibrationsColumnInfo"
            :key="col.name"
          >
            <q-input v-model="filters[col.name]" :label="col.label" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate" full-width>
      <q-card>
        <q-card-section>
          <div class="text-h6">Add New Master Asset</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <Form2 />
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
import Form2 from '../components/Form2';

export default {
  data() {
    return {
      basic: false,
      files: null,
      docTypes: this.$store.state.pdmod6.refData.docTypes,
      eqpSelectType: "",
      eqpSelectSubType: "",
      filters: {},
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10
        // rowsNumber: xx if getting data from a server
      },
    };
  },
  components: {
    Form2
  },
  computed: {
    ...mapGetters("pdmod6", {
      calibrationsData: "calibrationsData",
      calibrationsColumnInfo: "calibrationsColumnInfo"
    }),
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
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  methods: {
    ...mapActions('pdmod6', {
      loadCalibrationData: 'loadCalibrationData'
    }),
    fetchData() {
      this.loadCalibrationData()
        .then(response => {
          // this.$store.commit("pdmod6/updateAssets", response.data);
        })
        .catch(error => console.log(error));
    },
    customFilter(rows, terms, cols, getCellValue) {
      // console.log(rows, terms);
      let filteredItems = rows.filter(item => {
        let isCorrectItem = true;

        for (var key in terms) {
          if (key != 'global') {
            if (item[key] && item[key].toLowerCase().indexOf(terms[key].toLowerCase()) == -1) {
              isCorrectItem = false;
            }
          }
          if (key == 'global') {
            let isIncludeGlobalWord = false;
            for (var itemKey in item) {
              if (item[itemKey] && item[itemKey].toString().toLowerCase().indexOf(terms['global'].toLowerCase()) > -1) {
                isIncludeGlobalWord = true;
              }
            }
            isCorrectItem = isCorrectItem && isIncludeGlobalWord;
          }
        }
        if (isCorrectItem) {
          return item;
        }
      });
      return filteredItems;
    },
    onAddNew() {
      confirm("Test");
    },
    onItemClick() {}
  }
};
</script>
