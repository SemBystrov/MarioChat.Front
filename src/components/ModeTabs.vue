<template>
  <v-tabs
    dark
  >
    <v-tabs-slider color="#FAD84B"></v-tabs-slider>
    <v-tab link to="/">
      EXPLORE
    </v-tab>
    <v-tab link to="/chat">
      CHAT
    </v-tab>
    <v-tab link to="/build_connections">
      BUILD CONNECTIONS
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'ModeTabs'
}
</script>

<style scoped>

</style>
