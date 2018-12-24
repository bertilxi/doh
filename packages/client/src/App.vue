<template>
  <Layout id="app">
    <Header slot="header"/>
    <router-view/>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Layout from "@/components/Layout.vue";

@Component({
  components: {
    Header,
    Layout
  }
})
export default class App extends Vue {}
</script>