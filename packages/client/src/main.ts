import "@/styles/main.scss";
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import VueWait from "vue-wait";
import "@/registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(VueWait);

new Vue({
  router,
  store,
  wait: new VueWait({
    useVuex: true
  }),
  render: h => h(App)
} as any).$mount("#app");
