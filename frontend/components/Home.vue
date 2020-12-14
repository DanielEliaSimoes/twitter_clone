<template>
  <div>
    <newtweet @newtweet="addToTimeline($event)" />
    <v-layout justify-center align-center>
      <timeline :items="items" />
    </v-layout>
  </div>
</template>

<script>
import timeline from './Timeline.vue'
import newtweet from './NewTweet.vue'

export default {
  components: {
    timeline, newtweet
  },

  props: ['items'],

  data () {
    return {}
  },
  methods: {
    addToTimeline (tweet) {
      this.items.push(tweet)
    }

  }
}
</script>

<style>
</style>
