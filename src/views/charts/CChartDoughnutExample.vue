<script setup>
import { ref, onMounted, watch } from 'vue';
import { CChartDoughnut } from '@coreui/vue-chartjs'
import { fillingStationsByStatus, fetchFillingStations } from '@/data/fillingStations';

const labels = ref([]);
const data = ref([]);

const chartData = ref({
  labels: [],
  datasets: [
    {
      backgroundColor: ['#16AF47', '#DD1B16'],
      data: [],
    },
  ],
});

const chartKey = ref(0);

onMounted(async () => {
  await fetchFillingStations();
  if (fillingStationsByStatus.value) {
    labels.value = Object.keys(fillingStationsByStatus.value);
    data.value = Object.values(fillingStationsByStatus.value);
  }
});

watch([labels, data], () => {
  chartData.value.labels = labels.value;
  chartData.value.datasets[0].data = data.value;

  chartKey.value++;
});
</script>

<template>
  <CChartDoughnut :data="chartData" :key="chartKey" />
</template>
