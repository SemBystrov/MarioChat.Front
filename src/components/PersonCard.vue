<template>
  <v-list-item dark>
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
        Designer @ Uber
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-icon>
      <v-btn icon link to="/chat">
        <v-icon>mdi-forum-outline</v-icon>
      </v-btn>
    </v-list-item-icon>
    <v-list-item-icon>
      <v-btn icon>
        <v-icon>mdi-video-outline</v-icon>
      </v-btn>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person_id: {
      type: Number,
      required: false
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
