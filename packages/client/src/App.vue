<template>
  <Layout id="app">
    <Loading/>
    <Header slot="header"/>
    <router-view/>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Layout from "@/components/Layout.vue";
import Loading from "@/components/Loading.vue";

@Component({
  components: {
    Header,
    Layout,
    Loading
  }
})
export default class App extends Vue {}
</script>