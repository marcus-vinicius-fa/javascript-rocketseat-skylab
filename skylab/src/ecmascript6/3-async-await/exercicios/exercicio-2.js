// import axios from 'axios'

// function getUserFromGitHub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe!')
//         })
// }

async function getUserFromGitHub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)

        console.log(response.data)
    } catch (err) {
        console.log('Usuário não existe!')
    }
}

getUserFromGitHub('marcus-vinicius-fa')
getUserFromGitHub('marcus-vinicius-fa-errado')