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
    preDisabled: ({currentIndex, page}) => currentIndex === 0 || page.length === 0,
    sufDisabled: ({currentIndex, page}) => currentIndex === page.length,
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
      const { currentIndex, page, pageNum } = this.page
      if(currentIndex === page.length) {
        const {data} = await a.findOnePage(pageNum + 1)
        console.log('data', data);
        if(!data || data.length === 0) return
        this.currentIndex += 1
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
