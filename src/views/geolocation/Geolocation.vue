<template>
  <div>
    <br>
    <div v-if="loading">
      Carregando...
    </div>
    <div v-else>
      <strong>latitude:</strong> {{ coordinates.latitude }} <br>
      <strong>longitude:</strong> {{ coordinates.longitude }} <br>
      <strong>altitude:</strong> {{ coordinates.altitude }} <br>
      <strong>accuracy:</strong> {{ coordinates.accuracy }} <br>
      <strong>altitudeAccuracy:</strong> {{ coordinates.altitudeAccuracy }} <br>
      <strong>heading:</strong> {{ coordinates.heading }} <br>
      <strong>speed:</strong> {{ coordinates.speed }}
    </div>
    <br>
    <div>
      <l-map style="height:50vh" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng"></l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { printCurrentPosition } from '@/services/geolocation'
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
export default {
  name: 'Geolocation',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      loading: true,
      coordinates: {},
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159]
    }
  },
  methods: {
    async getGeolocation(){
      const { coords } = await printCurrentPosition()
      this.coordinates = coords
      this.markerLatLng = [this.coordinates.latitude, this.coordinates.longitude]
      this.center = [this.coordinates.latitude, this.coordinates.longitude]
      this.loading = false
    }
  },
  mounted(){
    this.getGeolocation()
  }
}
</script>

<style>

</style>