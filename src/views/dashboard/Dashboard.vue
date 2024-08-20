<template>
  <div>
    <CRow>
      <CCol :md="12">
        <form @submit.prevent="handleSearch">
          <CInputGroup class="mb-3">
            <input type="text" class="form-control" v-model="searchCoordinates" :placeholder="`Enter coordinates like: ${lat}, ${lng}`" required>
            <button type="submit" class="btn brand-btn-primary" style="color: #fff; background-color: #16AF47">Search</button>
          </CInputGroup>
        </form>
      </CCol>
      <CCol :md="12">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col">
                <strong>Service Station Mapping</strong>
              </div>
              <div class="col text-end">
                <CButton color="primary" size="sm" @click="() => { visibleInspectionModal = true }" class="brand-btn-secondary">New Inspection</CButton>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div ref="mapContainer" style="height: 500px;"></div>
          </div>
        </div>

      </CCol>
      <CModal
          :visible="visiblePopup"
          @close="() => { visiblePopup = false }"
          aria-labelledby="PopupLabel"
      >
        <CModalHeader>
          <CModalTitle id="PopupLabel">Inspect Area</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Coordinates: {{ clickedLat }}, {{ clickedLng }}</p>
          <p>Check this area for viability of a filling station construction?</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" @click="() => { visiblePopup = false }">
            Close
          </CButton>
          <CButton color="primary" @click="inspectArea">
            Inspect
          </CButton>
        </CModalFooter>
      </CModal>
      <CModal
          :visible="visibleReasons"
          @close="() => { visibleReasons = false }"
          aria-labelledby="ReasonsLabel"
      >
        <CModalHeader>
          <CModalTitle id="ReasonsLabel">Inspection Results</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p v-if="isSuitable">
            <b>
              The area
              <span v-if="inspectionData.areaName" class="text-success">{{ inspectionData.areaName }}({{ clickedLat }}, {{ clickedLng }})</span>
              <span v-else class="text-success">at {{ clickedLat }}, {{ clickedLng }}</span>
              is suitable for a retail station.
            </b>
          </p>
          <p v-else>
            <b>
              The area
              <span v-if="inspectionData.areaName" class="text-danger">{{ inspectionData.areaName }}({{ clickedLat }}, {{ clickedLng }})</span>
              <span v-else class="text-danger">at {{ clickedLat }}, {{ clickedLng }}</span>
              is not suitable for a filling station construction due to the following reasons:
            </b>
          </p>
          <ul v-if="!isSuitable">
            <li v-for="reason in reasons" :key="reason">{{ reason }}</li>
          </ul>
          <p v-if="resultsReady">
            <b>Fuel Tank Area:</b> {{ fuelTankAreaSquareMeters.toFixed(2) }} m&sup2;
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" @click="() => { visibleReasons = false }">
            Close
            <i class="bi bi-x-square"></i>
          </CButton>
          <CButton color="primary" @click="saveInspection" class="brand-btn-primary">
            Save
            <i class="bi bi-floppy"></i>
          </CButton>
          <CButton color="danger" @click="downloadReport" class="text-white">
            Download Report
            <i class="bi bi-file-pdf"></i>
          </CButton>
        </CModalFooter>
      </CModal>
      <CModal
          :visible="visibleInspectionModal"
          @close="() => { visibleInspectionModal = false }"
          aria-labelledby="InspectionModalLabel"
      >
        <CModalHeader>
          <CModalTitle id="InspectionModalLabel">New Inspection</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <form @submit.prevent="handleInspection">
            <div class="mb-3">
              <label for="areaName" class="form-label">Name of the Area</label>
              <input type="text" class="form-control" id="areaName" v-model="inspectionData.areaName" required>
            </div>
            <div class="mb-3">
              <label for="coordinates" class="form-label">Coordinates (Lat, Lng)</label>
              <input type="text" class="form-control" id="coordinates" v-model="inspectionData.coordinates" placeholder="Enter coordinates like: lat, lng" required>
            </div>
            <div class="mb-3">
              <label for="fuelTankArea" class="form-label">Fuel Tank Area Coordinates</label>
              <input type="text" class="form-control" id="fuelTankArea1" v-model="inspectionData.fuelTankArea[0]" placeholder="Point 1 (lat, lng)" required>
              <input type="text" class="form-control mt-2" id="fuelTankArea2" v-model="inspectionData.fuelTankArea[1]" placeholder="Point 2 (lat, lng)" required>
              <input type="text" class="form-control mt-2" id="fuelTankArea3" v-model="inspectionData.fuelTankArea[2]" placeholder="Point 3 (lat, lng)" required>
              <input type="text" class="form-control mt-2" id="fuelTankArea4" v-model="inspectionData.fuelTankArea[3]" placeholder="Point 4 (lat, lng)" required>
            </div>
            <CButton type="submit" color="primary" class="brand-btn-primary">Inspect</CButton>
          </form>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" @click="() => { visibleInspectionModal = false }">Close</CButton>
        </CModalFooter>
      </CModal>
      <CCol :md="12">
        <CRow>
          <CCol :md="6" class="mt-2">
            <h4>Search Nearby</h4>
            <CRow>
              <CCol :sm="4">
                <CCard>
                  <CCardBody>
                    <h5>Filling Stations</h5>
                    <CButton color="primary" @click="searchNearby('gas_station')" class="brand-btn-primary">Search</CButton>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol :sm="4">
                <CCard>
                  <CCardBody>
                    <h5>Hospitals</h5>
                    <CButton color="primary" @click="searchNearby('hospital')" class="brand-btn-primary">Search</CButton>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol :sm="4">
                <CCard>
                  <CCardBody>
                    <h5>Schools</h5>
                    <CButton color="primary" @click="searchNearby('school')" class="brand-btn-primary">Search</CButton>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'
