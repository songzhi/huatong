<template>
  <section
    class="hero"
    id="最新动态"
  >
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title "> 最新动态</h1>
        <h2 class="subtitle">Latest News</h2>
        <div>
          <div
            class="card is-inline-block"
            v-for="item in news"
            :key="item.title"
          >
            <div class="card-image">
              <figure class="image is-2by1">
                <img
                  :src="item.img"
                  :alt="item.title"
                >
              </figure>
            </div>
            <div class="card-content">
              <div class="title is-size-5 has-text-weight-light">
                {{item.title}}
              </div>
              <div
                class="content has-text-weight-light"
                v-html="item.content"
              >
              </div>
            </div>
          </div>
        </div>
        <b-button
          type="is-text"
          icon-right="chevron-right"
          style="text-decoration:none;"
        >
          查看更多
        </b-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class Posts extends Vue {
  news = [
    { img: '/做菜1.png', title: '做菜怎样搭配新鲜食材', content: '智能溯源收银秤供商户随时调用，能让任何年龄文化层次的商户都能便捷操作。满足了消费者对。' },
    { img: '/做菜2.png', title: '做菜怎样搭配新鲜食材', content: '智能溯源收银秤供商户随时调用，能让任何年龄文化层次的商户都能便捷操作。满足了消费者对。' },
    { img: '/做菜3.png', title: '做菜怎样搭配新鲜食材', content: '智能溯源收银秤供商户随时调用，能让任何年龄文化层次的商户都能便捷操作。满足了消费者对。' },
  ]
}
</script>

<style scoped>
.hero {
  background: rgba(248, 248, 248, 1);
}
.card {
  max-width: 384px;
  margin: 0.5rem;
  border: 2px solid transparent;
  box-shadow: none;
  background-color: transparent;
}
.card:hover .card-content {
  background-color: white;
}
.card:hover .title {
  color: #167df0;
}
</style>
