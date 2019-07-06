<template>
  <div id="app">
    <Album :page="page"/>
  </div>
</template>

<script>
import Album from './components/Album.vue'

export default {
  name: 'app',
  components: {
    Album
  },
  data: function() {
    return {
      page: [{
        title: '带了精油来',
        pics: [
          'https://2019pic.9514tu.club/10/2019/07/06/15500561.jpg',
          'https://2019pic.9514tu.club/10/2019/07/06/15500693.jpg'
        ]
      }]
    }
  },
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  font-size: 16px;
}
body {
  background-color: #030303;
}
a {
  text-decoration: none;
}
a:link,a:visited,a:active {
  color: #f90;
}
</style>
