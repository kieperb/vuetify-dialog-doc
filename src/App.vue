<template>
  <div id="app">
    <v-app>
      <v-toolbar app>
        <v-toolbar-title>
          Vuetify-dialog example
        </v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid>

           <v-tabs
            color="cyan"
            dark
            slider-color="yellow"
          >
      <v-tab ripple>
          Confirmation
      </v-tab>
      <v-tab ripple>
          Notification
      </v-tab>
      <v-tab ripple>
          Toasts
      </v-tab>
      <v-tab-item>
        <Confirmation/>
      </v-tab-item>
      <v-tab-item>
        <Notification/>
      </v-tab-item>
      <v-tab-item>
        <Toast/>
      </v-tab-item>
    </v-tabs>
          
      

        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
import Toast from "./components/Toast";
import Notification from "./components/Notification";
import Confirmation from "./components/Confirmation";

import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
  name: "App",
  components: {
    Notification,
    Toast,
    Confirmation
  },
  methods: {
  }
};
</script>
<style>
code {
  /* fix vuetify code changes */
  box-shadow: none;
  background: none;
  border: none;
  color: inherit;
  font: inherit;
}
</style>
