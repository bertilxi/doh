<template>
  <header class="navbar app-navbar">
    <section class="navbar-section">
      <router-link class="brand" :to="{ name: 'home' }">
        <h2>D'OH</h2>
      </router-link>
    </section>
    <section class="navbar-section">
      <div class="dropdown dropdown-right">
        <a class="btn btn-link btn-shadow dropdown-toggle" tabindex="0">
          Temporada {{ $route.params && $route.params.seasonId }}
          <i class="icon icon-caret"/>
        </a>
        <ul class="menu text-left">
          <li v-for="season in seasons" :key="season.id" class="menu-item">
            <router-link
              :to="{ name: 'season', params: { seasonId:season.seasonNumber } }"
            >Temporada {{ season.seasonNumber }}</router-link>
          </li>
        </ul>
      </div>
      <router-link
        :to="{ name: 'random' }"
        class="btn btn-action btn-link btn-shadow s-circle random"
      >
        <i class="icon icon-arrow-right"/>
      </router-link>
    </section>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { AtomSpinner } from "epic-spinners";

@Component({
  components: {
    AtomSpinner
  }
})
export default class Header extends Vue {
  @State("seasons") seasons!: any[];
  @Action("getSeasons") getSeasons;

  mounted() {
    this.getSeasons();
  }
}
</script>

<style scoped lang="scss">
.app-navbar {
  margin: 1rem;
}
.brand {
  align-items: center;
  border-radius: 0.1rem;
  display: inline-flex;
  font-size: 0.7rem;
  height: 2rem;
  padding: 0.2rem;
  width: auto;
  img {
    display: inline-block;
    height: auto;
    width: 1.6rem;
  }
  h2 {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin-bottom: 0;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
}
.random {
  margin-left: 0.5rem;
  i {
    font-size: 1.2rem;
  }
}
</style>
