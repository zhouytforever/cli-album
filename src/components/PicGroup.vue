<template>
<section class="pic-group">
  <div v-for="(e, i) in pics" class="pic-container" :key="i">
    <img :src="e" class="pic"/>
  </div>
</section>
</template>

<script>
export default {
  name: 'PicGroup',
  props: {
    pics:  Array
  }
}
</script>

<style scoped>
.pic-group {
  overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.pic-group::-webkit-scrollbar { 
  display: none;
}
.pic-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: .125rem dotted #f90;
  margin: .5rem .5rem;
  border-radius: .25rem;
}
img {
  max-width: 100%;
}
</style>
