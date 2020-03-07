import axios from 'axios'

const api = axios.create({ // create -> serve para fazer a configuração do axios
    baseURL: 'https://api.github.com'
})

export default api