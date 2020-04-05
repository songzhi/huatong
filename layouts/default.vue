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


<style>
body,
html {
  scroll-behavior: smooth;
  font-size: 0.85em;
}
body * {
  transition: all 0.15s;
  transition-timing-function: ease-out;
}
.hero {
  max-width: 100vw;
}
.hero-body {
  padding: 4rem 0.5rem;
}
@media screen and (min-width: 1200px) {
  .container {
    max-width: 1100px;
  }
}
hr {
  display: block;
  height: 1px;
  min-height: 1px;
  width: 100%;
  border: 0;
  background: rgba(0, 0, 0, 0.12);
  margin: 0;
  transition: background 0.3s, opacity 0.3s;
}
div.video-js {
  margin: auto !important;
}
.video-js .vjs-big-play-button {
  left: calc(50% - 1.5em);
  top: calc(50% - 0.75em)
}
</style>

