import Vue from "vue";
import Router from "vue-router";
import { getRandomChapter } from "@/service/utils";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      beforeEnter: (to, from, next) => {
        const selectedChapter = getRandomChapter();
        next({ name: "video", params: { selectedChapter } });
      },
    },
    {
      path: "/video/:selectedChapter",
      name: "video",
      component: () => import("./views/Video.vue"),
    },
  ],
});
