<template>
  <div>
    <v-btn @click="showCardDilaog">Show card</v-btn>
    <v-btn @click="showCard2">Show card 2</v-btn>
    <v-btn @click="showLoginForm">Show login form</v-btn>
  </div>
</template>

<script>
import TestCard from './TestCard.vue'
import Card2 from './Card2.vue'
import LoginForm from './LoginForm.vue'
export default {
  methods: {
    showCardDilaog () {
      this.$dialog.show(TestCard)
    },
    showCard2 () {
      this.$dialog.show(Card2)
    },
    showLoginForm () {
      this.$dialog.show(LoginForm
      )
    },
  }
}
</script>
