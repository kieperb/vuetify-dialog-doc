<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
       <vue-markdown>
# Alert and confirmation dialogs
Props:
|  Name  |  Type  |  Description                    | Default |
|--------|--------|---------------------------------|---------|
| text   | String | the text fo your message        | -       |
| type   | String | (warning, error, info, success) | -       |
| persistent | Boolean | Is modal dialog persistent | false   |
| waitForResult * | Boolean. | wait for user reaction | true  |
 
- when true, function returns Promise, and wait for user action, e.g. **after** dialog will be closed
- when false, function will return instance of vuedl component | true |
       </vue-markdown>
        <v-flex xs12>
          <v-text-field label="Text" v-model="text" />
          <v-text-field label="Title" v-model="title" />
        </v-flex>

        <v-flex xs6>
          Type
          <v-radio-group v-model="type">
            <v-radio
              v-for="(name, key) in types"
              :key="key"
              :label="name"
              :value="key"
            ></v-radio>
          </v-radio-group>
          <v-checkbox label="Persistent" v-model="persistent" />
        </v-flex>
        <v-flex xs6> </v-flex>
        <v-btn @click="confirm">Show confirmation</v-btn>
        <v-btn @click="confirm2">With custom buttons</v-btn>
        <v-btn @click="prompt">Show prompt</v-btn>
        <v-btn @click="confirmManualClose">Manual close</v-btn>
      </v-layout>
    </v-container>
<pre class="language-js">
 <code>
  let res = await this.$dialog.{{type}}({
    text: '{{text}}',
    title: '{{title}}',
    persistent: {{persistent}}
  })
  </code>
  </pre>

<pre class="language-js">
 <code>
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

<pre class="language-js">
<code>
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
      type: "warning",
      persistent: false
    };
  },
  methods: {
    async prompt() {
      let res = await this.$dialog.prompt({
        text: "Please input your name",
        title: "Title",
        persistent: this.persistent
      });
      if (res) {
        this.$dialog.notify.info("Your name is " + res);
      }
    },
    async confirm() {
      let res = await this.$dialog[this.type]({
        title: this.title,
        text: this.text,
        persistent: this.persistent
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
        persistent: this.persistent,
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
    },
    async confirmManualClose () {
      const dialogInstance = await this.$dialog[this.type]({
        title: this.title,
        text: this.text,
        waitForResult: false
      });
      /*
        `waitForResult` -  
        dialogInstance - is instance of vuedl component. 
        you can manualy close, or do some manual actions
        If you want to get user choise, just put
        const userChice = await dialogInstance.wait()
      */
      setTimeout(() => {
        if (dialogInstance.vm) {
          dialogInstance.close()
        }
      }, 3000)
      const userChoice = await dialogInstance.wait()
      this.$dialog.notify.info(userChoice)
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
