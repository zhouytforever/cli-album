<template>
  <div class="album-container">
    <header>
      <h3>{{current.title}}</h3>
    </header>
    <PicGroup :pics="current.pics"></PicGroup>
    <a class="pre">
      <span class="arrow-left"></span>
      <span class="title">{{pre.title}}</span>
    </a>
    <a class="suf" @click="next">
      <span class="title">{{suf.title}}</span>
      <span class="arrow-right"></span>
    </a>
    <footer>&copy;&nbsp;闲散游客</footer>
  </div>
</template>

<script>
import PicGroup from '@/components/PicGroup'

export default {
  name: 'Album',
  components: { PicGroup },
  props: {
    page: Array
  },
  data: function () {
    return {
      currentIndex: 0,
      pageNum: 1
    }
  },
  computed: {
    current: ({ currentIndex, page }) => page[currentIndex],
    pre: ({ currentIndex, page }) => 
      currentIndex - 1 < 0 ? { title: '没有了' } : page[currentIndex - 1],
    suf: ({ currentIndex, page }) => 
      currentIndex === page.length - 1 ? { title: '没有了' } : page[currentIndex + 1]
  },
  methods: {
    next () {
      console.log(this.current);
    }
  },
  mounted () {
    this.$http.get('/album/page/' + this.pageNum).then((res) => {
      console.log('网络请求成功');
      console.log(res);
    }).catch(err => {
      console.log('网络请求错误');
      console.log(err);
    })
    alert('mounted')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.album-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch; 
}
/* header */
header {
  text-align: center;
  color: #ff9;
  height: 4vh;
  line-height: 4vh;
  font-size: 2vh;
}
.suf, .pre {
  width:100%;
  height: 100%;
  color: #f90;
  opacity: .8;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: fixed;
  max-width: 8rem;
  height: 2rem;
  line-height: 2rem;
  bottom: .25rem;
}
.pre {
  left: .5rem;
}
.suf {
  right: .5rem;
}
.suf:hover,.pre:hover {
  opacity: 1;
}
.suf>.title,.pre>.title {
  height: 2rem;
  line-height: 2rem;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 .5rem;
}
.arrow-right,.arrow-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1.5vh;
}
.arrow-right:after,.arrow-left:before {
  display: table;
  content: "";
  border-top: 1vh solid transparent;
  border-bottom: 1vh solid transparent;
}
.arrow-right:after {
  border-left: 1.5vh solid #f90;
}
.arrow-left:before {
  border-right: 1.5vh solid #f90;
}

/* footer */
footer {
  color: white;
  text-align:  center;
  height: 2rem;
  margin-bottom: .25rem;
  line-height: 2rem;
}
</style>
