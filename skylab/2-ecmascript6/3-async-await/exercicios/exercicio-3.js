// class GitHub {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//             .then(response => {
//                 console.log(response.data)
//             })
//             .catch(err => console.log('Repositório não existe'))
//     }
// }

class GitHub {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)

            console.log(response.data)
        }
        catch (err) {
            console.log('Repositório não existe')
        }


    }
}

GitHub.getRepositories('marcus-vinicius-fa/javascript-rocketseat-skylab')
GitHub.getRepositories('marcus-vinicius-fa/javascript-rocketseat')