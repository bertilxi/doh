<template>
  <div class="column col-12 chapter">
    <div class="card">
      <div class="card-header">
        <div class="card-title h5 text-primary">{{ chapter.title }}</div>
      </div>
      <div class="card-body">
        <p class="text-dark">{{chapter.description}}</p>
      </div>
      <div class="card-footer">
        <div class="btn-group btn-group-block column col-xl-12 col-6 col-ml-auto p-0">
          <button
            v-for="(lang, index) in chapter.langs"
            :key="lang.label"
            :class="{
              'btn btn-shadow': true,
              'btn-secondary': index % 2 === 1,
              'btn-primary': index % 2 === 0
            }"
            @click="selectChapter({chapter, lang})"
          >{{lang.label}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class ChapterCard extends Vue {
  @Prop() public chapter!: any;
  @Action("selectChapter") public selectChapter;
}
</script>

<style scoped>
.chapter {
  padding-bottom: 0.75rem;
}
</style>