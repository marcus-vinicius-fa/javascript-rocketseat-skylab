[home](../README.md) < api-nodejs

# API NodeJS

Com o [git](https://git-scm.com/), [npm](https://nodejs.org/en/) e [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) instalados...

```
$ git clone https://github.com/marcus-vinicius-fa/javascript-rocketseat-skylab.git

$ cd javascript-rocketseat-skylab/skylab/nodejs/node-api

$ npm install
// Baixa e instala dependências do projeto (ver package.json)

$ sudo docker pull mongo
// Baixando imagem do mongodb

$ sudo docker run --name mongodb -p 27017:27017 -d mongo
// Criando container da imagem mongo e levantando o banco de dados

// Dentro da pasta node-api rode o script para levantar o servidor
$ npm run dev
```

Outros comandos úteis:

```
$ sudo docker start mongodb (nome do container)
// "Startar" container (após reiniciar computador, por exemplo...)

$ sudo docker stop mongodb (nome do container)
// Parar execução do container
```

Para saber mais, veja [aqui](nodejs.md)...

Feito isso abra o [Insomnia](https://insomnia.rest/) ou [Postman](https://www.getpostman.com/)...

No **Insomnia**, clique em _No Environment_ (no canto superior esquerdo) e selecione _Manage Environments_. Em _Base Environments_ adicione o seguinte objeto JSON:

```
{
  "base_url": "http://localhost:3001/api"
}
```

Voltando a tela inicial clique no "+" no canto superior esquerdo e selecione _New Request_. Adicione 5 requests, coloque os nomes que quiser, eu dei estes nomes: **index**, **show**, **create**, **update**, **destroy**. 

Configuração de cada request:

**index** -> tipo GET base_url/products (ou base_url/products?page=[página escolhida])

**show** -> tipo GET base_url/products/(id do objeto) 

**create** -> tipo POST base_url/products

Clique em _Body_ abaixo de _POST_ e selecione _JSON_. Agora informe os campos e seus valores, exemplo:

```
{
	"title":"teste-api",
	"description":"testando api node",
	"url":"localhost:3001/api/products"
}
```

**update** -> tipo PUT base_url/products/(id do objeto)

Seguindo o mesmo exemplo do **create** informe os campos e agora os seus novos valores.

**destroy** -> tipo DELETE base_url/products/(id do objeto)

*Clique em _Send_ para fazer as requisições.

**Teste cada um dos métodos... Funcionou?**
