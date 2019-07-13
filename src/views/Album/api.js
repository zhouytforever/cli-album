import api from '@/utils/api'

export default {
  findOnePage: (pageNum) => api.get('album/page/'+ pageNum),
  noop :() => {}
}
