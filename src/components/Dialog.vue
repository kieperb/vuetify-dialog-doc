<template>
  <div>
    <v-btn @click="showTestCard">Show card</v-btn>
    <v-btn @click="showTestCard2">Show card 2</v-btn>
    <v-btn @click="showTestCard3">Show card 3</v-btn>
    <v-btn @click="showLoginForm">Show login form</v-btn>
  </div>
</template>

<script>
import TestCard from './TestCard.vue'
import TestCard2 from './TestCard2.vue'
import TestCard3 from './TestCard3.vue'
import LoginForm from './LoginForm.vue'
export default {
  components: {
    TestCard2
  },
  methods: {
    showTestCard () {
      this.$dialog.show(TestCard)
    },
    showTestCard2 () {
      this.$dialog.show(TestCard2)
    },
    showTestCard3 () {
      this.$dialog.show(TestCard3)
    },
    showLoginForm () {
      this.$dialog.show(LoginForm)
    },
  }
}
</script>
