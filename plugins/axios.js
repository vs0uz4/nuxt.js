import axios from 'axios'

let url = 'http://localhost:3000/api'
if (process.env.NODE_ENV === `production`) url = 'http://localhost:3000/api'

export default axios.create({
  baseURL: url
})
