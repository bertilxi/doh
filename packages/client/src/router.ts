import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("./views/Auth.vue")
    },
    {
      path: "/random",
      name: "random",
      component: () => import("./views/Random.vue")
    },
    {
      path: "/season/:seasonId",
      name: "season",
      component: () => import("./views/Season.vue")
    },
    {
      path: "/season/:seasonId/chapter/:id/:lang",
      name: "chapter",
      component: () => import("./views/Chapter.vue")
    }
  ]
});
