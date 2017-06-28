<template lang="pug">
  #navbar
    ul
      li 
        router-link(to="/") Twitch(vue clone)
      li.drowdown
        .dropbtn Games
        div.dropdownContent
          router-link(to="/") League of Legends
          router-link(to="/") Dota2
      li.search
        input(type="text" placeholder="Search...")
</template>


<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="sass">
  #navbar
    background: #8983F3
    width: 100%
    height: 60px
    margin: 0
    padding: 0
    .drowdown
      position: relative
      width: 120px
      &:hover
        .dropdownContent
          display: block
      .dropbtn
        cursor: pointer
      .dropdownContent
        display: none
        position: absolute
        width: 120px
        z-index: 2
        a 
          display: block
          font-size: 14px
          &:hover
            background: #eee
    ul
      list-style-type: none
      width: 100%
      height: 100%
      margin: 0
      padding: 0
      .search 
        float: right
        input
          height: 20px
          margin-right: 30px
      li
        display: inline-block
        font-size: 25px
        line-height: 60px
        margin: 0 10px
        float: left
        a
          text-decoration: none
</style>
