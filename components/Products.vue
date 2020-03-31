<template>
  <section class="hero" id="产品">
    <div class="hero-body">
      <div class="container">
        <div>
          <h1 class="title has-text-info is-inline">
            产品
            <span class="subtitle has-text-weight-light">寻找您想要的产品</span>
          </h1>
          <div style="float:right;">
            <b-button
              type='is-info'
              rounded
            >全部</b-button>
            <b-button
              type='is-light'
              rounded
            >电子秤</b-button>
            <b-button
              type='is-light'
              rounded
            >电子秤</b-button>
            <b-button
              type='is-light'
              rounded
            >电子秤</b-button>
          </div>
        </div>
        <div>
          <div
            class="card is-inline-block"
            v-for="item in products"
            :key="item.title"
          >
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="item.img"
                  :alt="item.title"
                >
              </figure>
            </div>
            <div class="card-content">
              <div class="is-size-5">
                {{item.title}}
              </div>
              <div
                class="content has-text-weight-light"
                v-html="item.content"
              >
              </div>
              <b-button
                type="is-radiusless is-borderless has-text-grey"
                inverted
              >查看详情</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class Products extends Vue {
  products = [
    { img: '/称重.png', title: '智能称重与收银系统', content: '智能溯源收银秤供商户随时调用，能让任何年龄段、文化层次的商户都能便捷操作。' },
    { img: '/智能盒子.png', title: '全功能智能盒子', content: '智能溯源收银秤供商户随时调用，能让任何年龄段、文化层次的商户都能便捷操作。' },
    { img: '/智能盒子.png', title: '智能称重与收银系统', content: '智能溯源收银秤供商户随时调用，能让任何年龄段、文化层次的商户都能便捷操作。' },
    { img: '/智能盒子.png', title: '全功能智能盒子', content: '智能溯源收银秤供商户随时调用，能让任何年龄段、文化层次的商户都能便捷操作。' },
    { img: '/智能盒子.png', title: '智能称重与收银系统', content: '智能溯源收银秤供商户随时调用，能让任何年龄段、文化层次的商户都能便捷操作。' }
  ]
}
</script>

<style scoped>
.card {
  max-width: 384px;
  margin: 0.5rem;
  border: 2px solid transparent;
  box-shadow: none;
}
.card:hover .card-content {
  background-color: #167df0;
  color: white;
}
.card:hover button {
  background-color: #167df0;
  color: white !important;
}
.card:hover {
  border: 2px solid #167df0;
}
.card-image {
  padding: 64px;
}
</style>
