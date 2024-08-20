<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col">
              <strong>Searched Sites</strong>
            </div>
            <div class="col text-end">

            </div>
          </div>
        </div>
        <div class="card-body">
          <table class="table table-striped" id="site_table">
            <thead>
            <tr>
              <th>#</th>
              <th>Site Name</th>
              <th>Geography(Lng, Lat)</th>
              <th>Fuel Tank Area (m&sup2;)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <template v-if="sites.length === 0">
              <tr>
                <td colspan="7" class="text-center">No sites available</td>
              </tr>
            </template>
            <template v-else>
              <tr v-for="(site, index) in sites" :key="site.id">
                <td>{{ index+1 }}</td>
                <td><a :href="`/pages/site-details/${site.site_id}`" class="text-decoration-none"> {{ site.area_name }} </a></td>
                <td>{{ site.coordinates }}</td>
                <td>{{ site.fuel_tank_area_square_meters.toFixed(2) }}</td>
                <td>
                  <div v-if="site.is_suitable" class="badge brand-primary-bg">Suitable</div>
                  <div v-else class="badge bg-danger">Not Suitable</div>
                </td>
                <td>
                  <a :href="`/pages/site-details/${site.site_id}`" class="btn brand-btn-primary btn-sm"><i class="bi bi-eye"></i></a>
                  &nbsp;
                  <button title="View Reasons" class="btn btn-warning text-white btn-sm" @click="openReasonsModal(site.reasons)"><i class="bi bi-binoculars"></i></button>
                </td>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <CModal v-model:visible="visibleReasonsModal" title="Reasons">
    <CModalBody>
      <ul>
        <li v-for="(reason, index) in reasons" :key="index">{{ reason }}</li>
      </ul>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="visibleReasonsModal = false">Close</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import axios from 'axios'
import $ from 'jquery'
import DataTable from 'datatables.net-dt';

const URL = 'http://localhost:3000/'

const sites = ref([])
const visibleReasonsModal = ref(false)
const reasons = ref([])

const fetchSites = async () => {
  await axios.get(`${URL}sites`)
    .then(response => {
      sites.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
}

const openReasonsModal = (siteReasons) => {
  console.log(siteReasons)
  reasons.value = siteReasons
  visibleReasonsModal.value = true
}

onMounted(() => {
  fetchSites().then(() => {
    $(document).ready(function() {
      let table = $('#site_table').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "language": {
          "info": "Showing _START_ to _END_ of _TOTAL_ entries",
          "infoEmpty": "Showing 0 to 0 of 0 entries",
          "infoFiltered": "(filtered from _MAX_ total entries)",
          "zeroRecords": "No matching records found",
          "search": "Filter:",
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