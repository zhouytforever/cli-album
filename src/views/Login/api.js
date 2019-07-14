import ax from '@/utils/api'

export default {
  login: (params) => ax.post('/login',params),
}
