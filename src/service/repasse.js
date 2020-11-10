import axios from 'axios'
const BASE_URL = 'http://localhost:3003/repasse/'

const api = axios.create({
    baseURL: BASE_URL,

})

export default api