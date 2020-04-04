<template>
  <section
    class="hero"
    id="产品与服务"
  >
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          产品与服务
        </h1>
        <h2 class="subtitle">
          Products and services
        </h2>
        <div>
          <div
            class="card is-inline-block"
            v-for="item in items"
            :key="item.title"
          >
            <div class="card-image">
              <figure class="image is-3by2">
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
                class="content has-text-centered	has-text-weight-light"
                v-html="item.content"
              >
              </div>
              <b-button type="is-outlined is-radiusless">查看详情</b-button>
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
  items = [
    { title: '新零售', content: '<br/>有效管理生产流程<br/>提高生产效率 降低运营成本', img: '/新零售.png' },
    { title: '新溯源', content: '<br/>有效管理生产流程<br/>提高生产效率 降低运营成本', img: '/新溯源.png' },
    { title: '新媒体', content: '<br/>有效管理生产流程<br/>提高生产效率 降低运营成本', img: '/新媒体.png' },
  ]
}
</script>

<style scoped>
.card {
  width: 92%;
  margin: .5rem;
  box-shadow: none;
}
.card button {
  color: grey;
}
.card:hover button {
  color: #2E72B0;
  border-color: #2E72B0;
}
.card .title {
  margin-bottom: 0;
}
.card:hover .title {
  color: #2E72B0;
}
.card:hover {
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.12);
}
@media screen and (min-width: 640px) {
  .card {
    width: 25rem;
  }
}
</style>
