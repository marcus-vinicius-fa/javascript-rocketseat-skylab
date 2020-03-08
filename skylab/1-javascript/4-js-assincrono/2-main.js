// Promisses

var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://api.github.com/users/marcus-vinicius-fa');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição!');
                }
            }
        }
    });
}

// minhaPromise();

// resultado = minhaPromise();
// console.log(resultado);
// Executou o console.log antes de ter o resultado da promise pois é assíncrono -> Promise {<pending>}
// A Promise não está finalizada!

minhaPromise()
    .then(function (response) { // .then é executado quando chamar o resolve na promise
        // código que dependeria da requisição feita deveria vir aqui dentro!
        console.log(response);
    })
    .catch(function (error) { // .catch é chamado pelo reject da promise
        console.warn(error); // console.warn serve para avisa sobre o erro.
    });
// errar a URL para ver erro.
