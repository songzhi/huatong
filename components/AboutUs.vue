<template>
  <section
    class="hero"
    id="关于我们"
  >
    <div class="hero-body">
      <div class="container ">
        <div class="has-text-centered">
          <h1 class="title has-text-weight-light">关于我们</h1>
          <h2 class="subtitle"> About Us</h2>
        </div>
        <div>
          <h1 class="title is-size-4 has-text-info has-text-weight-light">星际华通科技有限公司</h1>
          <div class="is-inline-block left-side">
            <h2 class="subtitle is-size-6 has-text-grey has-text-weight-light"> 星际华通科技有限公司，是一家专注大数据分析、挖掘与应用的高科技企业，
              国内领先的行业数据化服务解决方案及产品服务提供商，努力构建实用型数据化社会。</h2>
            <hr>
            <br>
            <p class="has-text-grey-light has-text-weight-light">星际华通秉承数据价值理念，立足于行业痛点，依托自主知识产权的实时大数据分析引擎，独立研发以数据平台+行业应用+智能终端的综合大数据物联网产品，
              可充分满足行业多样化和企业个性化的大数据需求，为企业IT运维、业务运营、系统安全以及合规审计等多方面提供深度服务。
              公司持续稳健发展，产品已在农贸市场、矿山应用等多行业应用落地，客户涵盖北京市、云南、贵州、湖南、新疆、四川、福建、内蒙古等多省市自治区。
            </p>
            <br>
            <b-button type="is-light is-radiusless has-text-grey has-text-weight-light load-more-btn">查看更多</b-button>
          </div>
          <img
            src="/关于我们.png"
            class="is-inline"
            style="float:right;max-width:607px;"
            alt=""
            srcset=""
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class AboutUs extends Vue {

}
</script>

<style scoped>
.left-side {
  max-width: 42%;
}
.load-more-btn {
  margin-top: 1rem;
  width: 8rem;
  height: 2.5rem;
}
@media screen and (max-width: 640px) {
  .left-side {
    max-width: 100%;
  }
}
</style>
