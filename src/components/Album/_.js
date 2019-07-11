import PicGroup from '@/components/PicGroup'
import a from './api'

export default {
  name: 'Album',
  components: { PicGroup },
  data: function () {
    return {
      currentIndex: 0,
      pageNum: 1,
      page: []
    }
  },
  computed: {
    showPre: ({currentIndex, page}) => currentIndex>0 && page.length>0,
    showSuf: ({currentIndex, page}) => currentIndex < page.length -1,
    current: ({ currentIndex, page }) => page[currentIndex] ||  { title: 'loading 。。。'},
    pre: ({ currentIndex, page }) => {
      if(page.length === 0) {
        return { title: '没有了' }
      }
      return currentIndex - 1 < 0 ? { title: '没有了' } : page[currentIndex - 1]
    },
    suf: ({ currentIndex, page }) => {
      if(page.length === 0) {
        return { title: '没有了' }
      }
      return currentIndex === page.length - 1 ? { title: '没有了' } : page[currentIndex + 1]
    }
  },
  methods: {
    async next () {
      this.$refs.picGroup.$el.scroll(0, 0)
      const { currentIndex, page, pageNum } = this
      if(currentIndex<page.length -2){
        this.currentIndex ++
      } else {
        this.currentIndex ++
        this.pageNum ++
        const {data} = await a.findOnePage(pageNum + 1)
        if(!data || data.length === 0) return
        this.page = page.concat(data)
      }
    },
    before() {
      this.currentIndex --
    }
  },
  async mounted () {
    const { data } = await a.findOnePage(this.pageNum)
    this.page = data
  }
}
