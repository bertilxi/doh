import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { api } from "@/service/api";
import router from "@/router";
import localforage from "localforage";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: localforage
});

interface State {
  seasons: any[];
  season: any;
  chapter: any;
}

export default new Vuex.Store<State>({
  plugins: [vuexLocal.plugin],
  state: {
    seasons: [],
    season: {},
    chapter: {}
  },
  mutations: {
    setState(state: any, payload: any) {
      if (!payload) {
        return;
      }
      Object.entries(payload).forEach(([key, value]) => {
        state[key] = value;
      });
    }
  },
  actions: {
    async getSeasons(context) {
      context.dispatch("wait/start");
      const { data } = await api.get("/season");
      context.commit("setState", { seasons: data });
      context.dispatch("wait/end");
    },
    async getSeason(context, id) {
      context.dispatch("wait/start");
      const { data } = await api.get(`/season/${id}`);
      context.commit("setState", { season: data });
      context.dispatch("wait/end");
    },
    async getRandom(context) {
      context.dispatch("wait/start");
      const { data } = await api.get("/random", { cache: false } as any);
      const chapter = data;
      context.commit("setState", {
        chapter: {
          ...chapter,
          ...chapter.langs[0]
        }
      });
      router.replace(
        `/season/${chapter.seasonId}/chapter/${
          chapter.chapterNumber
        }/${chapter.langs[0].label.split(" ").join("_")}`
      );
      context.dispatch("wait/end");
    },
    async selectChapter(context, { chapter, lang }) {
      context.dispatch("wait/start");
      context.commit("setState", {
        chapter: {
          ...chapter,
          ...lang
        }
      });
      router.push(
        `/season/${chapter.seasonId}/chapter/${
          chapter.chapterNumber
        }/${lang.label.split(" ").join("_")}`
      );
      context.dispatch("wait/end");
    }
  }
});
