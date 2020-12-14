<template>
  <v-flex>
    <v-card
      color="#6495ED"
      dark
    >
      <v-card-title class="headline">
        {{user.username}}
      </v-card-title>
      <v-card-subtitle>{{user.last_tweet}}</v-card-subtitle>
      <v-avatar
        class="ma-5"
        size="200"
        v-icon
      >
        <v-img :src="user.avatar" />
      </v-avatar>
      <div v-if="loggedIn">
        <v-btn v-if="!user.ifollow" :loading="loading" round block color="success" dark @click="follow()">Seguir</v-btn>
        <v-btn v-if="user.ifollow" :loading="loading" round block color="error" dark @click="unfollow()">Parar de seguir</v-btn>
      </div>
    </v-card>
  </v-flex>
</template>

<script>
import api from '~api'
import Snack from '~/helpers/Snacks.js'

export default {
  props: ['user'],

  data () {
    return {
      loading: false,
      snackbar: false,
      snackmessage: '',
      snackcolor: 'success'
    }
  },
  computed: {
    loggedIn () {
      return this.$store.getters['auth/loggedIn']
    }
  },
  methods: {
    follow () {
      this.loading = true
      api.follow(this.user.username).then(() => {
        this.user.ifollow = true
        this.loading = false
        Snack.show(this.$store, {
          text: 'Você está seguindo ' + this.user.username
        })
      })
    },
    unfollow () {
      this.loading = true
      api.unfollow(this.user.username).then(() => {
        this.user.ifollow = false
        this.loading = false
        Snack.show(this.$store, {
          text: 'Você deixou de seguir ' + this.user.username,
          color: 'error'

        })
      })
    }
  }

}

</script>

<style>
</style>
