<template>
  <section class="hero" id="联系我们">
    <div class="hero-body">
      <div class="container">
        <div class="card ">
          <h1 class="title has-text-weight-light has-text-centered"> 联系我们</h1>
          <h2 class="subtitle has-text-weight-light has-text-centered">可提交对我们的意见或建议</h2>
          <div class="inline-fields">
            <b-field class="is-inline-block inline-field">
              <b-input
                v-model.trim="name"
                placeholder="姓名"
              />
            </b-field>
            <b-field class="is-inline-block inline-field">
              <b-input
                type="email"
                v-model.trim="email"
                placeholder="邮箱"
              />
            </b-field>
            <b-field class="is-inline-block inline-field">
              <b-input
                type="phone"
                v-model.trim="phone"
                placeholder="电话"
              />
            </b-field>
          </div>
          <b-field style="margin-bottom: 2rem;">
            <b-input
              type="textarea"
              v-model.trim="content"
              placeholder="内容"
            />
          </b-field>
          <div class="has-text-centered">
            <b-button
              type="is-info"
              class="submit-btn"
              rounded
            >提交</b-button>
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
export default class ContactUs extends Vue {
  name = ''
  email = ''
  phone = ''
  content = ''
}
</script>

<style scoped>
.card {
  box-shadow: 0px 0px 66px -6px rgba(188, 188, 188, 0.3);
  border-radius: 21px;
  max-width: 1038px;
  margin: auto;
  padding: 3rem;
}
.submit-btn {
  width: 8rem;
  height: 3rem;
  margin:auto;
}
input {
  border-radius: unset !important;
}

@media screen and (min-width: 640px) {
  .inline-fields {
    display: flex;
    justify-content: space-between;
  }
  .inline-field {
    width: 32%;
  }
}
@media screen and (max-width: 640px) {
  .inline-field {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>
