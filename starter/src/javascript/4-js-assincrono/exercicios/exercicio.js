var bodyElement = document.querySelector('body');
// var bodyElement = document.getElementsByTagName('body')[0];

var hElement = document.createElement('h3');
var hText = document.createTextNode('Busque os repositórios de um usuário do GitHub');
hElement.appendChild(hText);
// var brElement = document.createElement('br');

bodyElement.appendChild(hElement);
// bodyElement.appendChild(brElement);

var inputElement = document.createElement('input');
inputElement.placeholder = 'Nome do usuário';
// inputElement.setAttribute('placeholder', 'Nome do usuário'); // Pq tbm dá pra fazer assim?

var btnElement = document.createElement('button');
btnElement.setAttribute('onclick', 'getUser()');
var btnText = document.createTextNode('Buscar');
btnElement.appendChild(btnText);

bodyElement.appendChild(inputElement);
bodyElement.appendChild(btnElement);

// Sem AXIOS:

/** Teste
 * marcus-vinicius-fa
 * diego3g
 **/

// TODO:
// var divElement1 = documento.createElement('div')
// bodyElement.appendChild(divElement1)

var divElement2 = document.createElement('div')
bodyElement.appendChild(divElement2)

var xhr = new XMLHttpRequest()

var promiseUser = function () {

	return new Promise(function (resolve, reject) {
		divElement2.innerHTML = '';

		pElement = document.createElement('p')
		pText = document.createTextNode('Carregando...')
		pElement.appendChild(pText)

		divElement2.appendChild(pElement)

		var userName = inputElement.value;
		inputElement.value = '';
		xhr.open('GET', 'https://api.github.com/users/' + userName + '/repos');
		xhr.send(null);

		xhr.onreadystatechange = function () {

			if (xhr.readyState === 4) {
				pElement.innerHTML = ''
				if (xhr.status === 200) {
					response = JSON.parse(xhr.responseText);
					console.log(response)

					// divElement2.innerHTML = '';

					var hElement = document.createElement('h3')
					var hText = document.createTextNode(userName)
					var ulElement = document.createElement('ul')
					hElement.appendChild(hText)
					ulElement.appendChild(hElement)

					divElement2.appendChild(ulElement)

					for (var i = 0; i <= response.length; i++) {
						var repository = response[i]['name']
						var liElement = document.createElement('li');
						var liText = document.createTextNode(repository)
						liElement.appendChild(liText)
						ulElement.appendChild(liElement);
					}
					resolve(response)
				} else {
					reject(alert('Erro na requisição!'))
				}
			}
		}
	})
}

function getUser() {
	promiseUser()
		.then(function (response) {
			console.log(response)
		})
		.catch(function (error) {
			console.log(error)
		})
}

// Com AXIOS: