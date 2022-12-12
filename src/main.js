import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import FlashMessage from "@smartweb/vue-flash-message";
// Vue.use(FlashMessage);
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Popper from "popper.js";
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
