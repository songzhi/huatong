<template>
  <b-navbar
    transparent
    fixed-top
    class="has-text-white"
  >
    <template v-slot:brand>
      <b-navbar-item
        tag="router-link"
        class="has-text-white"
        :to="{ path: '/' }"
      >
        <img
          src="/logo.png"
          alt="星际华通科技公司"
        >
        星际华通科技公司
      </b-navbar-item>
    </template>
    <template v-slot:start>
      <b-navbar-item
        v-for="item in navItems"
        :key="item"
        :href="'#'+item"
      >
        {{item}}
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class NavBar extends Vue {
  navItems = [
    '产品与服务',
    '智慧农贸',
    '关于我们',
    '最新动态',
    '招商加盟',
    '联系我们'
  ]
}
</script>

<style scoped>
.navbar {
  max-width: 1200px;
  margin: auto;
  height: 64px;
  background-color: transparent;
}
.navbar-menu {
  margin-left: 64px;
}
.navbar-item {
  padding: 0.5rem 1.75rem;
  color: white;
}

@media screen and (max-width: 640px) {
  a.navbar-burger {
    color: white !important;
  }
  .navbar-item {
    color: black;
  }
}
</style>
