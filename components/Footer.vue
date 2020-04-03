<template>
  <footer class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title is-size-5 has-text-weight-normal">星际华通科技有限公司</h1>
            <div>
              <figure class="image is-inline-block">
                <img src="/weibo.png" alt="" srcset="">
              </figure>
              <figure class="image is-inline-block">
                <img src="/qq.png" alt="" srcset="">
              </figure>
              <figure class="image is-inline-block">
                <img src="/weixin.png" alt="" srcset="">
              </figure>
            </div>
          </div>
          <div class="column info">
            <p>地址：北京市中关村左岸公社506室</p>
            <p>电话：010-00000000</p>
            <p>传真：010-00000345</p>
          </div>
          <div class="column info">
            <p>邮编：100000</p>
            <p>手机：12467836665</p>
            <p>邮箱：xstar8765@.com</p>
          </div>
        </div>
        <hr>
        <br>
        <div>COPYRIGHI(@)2020 MO)))$_6543  </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class Footer extends Vue {

}
</script>

<style scoped>
.hero {
  background: rgba(248, 248, 248, 1);
}
.info p {
  line-height: 3rem;
  color: rgba(119, 119, 119, 1);
}
.image {
  width: 24px;
  margin-left:1rem ;
}
</style>
