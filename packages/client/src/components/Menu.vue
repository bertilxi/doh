<template>
  <div>
    <div @click="show">
      <slot name="trigger"/>
    </div>
    <div :class="{ 'app-menu modal modal-sm': true, active: active }">
      <a class="modal-overlay" aria-label="Close" @click="hide"/>
      <div v-if="active" class="modal-container p-0">
        <div class="modal-body" @mouseup="deferHide">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Menu extends Vue {
  public active = false;
  public show() {
    this.active = true;
  }
  public hide() {
    this.active = false;
  }
  public deferHide() {
    setTimeout(() => {
      this.hide();
    }, 100);
  }
}
</script>

<style lang="scss">
.app-menu {
  .menu {
    box-shadow: none;
    padding: 0;
  }
}
</style>
