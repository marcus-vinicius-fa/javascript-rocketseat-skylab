// Axios

axios.get('http://api.github.com/users/marcus-vinicius-fa')
    .then(function (response) {
        console.log(response); // testar -> response.data.login
    })
    .catch(function (error) {
        console.warn(error);
    });

// Ver no console no 'live'.
// request: XMLHttpRequest {readyState: 4,...

// AXIOS é um encapsulamento por volta do XMLHttpRequest()
