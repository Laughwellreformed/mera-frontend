<script setup>
import { exportToExcel, exportToCSV, exportToPDF } from '@/utils/exportUtils';
import {
  CChartBarExample,
  OmcChartBar,
  CChartDoughnutExample,
} from './index.js';

const dataForExport = [
  { district: 'District 1', stations: 10 },
  { district: 'District 2', stations: 15 },
  // Add more data as needed
];

const handleDownloadExcel = () => {
  exportToExcel(dataForExport);
};

const handleDownloadCSV = () => {
  exportToCSV(dataForExport);
};

const handleDownloadPDF = () => {
  exportToPDF(dataForExport);
};

const handleView = () => {
  //push to view page
};

// onMounted(async () => {
//   await getChartDataForExport();
//   console.log('Data for export:', getChartDataForExport().district);
// });
</script>

<template>
  <CRow>
    <CCol :md="6" class="mb-4">
      <CCard>
        <CCardHeader>
          <a href="/reports/by-district"  class="text-decoration-none brand-blue-color">Filling Stations By District</a>
          <div class="float-end">
            <CButton color="secondary" @click="handleDownloadExcel" size="sm" class="btn-secondary btn-sm"><i class="bi bi-download"></i> Excel <i class="bi bi-filetype-xlsx"></i></CButton>
            &nbsp;
            <CButton color="primary" @click="handleDownloadCSV" size="sm" class="brand-btn-blue btn-sm"><i class="bi bi-download"></i> CSV <i class="bi bi-filetype-csv"></i></CButton>
            &nbsp;
            <CButton color="primary" @click="handleDownloadPDF" size="sm" class="btn-danger text-white btn-sm"><i class="bi bi-download"></i> PDF <i class="bi bi-filetype-pdf"></i></CButton>
            &nbsp;
            <CButton color="primary" @click="handleView" size="sm" class="brand-btn-primary text-white btn-sm"><i class="bi bi-eye"></i> View</CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          <CChartBarExample />
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :md="6" class="mb-4">
      <CCard>
        <CCardHeader>
          Filling Stations By OMC
          <div class="float-end">
            <CButton color="secondary" @click="handleDownloadExcel" size="sm" class="btn-secondary btn-sm"><i class="bi bi-download"></i> Excel <i class="bi bi-filetype-xlsx"></i></CButton>
            &nbsp;
            <CButton color="primary" @click="handleDownloadCSV" size="sm" class="brand-btn-blue btn-sm"><i class="bi bi-download"></i> CSV <i class="bi bi-filetype-csv"></i></CButton>
            &nbsp;
            <CButton color="primary" @click="handleDownloadPDF" size="sm" class="btn-danger text-white btn-sm"><i class="bi bi-download"></i> PDF <i class="bi bi-filetype-pdf"></i></CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          <OmcChartBar />
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :md="6" class="mb-4">
      <CCard>
        <CCardHeader>Filling Station Operational Status</CCardHeader>
        <CCardBody><CChartDoughnutExample style="height: 400px;" /></CCardBody>
      </CCard>
    </CCol>
<!--    <CCol :md="6" class="mb-4">-->
<!--      <CCard>-->
<!--        <CCardHeader>Line Chart</CCardHeader>-->
<!--        <CCardBody><CChartLineExample /></CCardBody>-->
<!--      </CCard>-->
<!--    </CCol>-->
<!--    <CCol :md="6" class="mb-4">-->
<!--      <CCard>-->
<!--        <CCardHeader>Radar Chart</CCardHeader>-->
<!--        <CCardBody><CChartRadarExample /></CCardBody>-->
<!--      </CCard>-->
<!--    </CCol>-->
<!--    <CCol :md="6" class="mb-4">-->
<!--      <CCard>-->
<!--        <CCardHeader>Pie Chart</CCardHeader>-->
<!--        <CCardBody><CChartPieExample /></CCardBody>-->
<!--      </CCard>-->
<!--    </CCol>-->
<!--    <CCol :md="6" class="mb-4">-->
<!--      <CCard>-->
<!--        <CCardHeader>Polar Area Chart</CCardHeader>-->
<!--        <CCardBody><CChartPolarAreaExample /></CCardBody>-->
<!--      </CCard>-->
<!--    </CCol>-->
  </CRow>
</template>