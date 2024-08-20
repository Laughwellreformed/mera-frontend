import { ref } from 'vue';
import axios from 'axios';

const URL = 'http://localhost:3000/';

export const fillingStationsByDistrict = ref({});

export const fillingStationsByDistrictCategory = ref({});

export const fiilingStationsByOmc = ref({});

export const fillingStationsByStatus = ref({});

const accumulateDistrictData = (stations) => {
  return stations.reduce((acc, station) => {
    const district = station.district;
    if (!acc[district]) {
      acc[district] = { totalStations: 0, stationNames: [] };
    }
    acc[district].totalStations++;
    acc[district].stationNames.push(station.station_name);
    return acc;
  }, {});
};

export const fetchFillingStations = async () => {
  try {
    const response = await axios.get(`${URL}stations`);
    const stations = response.data;

    const districtCounts = stations.reduce((acc, station) => {
      const district = station.district;
      if (!acc[district]) {
        acc[district] = 0;
      }
      acc[district]++;
      return acc;
    }, {});
    fillingStationsByDistrict.value = districtCounts;

    fillingStationsByDistrictCategory.value = accumulateDistrictData(stations);

    const omcCounts = stations.reduce((acc, station) => {
      const omc = station.omc;
      if (!acc[omc]) {
        acc[omc] = 0;
      }
      acc[omc]++;
      return acc;
    }, {});
    fiilingStationsByOmc.value = omcCounts;

    const statusCounts = stations.reduce((acc, station) => {
      const status = station.status === 1 ? 'Operational' : 'Not Operational';
      if (!acc[status]) {
        acc[status] = 0;
      }
      acc[status]++;
      return acc;
    }, {});
    fillingStationsByStatus.value = statusCounts;
  } catch (error) {
    console.error('Error fetching stations:', error);
  }
};