<template></template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  public beforeMount() {
    this.$router.push("/season/1");
  }
}
</script>