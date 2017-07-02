<template lang="pug">
  #gameList
    .preview(v-for="(game, index) in gamePreview")
      router-link(:to=" '/games/' + game.router" :key="index")
        img.logo(:src="game.logo")
      h5.name {{ game.name }}
      p Viewers: {{ game.viewers }}
</template>


<script>
import axios from 'axios';

const url = 'https://api.twitch.tv/kraken/games/top?limit=8&client_id=9j9fga8sofpqh8t10cig2lihlms5sh';
export default {
  data() {
    return {
      gamePreview: [],
    }
  },
  created() {
    axios.get(url)
    .then(res => {
      this.gamePreview = res.data.top.map(obj => {
        return {
          name: obj.game.name,
          logo: obj.game.box.medium,
          viewers: obj.viewers,
          router: obj.game.name.split(/\s/g).join('-'),
        };
      });
    })
    .catch(err => {
      console.error(err);
    })
  }
}
</script>


<style lang="sass">
#gameList
  background: #21273D
  position: relative
  display: flex
  width: 100%
  flex-flow: row wrap
  // flex-wrap: wrap
  // flex-direction: row
  .preview
    position: relative
    margin:  30px 60px
    width: 200px
    @media screen and (max-width: 768px)
      width: 140px
      margin: 15px 20px
    .logo
      width: 200px
      &:hover
        transform: scale(1.1, 1.1)
        transition: all .6s
      @media screen and (max-width: 768px)
        width: 140px
    .name 
      color: #F38181
      padding: 10px
    p 
      color: #B9D4F1
</style>
