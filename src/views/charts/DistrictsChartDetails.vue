<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { fillingStationsByDistrictCategory, fillingStationsByStatus, fetchFillingStations } from '@/data/fillingStations';
import {
  CChartBarExample,
  OmcChartBar,
  CChartDoughnutExample,
} from './index.js';

import $ from 'jquery'
import DataTable from 'datatables.net-dt';

let table
const districtData = ref([]);

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.2)`;
};


onMounted(async () => {
  await fetchFillingStations();
  if (fillingStationsByDistrictCategory.value) {
    districtData.value = Object.entries(fillingStationsByDistrictCategory.value).map(([district, data]) => ({
      district,
      totalStations: data.totalStations,
      stationNames: data.stationNames.join(', '),
    }));
  }
  await nextTick();
  $('#fByDcTable').DataTable({
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
</script>

<template>
  <CRow>
    <CCol :md="12" class="mb-4">
      <CCard>
        <CCardHeader>
          Filling Stations By District Category
        </CCardHeader>
        <CCardBody>
          <table class="table table-hover" id="fByDcTable">
            <thead>
            <tr>
              <th>District</th>
              <th>Total</th>
              <th>Station Names</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in districtData" :key="index">
              <td>{{ item.district }}</td>
              <td>{{ item.totalStations }}</td>
              <td>
                  <span
                      v-for="(name, nameIndex) in item.stationNames.split(', ')"
                      :key="nameIndex"
                      class="station-name"
                      :style="{ backgroundColor: getRandomColor() }"
                  >
                    {{ name }}
                  </span>
              </td>
            </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :md="8" class="mb-4">
      <CCard>
        <CCardHeader>
          District BarChart
        </CCardHeader>
        <CCardBody>
          <CChartBarExample />
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :md="4" class="mb-4">
      <CCard>
        <CCardHeader>Operational Status PieChart</CCardHeader>
        <CCardBody><CChartDoughnutExample  /></CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
<style scoped>
.station-name {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 2px 4px;
  margin-right: 4px;
  margin-top: 4px;
  display: inline-block;
}
</style>