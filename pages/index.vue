<template>
  <article class="index-page">
    <main-carousel />
    <products-and-services />
    <smart-agriculture />
    <products />
    <about-us />
    <news />
    <partners />
    <contact-us />
    <my-footer />
  </article>
</template>
<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator'

import MainCarousel from '@/components/MainCarousel.vue'
import ProductsAndServices from '@/components/ProductsAndServices.vue'
import SmartAgriculture from '@/components/SmartAgriculture.vue'
import Products from '@/components/Products.vue'
import AboutUs from '@/components/AboutUs.vue'
import News from '@/components/News.vue'
import Partners from '@/components/Partners.vue'
import ContactUs from '@/components/ContactUs.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    'main-carousel': MainCarousel,
    'products-and-services': ProductsAndServices,
    'smart-agriculture': SmartAgriculture,
    'products': Products,
    'about-us': AboutUs,
    'news': News,
    'partners': Partners,
    'contact-us': ContactUs,
    'my-footer': Footer
  }
})
export default class IndexPage extends Vue {

}
</script>


<style scoped>
.index-page {
  position: absolute;
  top: 0;
}
</style>
