[home](../../README.md) < nodejs

# NodeJS

## Roteiro

- [x] o que é api e nodejs?
- [x] instalando nodejs
- [x] criando estrutura
- [x] criando primeira rota
- [x] utilizando nodemon
- [x] instalando mongodb
- [x] conectando database
- [x] criando model de produto
- [x] reestruturacao de arquivos
- [x] utilizando o insomnia
- [x] criacao de registro
- [x] crud
- [x] paginacao da lista
- [x] adicionando cors

## Testando a API

Com o [Git](https://git-scm.com/), [NPM](https://nodejs.org/en/) e [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) instalados...

1. Clone o repositório `git clone https://github.com/marcus-vinicius-fa/rocketseat-skylab-studies.git`

1. Entre na pasta `cd rocketseat-skylab-studies/skylab/nodejs/node-api`

1. Instale as dependências `npm install`

1. Baixe a imagem do MongoDB `sudo docker pull mongo`

1. Crie e suba o conteiner com a imagem do MongoDB `sudo docker run --name mongodb -p 27017:27017 -d mongo`
    - --name: nome dada para o container
    - -p: redirecionamento de portas (host:container)
    - -d: para rodar em background
    - mongo: nome da imagem usada

1. Rode o script para subir o servidor express com a api `npm run dev`

1. Caso o container com o MongoDB pare de rodar por algum motivo, inicie novamente

    - Verifique o nome do container e seu status `sudo docker ps -a`

    - Inicie o container `sudo docker start mongodb <nome-do-container>`

    - Pare o container quando quiser `sudo docker stop mongodb <nome-do-container>`

1. Abra o [Insomnia](https://insomnia.rest/) ou [Postman](https://www.getpostman.com/)

1. No Insomnia, clique em "No Environment" (no canto superior esquerdo) e selecione "Manage Environments". Em "Base Environments" adicione, em formato JSON:

    ```
    {
    "base_url": "http://localhost:3000/api"
    }
    ```

1. Na tela inicial clique no "+" no canto superior esquerdo e selecione "New Request" e adicione os requests necessários para fazer o CRUD.

1. Configure os requests

    - **index**

        - GET base_url/products
        - *ou GET base_url/products?page=\<pagina>

    - **show**

        - GET base_url/products/\<id-do-produto>

    - **create**

        - POST base_url/products

            Clique em "Body abaixo de "POST" e selecione "JSON". Informe os campos e seus valores, exemplo:

            ```
            {
                "title":"product",
                "description":"product description",
                "url":"http://..."
            }
            ```

    - **update**

        - PUT base_url/products/\<id-do-objeto>

            Siga o exemplo do "create".

    - **destroy**

        - DELETE base_url/products/\<id-do-objeto>

1. Clique em "Send" para fazer as requisições.
