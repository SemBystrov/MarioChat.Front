<template>

  <v-container class="ma-0 pa-0">
    <v-list-item dense class="ma-0 pt-0 pb-0">
      <v-list-item-avatar>
        <v-avatar>
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>

      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>George Sullivan</v-list-item-title>
        <v-list-item-subtitle>108 members</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-icon>
          <v-btn icon>
            <v-icon>mdi-video-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>
    <v-container>
      <!-- messages -->
    </v-container>

    <v-container fluid class="chat__controller elevation-3">
      <v-row justify="center">
        <v-col cols="1">
          <v-btn icon><v-icon>mdi-emoticon-happy-outline</v-icon></v-btn>
        </v-col>
        <v-col cols="6">
          <v-textarea solo label="message..." outlined flat auto-grow>

          </v-textarea>
        </v-col>
        <v-col cols="1">
          <v-btn icon><v-icon>mdi-paperclip</v-icon></v-btn>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
    </v-container>

  </v-container>
</template>

<script>
export default {
  name: 'ChatWindow'
}
</script>

<style scoped>
  .chat__controller {
    background-color: #F7F7F7;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
