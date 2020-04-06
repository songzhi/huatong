<template>
  <section class="hero" id="招商加盟">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-info" style="font-size:24px;">
          合作伙伴
          <span class="subtitle has-text-weight-light">与多家机构进行战略合作</span>
        </h1>
        <figure
          class="image is-inline-block"
          style="margin:1rem;width:128px;"
          v-for="item in items"
          :key="item"
        >
          <img
            :src="item"
            :alt="item"
          />
        </figure>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class Partners extends Vue {
  items = [
    '/建行.png',
    '/移动.png',
    '/北交大.png',
    '/汇元科技.png',
    '/优酷.png',
    '/工行.png',
    '/CRSC.png',
    '/电信.png',
    '/云南农垦集团.png',
    '/易宝.png',
    '/baoxingwei.png'
  ]
}
</script>
