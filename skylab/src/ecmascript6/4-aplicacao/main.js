// FIXME: O que está errado?

import api from './api'

class App {
    constructor() {
        this.repositories = []

        this.formElement = document.getElementById('repo-form') // .querySelector('#repo-form')
        this.inputElement = document.querySelector('input[name=repository]') // #repo-form input
        this.ulElement = document.getElementById('repo-list')

        this.registerEvent()

    }

    registerEvent() {
        // Vai registrar os eventos
        this.formElement.onsubmit = event => this.addRepository(event)

    }

    // Até aqui está ok, aparentemente.

    setLoading(loading = true) {
        if (loading === true) {
            let loadingElement = document.createElement('span')
            loadingElement.appendChild(document.createTextNode('Carregando...'))
            loadingElement.setAttribute('id', 'loading')

            this.formElement.appendChild(loadingElement)
        }
        else {
            document.getElementById('loading').remove
        }
    }

    async addRepository(event) {

        console.log('Olá')

        event.preventDefault() // Para o form não recarregar a página

        const valueInput = this.inputElement.value

        console.log('input:', valueInput)
        this.setLoading()

        try {
            if (valueInput.length === 0) {
                return console.log('Não houve input')

            } else {
                const response = await api.get(`/repos/${valueInput}`)

                const { name, description, html_url, owner: { avatar_url } /*avatar_url*/ } = response.data

                this.repositories.push({
                    name,
                    description,
                    html_url,
                    avatar_url,
                })

            }

            this.inputElement.value = ''

            this.renderRepository()
        }
        catch (err) {
            alert('O repositorio não existe!')
        }

        this.setLoading(false)
    }

    renderRepository() {

        this.ulElement.innerHTML = ''

        this.repositories.forEach(repository => { // Semelhante ao map

            let liElement = document.createElement('li')

            let imgElement = document.createElement('img')
            imgElement.setAttribute('src', repository.avatar_url)

            let strongElement = document.createElement('strong')
            strongElement.appendChild(document.createTextNode(repository.name))

            let pElement = document.createElement('p')
            pElement.appendChild(document.createTextNode(repository.description))

            let aElement = document.createElement('a')
            aElement.appendChild(document.createTextNode('Acessar'))
            aElement.setAttribute('target', '_blank')
            aElement.setAttribute('href', repository.html_url)

            let elements = [imgElement, strongElement, pElement, aElement]

            elements.forEach(element => {

                liElement.appendChild(element)

                this.ulElement.appendChild(liElement)
            })

        })

    }
}

new App() // Não preciso de uma variável para guardar este objeto.