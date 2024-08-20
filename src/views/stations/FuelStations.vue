<template>
  <div>
    <CRow>
      <form action="">
        <CInputGroup class="mb-3">
          <input type="text" class="form-control" v-model="searchQuery" @input="liveSearch" placeholder="Search Fuel Stations">
          <button class="btn brand-btn-primary" style="color: #fff; background-color: #16AF47" disabled>Search</button>
        </CInputGroup>
        <label for="district" class="form-label">Filter by District</label>
        <CInputGroup class="mb-3">
          <select class="form-select" v-model="selectedDistrict" @change="filterByDistrict">
            <option value="" selected>All Districts</option>
            <option v-for="district in districts" :key="district" :value="district">{{ district }}</option>
          </select>
        </CInputGroup>
      </form>
      <CCol :md="12">
        <CCard>
          <CCardHeader>
            <div class="row">
              <div class="col">
                <strong>Fuel Stations</strong>
              </div>
              <div class="col text-end">
                <CButton color="primary" size="sm" @click="() => { visibleLiveDemo = true }">Add Station</CButton>
                &nbsp;
                <CButton color="primary" size="sm" class="brand-btn-primary" @click="triggerFileInput">Import</CButton>
                <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" />
              </div>
            </div>
          </CCardHeader>
          <CCardBody>
            <table class="table table-striped" id="sTable">
              <thead>
              <tr>
                <th>#</th>
                <th>Station Name</th>
                <th>OMC</th>
                <th>Geography(Lng, Lat)</th>
                <th>District</th>
                <th>Physical Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              <template v-if="stations.length === 0">
                <CTableRow>
                  <CTableDataCell colspan="7" class="text-center">No stations available</CTableDataCell>
                </CTableRow>
              </template>
              <template v-else>
                <tr  v-for="(station, index) in stations" :key="stations.id">
                  <td>{{ index+1 }}</td>
                  <td><a :href="`/stations/station-details/${station.station_id}`" class="text-decoration-none"> {{ station.station_name }} </a></td>
                  <td>{{ station.omc }}</td>
                  <td>{{ station.geog }}</td>
                  <td>{{ station.district }}</td>
                  <td>{{ station.p_location }}</td>
                  <td>
                    <span>
                      <i v-if="station.status === 1" class="bi bi-patch-check brand-primary-color"></i>
                      <i v-if="station.status === 0" class="bi bi-stopwatch brand-secondary-color"></i>
                      <i v-if="station.status === 2" class="bi bi-x-circle text-danger"></i>
                      <i v-if="station.status === 3" class="bi bi-building-fill-gear brand-secondary-color"></i>
                    </span>
                  </td>
                  <td>
                    <a :href="`/stations/station-details/${station.station_id}`" class="btn brand-btn-primary btn-sm"><i class="bi bi-eye"></i></a>
                    &nbsp;
                    <button title="Edit" class="btn brand-btn-secondary text-black btn-sm"><i class="b- bi-pencil"></i> Edit</button>
                  </td>
                </tr>
              </template>
              </tbody>
            </table>
          </CCardBody>
        </CCard>

      </CCol>
    </CRow>

    <CModal
        :visible="visibleLiveDemo"
        @close="() => { visibleLiveDemo = false }"
        aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader>
        <CModalTitle id="LiveDemoExampleLabel">Add Service Station</CModalTitle>
      </CModalHeader>
      <form @submit.prevent="addStation">
        <CModalBody>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" v-model="stationName" id="name" />
          </div>
          <div class="mb-3">
            <label for="latitude" class="form-label">Latitude</label>
            <input type="text" class="form-control" v-model="latitude" id="lastName" />
          </div>
          <div class="mb-3">
            <label for="longitude" class="form-label">Longitude</label>
            <input type="text" class="form-control" v-model="longitude" id="username" />
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">Station Type</label>
            <select class="form-select" v-model="stationType" id="type">
              <option selected disabled>-- Select Station Type--</option>
              <option value="fuel">Fuel Station</option>
              <option value="hospital">Hospital</option>
              <option value="school">Public School</option>
            </select>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" @click="() => { visibleLiveDemo = false }">
            Close
          </CButton>
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">Create</button>
        </CModalFooter>
      </form>
    </CModal>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import axios from 'axios'
