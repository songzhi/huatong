<template>
  <section
    class="hero has-background-light has-text-weight-light"
    id="智慧农贸"
  >
    <img src="/智慧农贸.png" />
    <div class="hero-body">

      <div class="container">
        <div class="dots">···</div>
        <div class="main-side">
          <h1
            class="title has-text-info"
            style="font-size:20px;"
          >
            智慧农贸
          </h1>
          <h2
            class="subtitle has-text-weight-light"
            style="color:#333;"
          >
            创新实现了【智慧农贸溯源管理系统】与【智能称重收银】一体化解决方案
          </h2>
          <hr role="separator">
          <br>
          <p class="content">
            集市场管理、运营管理、溯源追溯、智能收银大数据运用于一体，硬件、软件与管理系统完美结合。
            由于采用一体化设计，解决了传统农贸市场无法实现的信息化、智能化、可追溯的管理问题；一个可视操作前台和三大追溯功能，
            让远程管理、数据传输、人机互动、智能控制、移动支付、大数据、互联通信、云端存储、人工智能、智能城市、电子定位、智能收银等功能得以实现。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class SmartAgriculture extends Vue {

}
</script>

<style lang="scss" scoped>
.dots {
  text-align: center;
  color: #2e72b0;
  font-size: 112px;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 24px;
  display: none;
}
@media screen and (min-width: 640px) {
  .container .main-side {
    margin-left: 20rem;
  }
  .dots {
    display: block;
  }
}
.subtitle,
.content {
  font-size: 15px;
}
.content {
  color: #777777;
}
</style>
