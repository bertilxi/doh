<template>
  <div>
    <div class="column">
      <h1>Temporada {{ season.seasonNumber }}</h1>
    </div>
    <ChapterCard v-for="chapter in season.chapters" :key="chapter.id" :chapter="chapter"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import ChapterCard from "@/components/ChapterCard.vue";

@Component({
  components: {
    ChapterCard
  }
})
export default class Season extends Vue {
  @State("season") public season: any;
  @Action("getSeason") public getSeason;
  @Action("selectChapter") public selectChapter;

  @Watch("$route")
  public onRouteChange(val: any, oldVal: any) {
    const id = val.params.seasonId;
    this.getSeason(id);
  }

  public beforeMount() {
    const id = this.$route.params.seasonId;
    if (!id) {
      this.$router.replace({ name: "home" });
    }
    this.getSeason(id);
  }
}
</script>