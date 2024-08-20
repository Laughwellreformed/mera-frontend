
<template>
  <CRow>
    <CCol :md="5">
      <div class="row align-items-center">
        <div class="col-md-12">
          
          <h3>{{ station.station_name }}
            <span>
              <i v-if="station.status === 1" class="bi bi-patch-check brand-primary-color"></i>
              <i v-if="station.status === 0" class="bi bi-stopwatch brand-secondary-color"></i>
              <i v-if="station.status === 2" class="bi bi-x-circle text-danger"></i>
              <i v-if="station.status === 3" class="bi bi-building-fill-gear brand-secondary-color"></i>
            </span>
          </h3>
        </div>
        <div class="col-md-12">
          <ul class="list-group">
            <li class="list-group-item">
              <div class="row">
                <div class="col-md-4">
                  <div class="badge brand-primary-bg">{{ station.station_type }} </div>
                </div>
                <div class="col-md-8">
                  <div class="badge brand-secondary-bg">{{ station.omc }} </div>
                </div>
              </div>
            </li>
              <!-- coordinates -->
            <li class="list-group-item">
              <strong>Coordinates (Lng, Lat):</strong> {{ coords.lng }}, {{ coords.lat }}
            </li>
            <li class="list-group-item">
              <strong>Licence number:</strong> {{ station.licence_number ?? 'N/A'}}
            </li>
            <li class="list-group-item">
              <strong>District:</strong> {{ station.district ?? 'N/A' }}
            </li>
            <li class="list-group-item">
              <strong>Physical Location:</strong> {{ station.p_location ?? 'N/A' }}
            </li>
            <li class="list-group-item">
              <strong>Status:</strong> {{ station.status === 1 ? 'Operational' : 'Not Operational' }}
            </li>
            <li class="list-group-item">
              <strong>Operational Agreement:</strong> {{ station.op_agreement ?? 'N/A' }}
            </li>
            <li class="list-group-item">
              <strong>Dealer Contacts:</strong> {{ station.dealer_contacts ?? 'N/A' }}
            </li>
          </ul>
        </div>
        <div class="col-md-12 mt-3">
          <div class="card" id="results_card">
            <div class="card-header">
              <h5>Automated Inspection Results</h5>
            </div>
            <div v-if="resultsReady" class="p-3">
              <p v-if="isSuitable" class="brand-primary-color"><b>This area is suitable for a retail station.</b></p>
              <p v-else class="text-danger"><b>This area is not suitable for a gas station due to the following reasons:</b></p>
              <ul v-if="!isSuitable">
                <li v-for="reason in reasons" :key="reason">{{ reason }}</li>
              </ul>
            </div>
            <div v-else class="p-3">
              <p><i>Inspecting area...</i></p>
            </div>
            <div class="card-footer">
              <button @click="inspectArea" class="btn brand-btn-primary btn-sm">Re-inspect Area</button>
              &nbsp;
              <button @click="downloadResults" class="btn brand-btn-secondary btn-sm">Download Results</button>
            </div>
          </div>
        </div>
      </div>
    </CCol>
    <CCol :md="7">
      <CCard>
        <CCardbody>
          <div ref="mapContainer" style="height: 650px;"></div>
        </CCardbody>
      </CCard>
    </CCol>
  </CRow>
</template>


<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import Geolocation from '@react-native-community/geolocation'
import { useRoute } from 'vue-router'
import axios from 'axios'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const URL = 'http://localhost:3000/'

// get station id from route
const route = useRoute()
const station_id = ref(route.params.id)

const mapContainer = ref(null)
let map;

const station = ref({})
const stationCoords = ref({})
const coords = ref({})

const reasons = ref([])
const isSuitable = ref(false)
const resultsReady = ref(false)


const { proxy } = getCurrentInstance()