import * as XLSX from 'xlsx'
import $ from 'jquery'
import DataTable from 'datatables.net-dt';
import { districts } from '@/data/districts'
// import 'datatables.net-dt/css/jquery.dataTables.css';

const URL = 'http://localhost:3000/'

const stations = ref([])
const visibleLiveDemo = ref(false)
const stationName = ref('')
const latitude = ref('')
const longitude = ref('')
const stationType = ref('')
const isSubmitting = ref(false)

const searchQuery = ref('')
const selectedDistrict = ref('all')
let table

const liveSearch = () => {
  table.search(searchQuery.value).draw()
}
const filterByDistrict = () => {
  table.column(4).search(selectedDistrict.value).draw()
}


const { proxy } = getCurrentInstance()

const fetchStations = async () => {
  try {
    const response = await axios.get(URL+'stations')
    stations.value = response.data;
  }
  catch (error){
    console.error('Error fetching stations:', error)
  }
}

const addStation = () => {
  isSubmitting.value = true
  axios.post(URL+'addServiceStation', {
    stationName: stationName.value,
    latitude: latitude.value,
    longitude: longitude.value,
    stationType: stationType.value
  }).then(() => {
    isSubmitting.value = false
    visibleLiveDemo.value = false
    proxy.$swal.fire('Success', 'Station added successfully', 'success')

    // clear form fields
    stationName.value = ''
    latitude.value = ''
    longitude.value = ''
    stationType.value = ''

    // fetch stations
    fetchStations();
  }).catch(() => {
    isSubmitting.value = false
    proxy.$swal.fire('Error', 'An error occurred', 'error')
  })
}

const triggerFileInput = () => {
  proxy.$refs.fileInput.click();
}

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, { defval: null, raw: true });
      importStations(json);
    };
    reader.readAsArrayBuffer(file);
  }
}

const importStations = (stationsData) => {
  axios.post(URL+'importStations', stationsData)
      .then(() => {
        proxy.$swal.fire('Success', 'Stations imported successfully', 'success')
        fetchStations();
      })
      .catch(() => {
        proxy.$swal.fire('Error', 'An error occurred during import', 'error')
      });
}

onMounted(()=>{
  fetchStations().then(() => {
  $(document).ready(function() {
    table = $('#sTable').DataTable({
      "pagingType": "full_numbers",
      "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
      "language": {
        "info": "Showing _START_ to _END_ of _TOTAL_ entries",
        "infoEmpty": "Showing 0 to 0 of 0 entries",
        "infoFiltered": "(filtered from _MAX_ total entries)",
        "zeroRecords": "No matching records found",
        "paginate": {
          "first": "First",
          "last": "Last",
          "next": "Next",
          "previous": "Previous"
        }
      }
    });
  });
  });
})
</script>

<style scoped>

/* Custom styles for DataTable pagination buttons */
.paginate_button {
  background-color: #16AF47 !important;
  color: white !important;
  border: none !important;
  padding: 5px 10px !important;
  margin: 2px !important;
  cursor: pointer !important;
  border-radius: 3px !important;
}

.paginate_button:hover {
  background-color: #138a36 !important;
}

.paginate_button.disabled {
  background-color: #cccccc !important;
  color: #666666 !important;
  cursor: not-allowed !important;
}

.paginate_button.current {
  background-color: #0d6efd !important;
  color: white !important;
}

/* Custom styles for DataTable info text */
.dataTables_info {
  font-size: 14px !important;
  color: #333333 !important;
}
</style>