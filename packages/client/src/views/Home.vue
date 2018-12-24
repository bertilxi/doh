<template></template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  beforeMount() {
    this.$router.push("/season/1");
  }
}
</script>