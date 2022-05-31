<template>
  <div>
    <div>
      <strong>latitude:</strong> {{ coordinates.latitude }}
      <strong>longitude:</strong> {{ coordinates.longitude }} 
      <strong>altitude:</strong> {{ coordinates.altitude }} 
      <strong>accuracy:</strong> {{ coordinates.accuracy }} 
      <strong>altitudeAccuracy:</strong> {{ coordinates.altitudeAccuracy }} 
      <strong>heading:</strong> {{ coordinates.heading }} 
      <strong>speed:</strong> {{ coordinates.speed }}
    </div>
    <div>
      <l-map style="height:100vh" :zoom="zoom" :center="center">
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
    }
  },
  mounted(){
    // setInterval(() => {
      this.getGeolocation()
    // }, 1000)
  }
}
</script>

<style>

</style>