<template lang="pug">
  #streams
    h2.title {{ gameName }}
    .stream(v-for="game of games")
      a(:href="game.channel.url" target="_blank")
        img(:src="game.preview.medium")
        h5 {{ game.channel.display_name }} - {{ game.channel.status }}
        p 觀眾：{{ game.viewers}}
</template>

<script>
import axios from 'axios';

const url = 'https://api.twitch.tv/kraken/streams/?game=';
const client_id = 'client_id=9j9fga8sofpqh8t10cig2lihlms5sh';
export default {
  data() {
    return {
      games: [],
      gameName: this.$route.params.name.split('-').join(' '),
    }
  },
  created() {
    this.getData();
  },
  watch: {
    '$route': 'getData'
  },
  methods: {
    getData() {
      const name = this.$route.params.name.split('-').join('%20');

      this.gameName = this.$route.params.name.split('-').join(' ');
      
      axios.get(url + name + '&' + client_id)
      .then(res => {
        this.games = res.data.streams;
      })
      .catch(err => {
        console.error(err);
      })
    }
  }
}
</script>


<style lang="sass">
#streams
  background: rgba(0, 0, 0, 0.8)
  color: #B9D4F1
  display: flex
  flex-wrap: wrap
  width: 100%
  .title
    width: 100%
    margin: 30px auto
  .stream
    width: 370px
    margin: 20px
    transition: box-shadow .7s
    &:hover 
      box-shadow: 2px 2px 30px gray
    img
      width: 100%
    
</style>
