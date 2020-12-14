<template>
  <v-layout justify-left>
    <viewuser :user="user" :items="items" />
  </v-layout>
</template>

<script>
import viewuser from '~/components/ViewUser.vue'
import api from '~api'

export default {
  components: {
    viewuser
  },
  data () {
    return {
      items: []
    }
  },
  asyncData (context) {
    const username = context.params.username
    return Promise.all([
      api.get_user_details(username),
      api.list_items(username)]).then(results => {
      return {
        user: results[0],
        items: results[1]

      }
    })
  }
}
</script>

<style>
</style>
