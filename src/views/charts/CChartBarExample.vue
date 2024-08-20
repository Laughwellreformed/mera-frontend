<template>
  <CChartBar :data="chartData" :key="chartKey" />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { CChartBar } from '@coreui/vue-chartjs';
import { fillingStationsByDistrict, fetchFillingStations } from '@/data/fillingStations';

const labels = ref([]);
const data = ref([]);

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Number of Filling Stations',
      backgroundColor: '#16AF47',
      data: [],
    },
  ],
});

const chartKey = ref(0);

const loadChartDataFromLocalStorage = () => {
  const storedLabels = localStorage.getItem('chartLabels');
  const storedData = localStorage.getItem('chartData');
  if (storedLabels && storedData) {
    labels.value = JSON.parse(storedLabels);
    data.value = JSON.parse(storedData);
  }
};

const saveChartDataToLocalStorage = () => {
  localStorage.setItem('chartLabels', JSON.stringify(labels.value));
  localStorage.setItem('chartData', JSON.stringify(data.value));
};

onMounted(async () => {
  loadChartDataFromLocalStorage();
  await fetchFillingStations();
  if (fillingStationsByDistrict.value) {
    labels.value = Object.keys(fillingStationsByDistrict.value);
    data.value = Object.values(fillingStationsByDistrict.value);
    saveChartDataToLocalStorage();
  }
});

watch([labels, data], () => {
  chartData.value.labels = labels.value;
  chartData.value.datasets[0].data = data.value;

  saveChartDataToLocalStorage();
  chartKey.value++;
});

</script>