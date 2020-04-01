<template>
  <main>
    <nav-bar />
    <nuxt />
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
body,
html {
  scroll-behavior: smooth;
}
body * {
  transition: all .15s;
  transition-timing-function: ease-out;
}
.hero {
  max-width: 100vw;
}
@media screen and (min-width: 1408px) {
  .container {
    max-width: 1200px;
  }
}
</style>

<style lang="scss">
// Import Bulma's core
@import 'bulma/sass/utilities/_all';

// Set your colors
$primary: #2e72b0;
$info: #2e72b0;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  'white': (
    $white,
    $black
  ),
  'black': (
    $black,
    $white
  ),
  'light': (
    $light,
    $light-invert
  ),
  'dark': (
    $dark,
    $dark-invert
  ),
  'primary': (
    $primary,
    $primary-invert
  ),
  'info': (
    $info,
    $info-invert
  ),
  'success': (
    $success,
    $success-invert
  ),
  'warning': (
    $warning,
    $warning-invert
  ),
  'danger': (
    $danger,
    $danger-invert
  ),
  'twitter': (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import 'bulma';
@import 'buefy/src/scss/buefy';
</style>
