<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12> <v-text-field label="Text" v-model="text" /> </v-flex>

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
        <v-btn @click="notification">Show message</v-btn>
      </v-layout>
    </v-container>
    <pre v-highlightjs>
 <code class="javascript">
this.$dialog.message.{{type}}('{{text}}, {
  position: '{{position}}'
})
</code>
 </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Test message",
      position: "top-right",
      type: "info",
      timeout: undefined
    };
  },
  methods: {
    notification() {
      this.$dialog.message[this.type](this.text, {
        position: this.position
        // timeout: this.timeout
      });
    }
  },
  computed: {
    positions() {
      return {
        top: "Top",
        bottom: "Bottom",
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
