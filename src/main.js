// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import VuetifyDialog from "vuetify-dialog";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "github-markdown-css";
import VueMarkdown from "vue-markdown";
import VuePrism from 'vue-prism'
import 'prismjs/themes/prism.css'

Vue.component('vue-markdown', VueMarkdown);
Vue.use(Vuetify);
Vue.use(VuetifyDialog);

Vue.use(VuePrism)

// Tell Vue.js to use vue-highlightjs

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
