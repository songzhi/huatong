<template>
  <main>
    <nav-bar />
    <nuxt/>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator'
import NavBar from '@/components/NavBar.vue'

@Component({
  components: {
    'nav-bar': NavBar
  }
})
export default class DefaultLayout extends Vue {

}
</script>

<style>
body, html {
  scroll-behavior: smooth;
}
.hero {
  max-width: 100vw;
}
</style>
