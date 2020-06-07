<template>
  <v-content
    app>
    <v-navigation-drawer
      app
      fixed
      left
      permanent
      clipped
      light
      width="360"
      class="navigation-drawer"
    >
      <template v-slot:prepend>
        <v-autocomplete
          solo
          background-color="#EFEFED"
          color="rgba(71,71,71,0,0.54)"
          label="Search people and groups"
          prepend-inner-icon="mdi-magnify"
          flat
          append-icon=""
          height="48"
          hide-details
        >
        </v-autocomplete>
      </template>
      <v-list light class="ma-n2">
        <template
          v-for="i in 5">
          <chat-item :key="i">
          </chat-item>
          <v-divider :key="'divider-' + i"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <chat-window></chat-window>
  </v-content>
</template>

<script>
import ChatItem from '../components/ChatItem'
import ChatWindow from '../components/ChatWindow'
export default {
  name: 'Chat',
  components: {
    ChatWindow,
    ChatItem
  }
}
</script>

<style scoped>

</style>
