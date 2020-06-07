<template>
  <v-list-item light link>
    <v-list-item-avatar>
      <v-avatar>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>
        George Sullivan
      </v-list-item-title>
      <v-list-item-subtitle>
        Exactly! I also think it's quite possible!
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-list-item-action-text>15 min</v-list-item-action-text>
      <v-badge left color="#FAD84B" bordered>
        <template v-slot:badge>
          <span class="black--text">2</span>
        </template>
      </v-badge>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: 'ChatItem'
}
</script>

<style scoped>

</style>
