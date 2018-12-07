// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import VuetifyDialog from "vuetify-dialog";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VueHighlightJS from "vue-highlightjs";
import VueMarkdown from "vue-markdown";

Vue.use(Vuetify);
Vue.use(VuetifyDialog);
Vue.use(VueMarkdown);

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App, VueMarkdown },
  template: "<App/>"
});
