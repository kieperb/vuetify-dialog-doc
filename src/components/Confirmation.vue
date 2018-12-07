<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field label="Text" v-model="text" />
          <v-text-field label="Title" v-model="title" />
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
        <v-flex xs6> </v-flex>
        <v-btn @click="confirm">Show confirmation</v-btn>
        <v-btn @click="confirm2">With custom buttons</v-btn>
        <v-btn @click="prompt">Show prompt</v-btn>
      </v-layout>
    </v-container>
    <pre v-highlightjs>
 <code class="javascript">
  let res = await this.$dialog.{{type}}({
    text: '{{text}}',
    title: '{{title}}'
  })
  </code>
  </pre>

    <pre v-highlightjs>
 <code class="javascript">
  let res = await this.$dialog.confirm({
    text: 'Do you realy want to delete item?',
    title: 'Warning',
    actions: {
      false: 'No',
      true: {
        color: 'red',
        text: 'Yes I do',
        handle: () => {
          return new Promise(resolve => {
            setTimeout(resolve, 3000)
          })
        }
      }
    }
  }
</code>
</pre>

    <pre v-highlightjs>
<code class="javascript">
 let res = await this.$dialog.prompt({
  text: 'Please input your name',
  title: 'Title'
})
if (res) {
  this.$dialog.notify.info('Your name is ' + res)
}
</code>
</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Title",
      text: "Test confirmation",
      type: "warning"
    };
  },
  methods: {
    async prompt() {
      let res = await this.$dialog.prompt({
        text: "Please input your name",
        title: "Title"
      });
      if (res) {
        this.$dialog.notify.info("Your name is " + res);
      }
    },
    async confirm() {
      let res = await this.$dialog[this.type]({
        title: this.title,
        text: this.text
      });
      if (res === undefined) {
        this.$dialog.notify.warning("Closed without select action");
      } else {
        this.$dialog.notify.info(`Your choice is ${res}`);
      }
    },
    async confirm2() {
      let res = await this.$dialog[this.type]({
        text: "Do you realy want to delete item?",
        title: "Warning",
        actions: {
          No: "No",
          Yes: {
            color: "red",
            text: "Yes I do",
            handle: () => {
              return new Promise(resolve => {
                setTimeout(resolve, 3000);
              });
            }
          }
        }
      });
      this.$dialog.notify.info(res);
    }
  },
  computed: {
    types() {
      return {
        warning: "Warning",
        error: "Error"
        // su: 'Info'
      };
    }
  }
};
</script>
