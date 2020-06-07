<template>
  <v-list-item class="search">
    <v-container>
      <v-row>
        <h2 class="search__question">Who's online?</h2>
      </v-row>
      <v-row>
        <v-autocomplete
          class="search__input"
          dark
          solo
          color="rgba(255,255,255,0.6)"
          background-color="#454545"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          append-icon="mdi-video-input-component"
          flat
        >

        </v-autocomplete>
      </v-row>
    </v-container>
  </v-list-item>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
  .search {

  }
  .search__question {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #FAD84B;
    display: block;
    margin-bottom: 16px;
  }
  .search__input {
    border-radius: 8px;
  }
</style>
