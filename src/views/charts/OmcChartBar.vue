<template>
  <CChartBar :data="chartData" :key="chartKey" />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { CChartBar } from '@coreui/vue-chartjs';
import { fiilingStationsByOmc, fetchFillingStations } from '@/data/fillingStations';

const labels = ref([]);
const data = ref([]);

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Filling Station OMC',
      backgroundColor: '#FFC107',
      data: [],
    },
  ],
});

const chartKey = ref(0);

const loadChartDataFromLocalStorage = () => {
  const storedLabels = localStorage.getItem('omcChartLabels');
  const storedData = localStorage.getItem('omcChartData');
  if (storedLabels && storedData) {
    labels.value = JSON.parse(storedLabels);
    data.value = JSON.parse(storedData);
  }
};

const saveChartDataToLocalStorage = () => {
  localStorage.setItem('omcChartLabels', JSON.stringify(labels.value));
  localStorage.setItem('omcChartData', JSON.stringify(data.value));
};

onMounted(async () => {
  loadChartDataFromLocalStorage();
  await fetchFillingStations();
  if (fiilingStationsByOmc.value) {
    labels.value = Object.keys(fiilingStationsByOmc.value);
    data.value = Object.values(fiilingStationsByOmc.value);
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