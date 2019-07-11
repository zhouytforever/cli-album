import Axios from 'axios'

const baseURL = 'http://176.122.150.118:3000/'

const ax = Axios.create({
  baseURL,
  timeout: 3000
})

export default ax;
