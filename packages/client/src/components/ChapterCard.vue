<template>
  <div class="column">
    <div class="card">
      <div class="card-header">
        <div class="card-title h5 text-primary">{{ chapter.title }}</div>
      </div>
      <div class="card-body">
        <p class="text-dark">{{chapter.description}}</p>
      </div>
      <div class="card-footer">
        <div class="btn-group btn-group-block btn-shadow">
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
  @Prop() chapter!: any;
  @Action("selectChapter") selectChapter;
}
</script>
