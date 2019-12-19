// import axios from 'axios' // Não é necessária

// procura no node_modules primeiro

// As funções do axios retornam promises

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)

            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
}

Api.getUserInfo('marcus-vinicius-fa')
Api.getUserInfo('marcus-vinicius-fa-errado')