var xhr = new XMLHttpRequest() // classe

xhr.open('GET', 'http://api.github.com/users/marcus-vinicius-fa');
// método/verbo HTTP, URL onde quero buscar
// URL = API que retorna dados de um usuário do github.

xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // 4 é a variável que significa que a resposta voltou. Não entendi isso.
        console.log(JSON.parse(xhr.responseText)); // o retorno da requisição é um JSON então deve ser feita a conversão para objeto ou vetor...
    }
}