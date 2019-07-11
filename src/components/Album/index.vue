<template>
  <div class="album-container">
    <header>
      <h3>{{current.title}}</h3>
    </header>
    <PicGroup :pics="current.pics" ref="picGroup"></PicGroup>
    <a class="pre" @click="before"  v-show="showPre">
      <span class="arrow-left"></span>
      <span class="title">{{pre.title}}</span>
    </a>
    <a class="suf" @click="next" v-show="showSuf">
      <span class="title">{{suf.title}}</span>
      <span class="arrow-right"></span>
    </a>
    <footer>&copy;&nbsp;闲散游客</footer>
  </div>
</template>

<script src="./_.js"></script>
<style src="./_.css"></style>
