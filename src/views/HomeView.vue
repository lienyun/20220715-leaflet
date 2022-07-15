<template>
  <div class="h-screen relative">
    <!-- flex flex-col max-h-screen -->
    <!-- 切換時間json -->
    <!-- flex justify-center items-start -->
    <!-- bg-hero-pattern bg-cover -->
    <div class="w-full bg-gray-700 px-2 pt-4 pb-4 pl-10 pr-10">
      <!-- max-w-screen-sm -->
      <div class="w-full sm:flex sm:justify-between sm:items-center">
        <h1 class="text-white text-center text-3xl">博雲科技</h1>
        <div class="flex justify-center">
          <button @click="changeTime('20220701-now.py.json'), open=false" 
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">20220701</button>
          <button @click="changeTime('20220703.json'),open=false"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-none">20220703</button>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-none">近八小時</button>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">近24小時</button>
        </div>
      </div>
    </div>
    <div class="layout-container left-20 sm:top-20 bg-white w-60 pl-5 pb-5 pr-2 rounded-lg shadow-lg shadow-neutral-400" v-if="open">
      <!-- 顯示的資料 -->
      <div class="flex flex-col items-start">
          <h5 class="text-center mt-4 mb-2 text-2xl font-bold tracking-tight text-rose-700 dark:text-white">總數：{{ counter
          }}</h5>
          <ul class="">
            <!-- sum_request_processing_time -->
            <li class="text-black"><strong>總請求的時間： </strong>
              {{ sum_req }}</li>
              <!-- sum_target_processing_time -->
            <li class="text-black"><strong>總目標處理時間： </strong>{{ sum_target }}</li>
            <!-- sum_response_processing_time -->
            <li class="text-black"><strong>總回應處理時間： </strong>{{ sum_res }}</li>
            <!-- average_request_processing_time -->
            <li class="text-black"><strong>平均請求的時間： </strong>{{ average_req }}</li>
            <!-- average_target_processing_time -->
            <li class="text-black"><strong>平均目標處理時間： </strong>{{ average_target }}</li>
            <!-- average_response_processing_time -->
            <li class="text-black"><strong>平均回應處理時間： </strong>{{ average_res }}</li>
          </ul>
      </div>
    </div>

    <!-- Map -->
    <div class="h-full z-[1]"> 
      <l-map class="map-container" id="map" ref="map" :max-zoom="18" :zoom="zoom" :center="{ lat: 25.06108073603067, lng: 121.56835445788387 }"
        @ready="onLeafletReady('20220703.json')">
        <template v-if="leafletReady">
          <l-tile-layer :url="url" />
          <marker-cluster :options="{ showCoverageOnHover: false, chunkedLoading: true }">

            <template v-for="(data,index) in datas"  :key='index' >
              <l-marker :lat-lng="[`${data.latitude}`, `${data.longitude}`]" @mouseover="showInfo(
                data.counter,
                data.sum_request_processing_time,
                data.sum_target_processing_time,
                data.sum_response_processing_time,
                data.average_response_processing_time,
                data.average_target_processing_time,
                data.average_response_processing_time,
              ),open = true" @click="showInfo(
                data.counter,
                data.sum_request_processing_time,
                data.sum_target_processing_time,
                data.sum_response_processing_time,
                data.average_response_processing_time,
                data.average_target_processing_time,
                data.average_response_processing_time,
              ),open = true" >

              </l-marker>

            </template>

          </marker-cluster>
        </template>
      </l-map>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import { LMap, LMarker, LTileLayer, LPopup } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerCluster from "../components/MarkerCluster.vue";


export default {
  name: 'HomeView',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    MarkerCluster
  },
  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 13,
      leafletReady: false,
      leafletObject: null,
      // json: '20220703.json',
      visible: false,
      datas: null,
      info: null,
      sum_req: '',
      sum_target: '',
      sum_res: '',
      average_req: '',
      average_target: '',
      average_res: '',
      open: false,
    }
  },
  mounted() {
  },
  methods: {
    async onLeafletReady(api) {
      await this.$nextTick();
      this.leafletObject = this.$refs.map.leafletObject;
      this.leafletReady = true;
      // this.json = api
      const result = await this.axios.get(api)
      // console.log(result.data)
      this.datas = result.data

    },
    async changeTime(api) {
      this.datas = []
      this.counter = ''
      this.sum_req = ''
      this.sum_target = ''
      this.sum_res = ''
      this.average_req = ''
      this.average_target = ''
      this.average_res = ''
      const result = await this.axios.get(api)
      this.datas = result.data
    },
    showInfo(counter, sum_req, sum_target, sum_res, average_req, average_target, average_res) {
      this.counter = Math.round(counter)
      this.sum_req = Math.round(sum_req*100)/100
      this.sum_target = Math.round(sum_target*100)/100
      this.sum_res = Math.round(sum_res*100)/100
      this.average_req = Math.round(average_req*100)/100
      this.average_target = Math.round(average_target*100)/100
      this.average_res = Math.round(average_res*100)/100
    }
  }
}
</script>

<style scoped>
.layout-container{
  position: absolute;
  z-index: 1000;
  /* box-shadow: 10px 5px 5px black; */
}
</style>
