<template>
  <v-layout justify-left>
    <v-list three-line>
      <template v-for="(item, index) in sortedTweets">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        />

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        />

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar" />
          </v-list-item-avatar>

          <v-list-item-content>
            <span><router-link :to="{ name: 'user', params: { username: item.username }}">
              {{item.name}}</router-link> / {{item.username}} / {{item.created_at | timeago}}</span>
            <v-list-item-text v-html="item.text" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-layout>
</template>

<script>

export default {
  props: ['items'],

  data () {
    return {}
  },
  computed: {
    sortedTweets () {
      return this.items.concat().sort((t2, t1) => new Date(t1.created_at) - new Date(t2.created_at))
    }
  }
}
</script>

<style>
</style>
