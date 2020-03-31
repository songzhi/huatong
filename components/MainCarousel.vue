<template>
  <b-carousel
    :indicator="false"
    :arrow="false"
    :pause-info="false"
  >
    <b-carousel-item
      v-for="url in urls"
      :key="url"
    >
      <span class="image">
        <img :src="url">
      </span>
    </b-carousel-item>
  </b-carousel>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class MainCarousel extends Vue {
  urls = [
    '/slide1.png',
    '/slide2.png',
    '/slide3.png'
  ]
}
</script>

<style scoped>
.carousel {
  max-width: 100vw;
}
</style>
