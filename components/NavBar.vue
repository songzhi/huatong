<template>
  <header :class="{'has-bg': isHasBg}">
    <b-navbar>
      <template v-slot:brand>
        <b-navbar-item>
          <img
            src="/brand1.png"
            alt="星际华通科技公司"
            v-if="!isHasBg"
          >
          <img
            src="/brand2.png"
            alt="星际华通科技公司"
            v-else
          >
        </b-navbar-item>
      </template>
      <template v-slot:start>
        <b-navbar-item
          tag="router-link"
          to="/"
        >
          首页
        </b-navbar-item>
        <b-navbar-item
          v-for="item in navItems"
          tag="router-link"
          :key="item"
          :to="'/#'+item"
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
    '最新动态',
    '加盟合作',
    '关于我们',
    '联系我们'
  ]
  isHasBg = false
  onScroll() {
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    // const contentTop = document.getElementById('产品与服务')!.offsetTop
    // this.isHasBg = scrollTop > (contentTop - 64)
    this.isHasBg = scrollTop > 100
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
  height: 56px;
  background-color: transparent;
}
header {
  height: 56px;
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
    color: #333;
    font-weight: 400;
  }
  .navbar-item.nuxt-link-exact-active {
    border-bottom: 2px solid #2e72b0;
    color: #2e72b0;
  }
}
.navbar-menu {
  margin-left: 56px;
}
.navbar-item {
  padding: 0.5rem 1.75rem;
  color: white;
  border-bottom: 2px solid transparent;
  font-size: 15px;
  img {
    max-height: 56px;
  }
}

.navbar-item.nuxt-link-exact-active {
  border-bottom: 2px solid white;
  color: white;
}
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: unset;
}

@media screen and (max-width: 640px) {
  a.navbar-burger {
    color: white !important;
  }
  .navbar-item {
    color: black;
    img {
      max-height: 48px;
    }
  }
}
</style>
