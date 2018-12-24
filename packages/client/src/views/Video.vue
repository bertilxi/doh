<template>
  <div class="myWrapper">
    <div class="toolbar">
      <button type="button" class="button" @click="goBack">
        <i class="icono-caretLeft"/>
      </button>
      <button type="button" class="button" @click="$router.push('/')">
        <i class="icono-reset"/>
      </button>
    </div>
    <iframe id="video-iframe" :src="selectedChapter" allowfullscreen importance="high"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  public goBack() {
    window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
  }

  get selectedChapter() {
    const chapterSrc = this.$route.params.selectedChapter
      ? `https://www.simpsonizados.org/iframe3.php?id=${
          this.$route.params.selectedChapter
        }&tipo=latino`
      : "";

    return chapterSrc;
  }
}
</script>

<style>
* {
  border: 0px;
}
html,
body {
  margin: 0;
  padding: 0;
  background: #000;
}
#player1 {
  overflow: auto;
}
.myWrapper {
  display: flex;
  flex: 1 1 auto;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
}
.myWrapper iframe {
  display: flex;
  flex: 1 1 auto;
}
.toolbar {
  z-index: 50;
  position: absolute;
  top: 0;
  left: 0;
  margin: 2rem 1rem;
}
.button {
  background: transparent;
  color: #fff;
  border: 3px solid;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin: 0.5rem;
}
.button:hover {
  background: #fff;
  color: #000;
}
</style>