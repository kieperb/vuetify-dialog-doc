<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <vue-markdown>
          The notification component is used to convey important information to
          the user. Notification support positioning, removal delay and
          callbacks. It comes in 4 variations, **success**, **info**,
          **warning** and **error**. These have default icons assigned which can
          be changed and represent different actions Notification uses
          [v-alert](https://vuetifyjs.com/en/components/alerts) component
        </vue-markdown>
        <v-flex xs12>
          <v-text-field label="Text" v-model="text" />
          <v-text-field label="Timeout (0 - disable)" v-model="timeout" />
        </v-flex>

        <v-flex xs6>
          Types
          <v-radio-group v-model="type">
            <v-radio
              v-for="(name, key) in types"
              :key="key"
              :label="name"
              :value="key"
            ></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex xs6>
          Positions
          <v-radio-group v-model="position">
            <v-radio
              v-for="(name, key) in positions"
              :key="key"
              :label="name"
              :value="key"
            ></v-radio>
          </v-radio-group>
        </v-flex>
        <v-btn @click="notification">Show notification</v-btn>
      </v-layout>
    </v-container>
    <pre v-highlightjs>
    <code class="javascript">
    this.$dialog.notify.{{type}}('{{text}}, {
      position: '{{position}}',
      timeout: {{timeout}}
    })
    </code>
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Test notification",
      position: "top-right",
      type: "info",
      timeout: 5000
    };
  },
  methods: {
    notification() {
      this.$dialog.notify[this.type](this.text, {
        position: this.position,
        timeout: this.timeout
      });
    }
  },
  computed: {
    positions() {
      return {
        "top-right": "Top right",
        "top-left": "Top left",
        "bottom-right": "Bottom right",
        "bottom-left": "Bottom left"
      };
    },
    types() {
      return {
        success: "Success",
        warning: "Warning",
        error: "Error",
        info: "Info"
      };
    }
  }
};
</script>
