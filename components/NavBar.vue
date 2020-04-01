<template>
  <header :class="{'has-bg': isHasBg}">
    <b-navbar>
      <template v-slot:brand>
        <b-navbar-item
          tag="router-link"
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
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator'
// @ts-ignore
import { throttle } from 'throttle-debounce';

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
  isHasBg = false
  onScroll() {
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    const contentTop = document.getElementById('产品与服务')!.offsetTop
    this.isHasBg = scrollTop > (contentTop - 64)
  }
  mounted() {
    const onScroll = throttle(100, () => this.onScroll())
    window.addEventListener("scroll", onScroll);
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  max-width: 1200px;
  margin: auto;
  height: 64px;
  background-color: transparent;
}
header {
  height: 64px;
  position: fixed;
  top: 0;
  z-index: 30;
  width: 100%;
  transition: all 0.5s;
}
header.has-bg {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .navbar-item {
    color: #666;
    font-weight: 300;
  }
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
