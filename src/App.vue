<template>
  <div id="app">
    <navbar></navbar>
    <slideshow></slideshow>
    <gameList></gameList>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import navbar from '@/components/navbar';
import slideshow from '@/components/slideshow';
import gameList from '@/components/gameList';
// const url = 'https://api.twitch.tv/kraken/streams?game=League%20of%20Legends&client_id=9j9fga8sofpqh8t10cig2lihlms5sh';

// axios.get(url)
// .then(res => {
//   console.log(res);
// });

export default {
  name: 'app',
  components: { navbar, slideshow, gameList }
};
</script>

<style lang="sass">
body
  margin: 0
  padding: 0
#app 
  font-family: 'Avenir' Helvetica Arial sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>

