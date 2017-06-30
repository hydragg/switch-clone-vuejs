<template lang="pug">
  #navbar
    ul
      li
        router-link(to="/") Twitch(vue clone)
      li.drowdown
        .dropbtn Games
        .dropdownContent
          router-link(v-for="(game, index) in games" :to="game.router" :key="index") {{ game.name }} 
      li.search
        input.form-control(type="text" placeholder="Search...")
</template>


<script>
import axios from 'axios';

const getGames = 'https://api.twitch.tv/kraken/games/top?limit=8&client_id=9j9fga8sofpqh8t10cig2lihlms5sh';

export default {
  data() {
    return {
      games: [],
    }
  },
  created() {
    axios.get(getGames)
    .then(res => {
      this.games = res.data.top.map(x => {
        return {
          name: x.game.name,
          router: x.game.name.split(/\s/g).join('-')
        };
      })
    })
    .catch(err => {
      console.error(err);
    });
  },
}
</script>

<style lang="sass">
#navbar
  background: #21273D
  width: 100%
  height: 60px
  margin: 0
  padding: 0
  .drowdown
    @media screen and (max-width: 768px) 
      display: none
    position: relative
    width: 120px
    &:hover
      .dropdownContent
        display: flex
        width: 1200px
    .dropbtn
      color: #B9D4F1
      cursor: pointer
    .dropdownContent
      display: none
      position: absolute
      width: 120px
      z-index: 2
      a 
        color: #B9D4F1
        font-size: 12px
        padding: 0 10px
        border: 1px solid rgba(0, 0, 0, 0.5)
        &:hover
          background: #21273D
  ul
    list-style-type: none
    width: 100%
    height: 100%
    margin: 0
    padding: 0
    .search 
      float: right
      margin: 5px
      padding-top: 10px
      @media screen and (max-width: 768px)
        width: 35%
    li
      display: inline-block
      font-size: 25px
      line-height: 60px
      margin: 0 10px
      float: left
      a
        text-decoration: none
</style>
