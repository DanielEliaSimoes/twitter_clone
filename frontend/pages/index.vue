<template>
  <div>
    <v-progress-linear :indeterminate="true" v-if="!items" />
    <home :items="items" v-if="items" />
  </div>
</template>

<script>
import home from '~/components/Home.vue'
import api from '~api'

export default {
  components: {
    home
  },
  data () {
    return {}
  },

  asyncData () {
    return api.list_items().then(result => {
      return {
        items: result
      }
    })
  }
}
</script>

<style>
</style>