import { jsPDF } from 'jspdf'

const URL = 'http://localhost:3000/'

const { proxy } = getCurrentInstance()

const mapContainer = ref(null)
let map;
let marker;

const lat = ref(0)
const lng = ref(0)
const searchCoordinates = ref('')
const visiblePopup = ref(false)
const visibleReasons = ref(false)
const isSuitable = ref(false)
const clickedLat = ref(0)
const clickedLng = ref(0)
const reasons = ref([])
const fuelTankAreaSquareMeters = ref(0)

const visibleInspectionModal = ref(false);
const inspectionData = ref({
  areaName: '',
  coordinates: '',
  fuelTankArea: ['', '', '', '']
});

const resultsReady = ref(false);

const fetchGasStations = async () => {
  try {
    const response = await axios.get(`${URL}stations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gas stations:', error);
    return [];
  }
};

const handleInspection = async () => {
  visibleInspectionModal.value = false;
  resultsReady.value = false;
  const gasStations = await fetchGasStations();
  const inspectionCoords = parseCoordinates(inspectionData.value.coordinates);

  clickedLng.value = inspectionCoords.lng;
  clickedLat.value = inspectionCoords.lat;

  isSuitable.value = true;
  reasons.value = [];

  // Check distance to existing gas stations
  gasStations.forEach(station => {
    const stationCoord = parseGeog2(station.geog);
    if (stationCoord) {
      const distance = calculateDistance(inspectionCoords.lat, inspectionCoords.lng, stationCoord.lat, stationCoord.lng);
      if (distance < 500 && distance > 0) {
        reasons.value.push(`Too close to ${station.station_name} (${Math.round(distance)} meters)`);
        isSuitable.value = false;
      }
    } else {
      console.warn('Parsed station coordinates are null for station:', station);
    }
  });

  // Check for nearby places
  if (isSuitable.value) {
    const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary("places");
    const { LatLng } = await google.maps.importLibrary("core");
    const { spherical } = await google.maps.importLibrary("geometry");

    const center = new LatLng(inspectionCoords.lat, inspectionCoords.lng);

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

  // Calculate the area of the fuel tank
  const fuelTankArea = await calculatePolygonArea(inspectionData.value.fuelTankArea);
  fuelTankAreaSquareMeters.value = fuelTankArea;
  if (fuelTankArea < 100) { // Example threshold
    reasons.value.push(`Fuel tank area is too small (${fuelTankArea.toFixed(2)} square meters)`);
    isSuitable.value = false;
  }

  resultsReady.value = true;

  if (isSuitable.value) {
    console.log(`The area at ${inspectionCoords.lat}, ${inspectionCoords.lng} is suitable for a gas station.`);
  } else {
    reasons.value.forEach(reason => console.log(`- ${reason}`));
  }

  visibleReasons.value = true;
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

const parseCoordinates = (coords) => {
  const [lat, lng] = coords.split(',').map(coord => parseFloat(coord.trim()));
  return { lat, lng };
};

const calculatePolygonArea = async (points) => {
  const { LatLng } = await google.maps.importLibrary("core");
  const { spherical } = await google.maps.importLibrary("geometry");

  const latLngPoints = points.map(point => {
    const [lat, lng] = point.split(',').map(coord => parseFloat(coord.trim()));
    return new google.maps.LatLng(lat, lng);
  });

  return Math.abs(spherical.computeArea(latLngPoints));
};

//Handle search
const handleSearch = () => {
  const [latitude, longitude] = searchCoordinates.value.split(',').map(coord => parseFloat(coord.trim()));
  if (!isNaN(latitude) && !isNaN(longitude)) {
    lat.value = latitude;
    lng.value = longitude;
    moveMapToLocation(latitude, longitude);
  } else {
    console.error('Invalid coordinates');
  }
};

// move the map to the searched location
const moveMapToLocation = async (latitude, longitude) => {
  const newLocation = new google.maps.LatLng(latitude, longitude);
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const {InfoWindow} = await google.maps.importLibrary("maps");

  map.setCenter(newLocation);

  if (marker) {
    marker.position = newLocation;
    marker.title = 'Search Result';
  } else {
    marker = new AdvancedMarkerElement({
      position: newLocation,
      map: map,
      title: 'Search Result',
    });
  }

  // Create the info window
  const infoWindow = new InfoWindow({
    content: "" +
        "<div>" + "Latitude: " + latitude + "</div>" + "<div>" + "Longitude: " + longitude + "</div>",
  });

  // Open the info window on the marker
  infoWindow.open(map, marker);
};

const searchNearby = async (type) => {
  const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary("places");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const { LatLngBounds } = await google.maps.importLibrary("core");
  const {InfoWindow} = await google.maps.importLibrary("maps");

  let center = new google.maps.LatLng(lat.value, lng.value);

  const request = {
    // required parameters
    fields: ["displayName", "location", "businessStatus"],
    locationRestriction: {
      center: center,
      radius: 1000,
    },
    // optional parameters
    includedPrimaryTypes: [type],
    maxResultCount: 20,
    rankPreference: SearchNearbyRankPreference.POPULARITY,
  };


  const { places } = await Place.searchNearby(request);

  if (places.length) {
    console.log(places);

    const bounds = new LatLngBounds();

    places.forEach((place) => {
      const markerView = new AdvancedMarkerElement({
        map,
        position: place.location,
        title: place.displayName,
      });

      markerView.addListener('click', () => {
        // Create the info window
        const infoWindow = new InfoWindow({
          headerContent: place.displayName,
          content: "" +
              "<div>" + "Status: " + place.businessStatus + "</div>",
          disableAutoPan: true,
          anchor: markerView
        });

        // Open the info window on the marker
        infoWindow.open(map, markerView);

        bounds.extend(place.location);
        console.log(place);
      });
      // Create the info window
      const infoWindow = new InfoWindow({
        headerContent: place.displayName,
        content: "" +
            "<div>" + "Status: " + place.businessStatus + "</div>",
        disableAutoPan: true,
        anchor: markerView
      });

      // Open the info window on the marker
      infoWindow.open(map, markerView);

      bounds.extend(place.location);
      console.log(place);
    });

    map.fitBounds(bounds);
  } else {
    console.log("No results");
  }
};

const inspectArea = async () => {
  const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary("places");
  const { LatLng } = await google.maps.importLibrary("core");
  const { spherical } = await google.maps.importLibrary("geometry")

  const center = new LatLng(clickedLat.value, clickedLng.value);

  const request = {
    fields: ["displayName", "location", "businessStatus"],
    locationRestriction: {
      center: center,
      radius: 1000,
    },
    includedPrimaryTypes: ['gas_station', 'hospital', 'school', 'secondary_school', 'primary_school', 'shopping_mall'],
    rankPreference: SearchNearbyRankPreference.POPULARITY,
  };

  const { places } = await Place.searchNearby(request);

  isSuitable.value = true;

  reasons.value = [];

  places.forEach((place) => {
    const distance = spherical.computeDistanceBetween(center, place.location);
    const roundedDistance = Math.round(distance);
    // console.log(distance);
    if (distance < 1000 ) {
      reasons.value.push(`Too close to a ${place.displayName} (${roundedDistance} meters)`);
      isSuitable.value = false;
    }
  });

  if (isSuitable.value) {
    console.log(`The area at ${clickedLat.value}, ${clickedLng.value} is suitable for a gas station.`);
  } else {
    reasons.value.forEach(reason => console.log(`- ${reason}`));
    console.log(`The area at ${clickedLat.value}, ${clickedLng.value} is not suitable for a gas station.`);
  }

  visibleReasons.value = true;
  visiblePopup.value = false;

};

const saveInspection = async () => {
  try {
    const response = await axios.post(`${URL}saveInspection`, {
      areaName: inspectionData.value.areaName,
      coordinates: inspectionData.value.coordinates,
      fuelTankArea: inspectionData.value.fuelTankArea,
      fuelTankAreaSquareMeters: fuelTankAreaSquareMeters.value,
      reasons: reasons.value,
      isSuitable: isSuitable.value
    });
    console.log('Inspection saved:', response.data);
    proxy.$swal.fire('Success', 'Inspection saved successfully', 'success');
    visibleReasons.value = false;

    // clear form fields
    inspectionData.value.areaName = '';
    inspectionData.value.coordinates = '';
    inspectionData.value.fuelTankArea = ['', '', '', ''];
    fuelTankAreaSquareMeters.value = 0;
    reasons.value = [];
    isSuitable.value = false;

  } catch (error) {
    console.error('Error saving inspection:', error);
    proxy.$swal.fire('Error', 'Failed to save inspection', 'error');
  }
};

const downloadReport = () => {
  const doc = new jsPDF();
  const margin = 10;
  const pageWidth = doc.internal.pageSize.getWidth() - 2 * margin;

  doc.setFontSize(16);
  doc.text('Inspection Report', margin, margin + 10);

  doc.setFontSize(12);
  doc.text(`Area Name: ${inspectionData.value.areaName}`, margin, margin + 20);
  doc.text(`Coordinates: ${clickedLat.value}, ${clickedLng.value}`, margin, margin + 30);
  doc.text(`Fuel Tank Area: ${fuelTankAreaSquareMeters.value.toFixed(2)} m²`, margin, margin + 40);

  doc.setFontSize(16);
  doc.text('Inspection Results', margin, margin + 50);
  doc.setFontSize(12);
  if (isSuitable.value) {
    doc.setTextColor(0, 128, 0); // Green color
    doc.text('This area is suitable for a retail station.', margin, margin + 60);
  } else {
    doc.setTextColor(255, 0, 0); // Red color
    doc.text('This area is not suitable for a gas station due to the following reasons:', margin, margin + 60);
    reasons.value.forEach((reason, index) => {
      doc.text(`- ${reason}`, margin, margin + 70 + index * 10);
    });
  }

  doc.save('inspection_report.pdf');
}

onMounted(() => {
  const script = document.createElement('script')
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyADidtsKezQLlIptOGjDqjuOahCWuQWYN8`
  script.async = true
  script.defer = true
  script.onload = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        const { AdvancedMarkerElement} = await google.maps.importLibrary("marker")
        const {InfoWindow} = await google.maps.importLibrary("maps");
        const { latitude, longitude } = position.coords
        lat.value = latitude
        lng.value = longitude
        map = new google.maps.Map(mapContainer.value, {
          center: { lat: latitude, lng: longitude },
          zoom: 16,
          mapId: '6391f83bd22d0376'
        })
        const CurrentLocIcon = {
          url: '/mapicons/gas-station.png', // Replace with your image path
          scaledSize: new google.maps.Size(32, 32), // Adjust size as needed
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(16, 32)
        };


        marker = new AdvancedMarkerElement({
          position: new google.maps.LatLng(latitude, longitude),
          map: map,
          title: 'You are here',
        })
        // marker = new google.maps.Marker({
        //   position: { lat: latitude, lng: longitude },
        //   map: map,
        //   title: 'You are here',
        // })
        map.addListener('click', (event) => {
          clickedLat.value = event.latLng.lat();
          clickedLng.value = event.latLng.lng();
          visiblePopup.value = true;
        });


        marker.addListener('click', () => {
          const infoWindow = new InfoWindow({
            headerContent: "Current Location",
            content: `
              <div>
                <h5>You are here</h5>
                <p><strong>Coordinates:</strong> ${latitude}, ${longitude}</p>
              </div>
            `
          });
          infoWindow.open(map, marker);
        });
      },
      async (error) => {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")
        const {InfoWindow} = await google.maps.importLibrary("maps");
        // Fallback to default location if geolocation fails
        map = new google.maps.Map(mapContainer.value, {
          center: { lat: -13.9600103, lng: 33.7837488 },
          zoom: 16,
          mapId: '6391f83bd22d0376'
        })

        // marker with custom icon
        marker = new AdvancedMarkerElement({
          position: new google.maps.LatLng(-13.9600103, 33.7837488),
          map: map,
          title: 'MERA Head Office',
        })

        marker.addListener('click', () => {
          const infoWindow = new InfoWindow({
            headerContent: 'MERA Head Office',
            content: `
              <div>
                <h5>MERA Head Office</h5>
                <p><strong>Coordinates:</strong> -13.9600103, 33.7837488</p>
              </div>
            `
          });
          infoWindow.open(map, marker);
        });
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