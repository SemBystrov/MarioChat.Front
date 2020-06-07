<template>
  <v-content
    app
  >
    <v-navigation-drawer
      app
      fixed
      right
      permanent
      clipped
      dark
      width="360"
      class="navigation-drawer"
    >
      <template v-slot:prepend>
        <v-list class="pb-0 mb-0">
          <search></search>
          <search-tabs></search-tabs>
        </v-list>
      </template>
      <v-list>
        <person-card
          v-for="i in 10"
          :key="i">
        </person-card>
      </v-list>
    </v-navigation-drawer>
    <world></world>
  </v-content>
</template>

<script>
import World from '../components/World'
import PersonCard from '../components/PersonCard'
import Search from '../components/Search'
import SearchTabs from '../components/SearchTabs'

export default {
  name: 'Sandbox',
  components: {
    World,
    PersonCard,
    Search,
    SearchTabs
  }
}
</script>

<style scoped>
  .navigation-drawer {
    background-color: #1E1E1E!important;
  }
</style>
