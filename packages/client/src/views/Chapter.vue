<template>
  <div class="columns">
    <ChapterCard :chapter="chapter"/>
    <VideoCard :src="chapter.iframe"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import ChapterCard from "@/components/ChapterCard.vue";
import VideoCard from "@/components/VideoCard.vue";

@Component({
  components: {
    ChapterCard,
    VideoCard
  }
})
export default class Chapter extends Vue {
  @State("chapter") public chapter: any;
}
</script>
