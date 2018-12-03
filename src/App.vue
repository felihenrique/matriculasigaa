<template>
  <div id="main" data-app>
    <v-app>
      <Main />
    </v-app>    
  </div>
</template>

<script>
import Main from './components/Main'

export default {
  created() {
    this.$store.commit('load')
  },
  components: {
    Main
  }
}
</script>

<style>
  body {
    background-color: #eeeeee;
  }
  #main {
    font-family: "Roboto"
  }
</style>

