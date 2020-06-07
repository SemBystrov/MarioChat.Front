<template>
  <v-app>
    <v-app-bar
      fixed
      app
      permanent
      dense
      dark
      class="app-bar"
      clipped-right
      clipped-left
    >
      <v-img src="@/assets/logo.png" height="30px" width="150px" contain class="ml-2 mr-6"></v-img>
      <mode-tabs></mode-tabs>
      <v-spacer></v-spacer>
      <v-btn icon color="#9F9F9F">
        <v-badge dot overlap bottom color="#00C956">
          <v-icon>mdi-microphone-outline</v-icon>
        </v-badge>
      </v-btn>

      <v-btn icon color="#9F9F9F">
        <v-badge overlap color="#FAD84B">
          <template #badge>
            <span class="black--text">9</span>
          </template>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>

      <v-btn icon>
        <v-avatar size="30"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img></v-avatar>
      </v-btn>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import ModeTabs from './components/ModeTabs'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    ModeTabs/*,
    PersonCard,
    Search,
    SearchTabs */
  }
}
</script>

<style>
  .app-bar {
    background-color: black!important;
  }
  .logo{
    height: 25px;
  }
</style>
