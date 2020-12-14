<template>
  <div>
    <usercard :user="user" />
    <timeline :items="items" />
  </div>
</template>

<script>
import timeline from './Timeline.vue'
import usercard from './UserCard.vue'

export default {
  components: {
    timeline,
    usercard
  },
  props: ['user', 'items'],
  data () {
    return {}
  }

}

</script>

<style>
</style>
