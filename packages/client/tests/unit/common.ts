import { createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VueWait from "vue-wait";

export const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
localVue.use(VueWait);

export const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => Promise.resolve({})
    },
    {
      path: "/auth",
      name: "auth",
      component: () => Promise.resolve({})
    },
    {
      path: "/random",
      name: "random",
      component: () => Promise.resolve({})
    },
    {
      path: "/season/:seasonId",
      name: "season",
      component: () => Promise.resolve({})
    },
    {
      path: "/season/:seasonId/chapter/:id/:lang",
      name: "chapter",
      component: () => Promise.resolve({})
    }
  ]
});

export const store = new Vuex.Store({
  state: {
    seasons: [],
    season: {},
    chapter: {}
  },
  actions: {
    async getSeasons(context) {},
    async getSeason(context, id) {},
    async getRandom(context) {},
    async selectChapter(context, { chapter, lang }) {}
  }
});
