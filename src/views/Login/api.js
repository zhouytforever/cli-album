import api from '@/utils/api'

export default {
  login: (params) => api.post('/login', params),
}
