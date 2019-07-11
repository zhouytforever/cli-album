<template>
  <div id="app">
    <Album />
  </div>
</template>

<script>
import Album from '@/components/Album'

export default {
  name: 'app',
  components: {Album}
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
