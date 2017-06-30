<template lang="pug">
  #slideshow
    .pre.button(@click="preSlide") &#10094
    .next.button(@click="nextSlide") &#10095
    .slides(v-for="(stream, index) in streams" :style="{ 'left': (100 * index) + '%' }" ref="slides")  
      img.preview(:src="stream.preview.large" )
      .info 
        p Hi i'm GoSu
        p my name a
    .logo 
      .dot(v-for="(stream, index) in streams" :style="{ background: `url(${stream.channel.logo}) no-repeat`, 'background-size': 'cover'}" @click="showSlides(index)" ref="dots")
</template>


<script>
import axios from 'axios';

const getStreams = 'https://api.twitch.tv/kraken/streams?limit=5&client_id=9j9fga8sofpqh8t10cig2lihlms5sh';

export default {
  data() {
    return {
      streams: [],
      slideIndex: 0,
    };
  },
  created() {
    axios.get(getStreams)
    .then(res => {
      this.streams = res.data.streams;
    })
    .catch(err => {
      console.error(err);
    });
  },
  methods: {
    showSlides(index) {
      for (let i = 0; i < this.$refs.slides.length; i++) {
        this.$refs.slides[i].style.left = `${(i - index) * 100}%`;
        this.$refs.dots[i].style.boxShadow = '';
      }
      this.slideIndex = index;
      this.$refs.dots[index].style.boxShadow = '1px 1px 5px rgb(255, 255, 255)';
    },
    nextSlide() {
      if (this.slideIndex === this.$refs.slides.length - 1) {
        this.slideIndex = 0;
      } else {
        this.slideIndex  = this.slideIndex + 1;
      }
      this.showSlides(this.slideIndex);
    },
    preSlide() {
      if (this.slideIndex === 0) {
        this.slideIndex = this.$refs.slides.length - 1;
      } else {
        this.slideIndex = this.slideIndex - 1;
      }
      this.showSlides(this.slideIndex);
    }
  }
};
</script>

<style lang="sass">
@mixin transition($transition, $time) 
  -webkit-transition: $transition $time 
  -moz-transition: $transition $time 
  -ms-transition: $transition $time 
  -o-transition: $transition $time 
  transition: $transition $time 
#slideshow
  background: rgba(0, 0, 0, 0.8)
  color: white
  position: relative
  width: 100%
  height: 400px
  margin: 0
  padding: 0
  overflow: hidden
  @media screen and (max-width: 768px)
    height: 280px
  .button
    font-size: 2em
    cursor: pointer
  .pre 
    position: absolute
    top: 40%
    left: 5px
    z-index: 2
  .next 
    position: absolute
    top: 40%
    right: 5px
    z-index: 2 
  .slides
    position: absolute
    display: inline-block
    top: 0
    left: 0
    width: 100%
    height: 100%
    margin: 0
    padding: 0
    @include transition(all, .6s)
    .preview
      width: 540px
      margin-top: 10px
      @media screen and (max-width: 768px)
        width: 100%
    .info
      display: inline-block
      @media screen and (max-width: 768px)
        display: none
  .logo
    position: relative
    top: 310px
    padding-top: 5px
    @media screen and (max-width: 768px)
      top: 235px
    .dot 
      display: inline-block
      width: 60px
      height: 60px
      margin: 10px
      @include transition(all, .6s)
      &:hover 
        box-shadow: 2px 2px 20px rgb(255, 255, 255)
      @media screen and (max-width: 768px)
        background: rgba(0, 0, 0, 0.5)
        display: inline-block
        width: 20px
        height: 20px
        border-radius: 50%
        
</style>