const fetchStation = async () => {
  try {
    const response = await axios.get(`${URL}station/${station_id.value}`)
    station.value = response.data
    stationCoords.value = response.data.geog
  }
  catch (error){
    console.error('Error fetching stations:', error)
  }
}
const fetchGasStations = async () => {
  try {
    const response = await axios.get(`${URL}stations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gas stations:', error);
    return [];
  }
};

const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371e3; // Earth radius in meters
  const d1 = lat1 * Math.PI / 180;
  const d2 = lat2 * Math.PI / 180;
  const cd1= (lat2 - lat1) * Math.PI / 180;
  const cd2 = (lng2 - lng1) * Math.PI / 180;

  const a = Math.sin(cd1 / 2) * Math.sin(cd1 / 2) +
      Math.cos(d1) * Math.cos(d2) *
      Math.sin(cd2 / 2) * Math.sin(cd2 / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
};

const parseGeog2 = (geog) => {
  if (typeof geog !== 'string') {
    return null;
  }
  const match = geog.match(/POINT\(([^ ]+) ([^ ]+)\)/);
  if (match) {
    return { lat: parseFloat(match[2]), lng: parseFloat(match[1]) };
  }
  return null;
};

const parseGeog = (geog) => {
  if (typeof geog !== 'object' || !geog.value) {
    return null;
  }
  const match = geog.value.match(/POINT\(([^ ]+) ([^ ]+)\)/);
  if (match) {
    return { lat: parseFloat(match[2]), lng: parseFloat(match[1]) };
  }
  return null;
};

// const inspectArea = async () => {
//   const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary("places");
//   const { LatLng } = await google.maps.importLibrary("core");
//   const { spherical } = await google.maps.importLibrary("geometry")
//
//   const center = new LatLng(coords.value.lat, coords.value.lng);
//
//   const request = {
//     fields: ["displayName", "location", "businessStatus"],
//     locationRestriction: {
//       center: center,
//       radius: 500,
//     },
//     includedPrimaryTypes: ['hospital', 'school', 'secondary_school', 'primary_school', 'city_hall'],
//     rankPreference: SearchNearbyRankPreference.POPULARITY,
//   };
//
//   const { places } = await Place.searchNearby(request);
//
//   isSuitable.value = true;
//
//   reasons.value = [];
//
//   places.forEach((place) => {
//     const distance = spherical.computeDistanceBetween(center, place.location);
//     const roundedDistance = Math.round(distance);
//     // console.log(distance);
//     if (distance < 500) {
//       reasons.value.push(`Too close to a ${place.displayName} (${roundedDistance} meters)`);
//       isSuitable.value = false;
//     }
//   });
//
//   resultsReady.value = true;
//
//   if (isSuitable.value) {
//     console.log(`The area at ${clickedLat.value}, ${clickedLng.value} is suitable for a gas station.`);
//   } else {
//     reasons.value.forEach(reason => console.log(`- ${reason}`));
//   }
// };

const inspectArea = async () => {
  resultsReady.value = false;
  const gasStations = await fetchGasStations();
  const currentCoords = coords.value;

  isSuitable.value = true;
  reasons.value = [];

  gasStations.forEach(station => {
    const stationCoord = parseGeog2(station.geog);
    if (stationCoord) {
      const distance = calculateDistance(currentCoords.lat, currentCoords.lng, stationCoord.lat, stationCoord.lng);
      if (distance < 500 && distance > 0) { // Ensure distance is greater than 0
        reasons.value.push(`Too close to ${station.station_name} (${Math.round(distance)} meters)`);
        isSuitable.value = false;
      }
    } else {
      console.warn('Parsed station coordinates are null for station:', station);
    }
  });

  if (isSuitable.value) {
    const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary("places");
    const { LatLng } = await google.maps.importLibrary("core");
    const { spherical } = await google.maps.importLibrary("geometry");

    const center = new LatLng(currentCoords.lat, currentCoords.lng);

    const request = {
      fields: ["displayName", "location", "businessStatus"],
      locationRestriction: {
        center: center,
        radius: 500,
      },
      includedPrimaryTypes: ['hospital', 'school', 'secondary_school', 'primary_school', 'city_hall'],
      rankPreference: SearchNearbyRankPreference.POPULARITY,
    };

    const { places } = await Place.searchNearby(request);

    places.forEach((place) => {
      const distance = spherical.computeDistanceBetween(center, place.location);
      const roundedDistance = Math.round(distance);
      if (distance < 500) {
        reasons.value.push(`Too close to a ${place.displayName} (${roundedDistance} meters)`);
        isSuitable.value = false;
      }
    });
  }

  resultsReady.value = true;

  if (isSuitable.value) {
    console.log(`The area at ${currentCoords.lat}, ${currentCoords.lng} is suitable for a gas station.`);
  } else {
    reasons.value.forEach(reason => console.log(`- ${reason}`));
  }
};

// download results
const downloadResults = async () => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const margin = 10;
  const pageWidth = pdf.internal.pageSize.getWidth() - 2 * margin;

  // Add station details
  pdf.setFontSize(16);
  pdf.text('Station Details', margin, margin + 10);
  pdf.setFontSize(12);
  pdf.text(`Name: ${station.value.station_name}`, margin, margin + 20);
  pdf.text(`Type: ${station.value.station_type}`, margin, margin + 30);
  pdf.text(`Coordinates: ${coords.value.lng}, ${coords.value.lat}`, margin, margin + 40);
  pdf.text(`Licence Number: ${station.value.licence_number ?? 'N/A'}`, margin, margin + 50);
  pdf.text(`District: ${station.value.district ?? 'N/A'}`, margin, margin + 60);
  pdf.text(`Physical Location: ${station.value.p_location ?? 'N/A'}`, margin, margin + 70);
  pdf.text(`Status: ${station.value.status === 1 ? 'Operational' : 'Not Operational'}`, margin, margin + 80);
  pdf.text(`Operational Agreement: ${station.value.op_agreement ?? 'N/A'}`, margin, margin + 90);

  // Split and add Dealer Contacts
  const dealerContacts = `Dealer Contacts: ${station.value.dealer_contacts ?? 'N/A'}`;
  const dealerContactsLines = splitTextToFit(dealerContacts, pageWidth, pdf);
  dealerContactsLines.forEach((line, index) => {
    pdf.text(line, margin, margin + 100 + index * 10);
  });

  // Add inspection results
  pdf.setFontSize(16);
  pdf.text('Inspection Results', margin, margin + 120);
  pdf.setFontSize(12);
  if (isSuitable.value) {
    pdf.setTextColor(0, 128, 0); // Green color
    pdf.text('This area is suitable for a retail station.', margin, margin + 130);
  } else {
    pdf.setTextColor(255, 0, 0); // Red color
    pdf.text('This area is not suitable for a gas station due to the following reasons:', margin, margin + 130);
    reasons.value.forEach((reason, index) => {
      pdf.text(`- ${reason}`, margin, margin + 140 + index * 10);
    });
  }

  pdf.save('inspection_results.pdf');
};

const splitTextToFit = (text, maxWidth, pdf) => {
  const words = text.split(' ');
  let lines = [];
  let currentLine = '';

  words.forEach(word => {
    const testLine = currentLine + word + ' ';
    const testWidth = pdf.getTextWidth(testLine);
    if (testWidth > maxWidth) {
      lines.push(currentLine.trim());
      currentLine = word + ' ';
    } else {
      currentLine = testLine;
    }
  });

  lines.push(currentLine.trim());
  return lines;
};

onMounted(async () => {
  await fetchStation();
  const script = document.createElement('script')
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyADidtsKezQLlIptOGjDqjuOahCWuQWYN8`
  script.async = true
  script.defer = true
  script.onload = () => {
    Geolocation.getCurrentPosition(
        async (position) => {
          const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
          const {InfoWindow} = await google.maps.importLibrary("maps");

          const { latitude, longitude } = position.coords
          map = new google.maps.Map(mapContainer.value, {
            center: { lat: latitude, lng: longitude },
            zoom: 6,
            mapId: '6391f83bd22d0376'
          })
          const userMarker = new AdvancedMarkerElement({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            title: 'You are here',
          })

          const stationCoordinates = parseGeog(stationCoords)
          if (stationCoordinates) {
            coords.value = stationCoordinates
            const stationMarker = new AdvancedMarkerElement({
              position: stationCoordinates,
              map: map,
              title: station.station_name,
            })

            const infoWindow = new InfoWindow({
              content: `
                <div>
                  <h3>${station.value.station_name}</h3>
                  <p><strong>Coordinates:</strong> ${stationCoordinates.lat}, ${stationCoordinates.lng}</p>
                  <p><strong>Type:</strong> ${station.value.station_type}</p>
                  <p><strong>Status:</strong> ${station.value.status === 1 ? 'Operational' : 'Not Operational'}</p>
                </div>
              `
            });

            infoWindow.open(map, stationMarker)

            stationMarker.addListener('click', () => {
              infoWindow.open(map, stationMarker)
            })

            const line = new google.maps.Polyline({
              path: [
                { lat: latitude, lng: longitude },
                stationCoordinates
              ],
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 1.0,
              strokeWeight: 2,
            })
            line.setMap(map)

            await inspectArea();
          }
        },
        (error) => {
          console.error('Error getting location:', error)
          // Fallback to default location if geolocation fails
          map = new google.maps.Map(mapContainer.value, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 10,
            mapId: '6391f83bd22d0376'
          })
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
    )
  }
  document.head.appendChild(script)
})
</script>