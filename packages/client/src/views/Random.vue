<template></template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class Random extends Vue {
  @Action("getRandom") getRandom;

  beforeMount() {
    this.getRandom();
  }
}
</script>