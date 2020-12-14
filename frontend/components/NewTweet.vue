<template>
  <div>
    <v-btn color="info" block v-if="loggedIn" @click="gotweet()">New Tweet</v-btn>
    <textarea-dialog ref="newtweetdialog" />
  </div>
</template>

<script>
import textareaDialog from './TextareaDialog.vue'
import api from '~api'
export default {
  components: {
    textareaDialog
  },
  data () {
    return {}
  },
  computed: {
    loggedIn () {
      return this.$store.getters['auth/loggedIn']
    }
  },
  methods: {
    gotweet () {
      this.$refs.newtweetdialog.open({
        title: 'Novo tweet',
        label: 'Escreva aqui seu comentário',
        value: '',
        action: 'Enviar',
        actionFunc: value => {
          return api.tweet(value).then(tweet => {
            this.$emit('newtweet', tweet)
          })
        }
      })
    }
  }
}

</script>
<style>
</style>
