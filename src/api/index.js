import axios from 'axios'

let base = ''

const requestSignin = (params) => {
  return axios.post(`${base}/api/login`, params)
}

export {
  requestSignin
}
