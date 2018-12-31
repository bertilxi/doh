<template></template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class Random extends Vue {
  @Action("getRandom") public getRandom;

  public beforeMount() {
    this.getRandom();
  }
}
</script>