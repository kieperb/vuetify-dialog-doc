<template>
  <div>
    <v-container grid-list-md>
        <vue-markdown class="markdown-body">
# Toasts 
The toast component is used to display a quick message to a user. Toasts support positioning, removal delay and callbacks. It comes in 4 variations, **success**, **info**, **warning** and **error**. These have default icons assigned which can be changed and represent different actions

Toast uses [v-snackbar](https://vuetifyjs.com/en/components/snackbars) component

Props:
* **text** - _the text fo your message_
  - type: String
* options:
  - type: Object
  - properties:
    - position: one of _top-left_, _top-right_, _bottom-left_, _bootom-right_
    - timeoot: timer to hide message. Default 5000. If set to 0 - message will not closes automatically 
``` javascript
this.$dialog.message.{{type}}('{{text}}, {
  position: '{{position}}'
})
```
        </vue-markdown>
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
 <code class="javascript">
this.$dialog.message.{{type}}('{{text}}, {
  position: '{{position}}'
})
</code>
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
