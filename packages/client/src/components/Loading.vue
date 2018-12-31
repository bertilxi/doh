<template>
  <v-wait>
    <div class="loader-container" slot="waiting">
      <div class="loader loading loading-lg"/>
    </div>
  </v-wait>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Loading extends Vue {}
</script>

<style scoped lang="scss">
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba($color: #fff, $alpha: 0.8);
  z-index: 999999;
}
.loader {
  position: fixed;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
