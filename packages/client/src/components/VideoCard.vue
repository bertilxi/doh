<template>
  <div class="column">
    <div class="card">
      <div class="card-body">
        <div class="videoWrapper">
          <iframe id="video-iframe" :src="src" allowfullscreen importance="high"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class VideoCard extends Vue {
  @Prop() src!: any;
}
</script>

<style scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>