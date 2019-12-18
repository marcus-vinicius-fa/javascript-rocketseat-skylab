[home](../README.md) < eslint

# ESLint, como?

[Video explicativo](https://www.youtube.com/watch?v=TI4v4Y8yRjw) no [canal](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg/featured) da Rocketseat

### Gerenciar o projeto com npm

Com o Node e NPM instalados (usar [NVM](https://github.com/nvm-sh/nvm) para isso)

`$ node --version`
<br>
`$ npm --version`

### Iniciando um projeto com npm (node)

`$ npm init -y` 
>_**-y** serve para utilizar todas as opções padrões_

### Instalação do ESLint

`$ npm install eslint --save-dev `
>_**--save-dev** para instalar essa dependência no modo desenvolvimento (para não subir para produção)_

Ou

`$ npm install eslint -g --save-dev `
>_**-g** para instalar de forma global (para usar em todos os projetos)_

#### Uso:
`$ node_modules/.bin/eslint --init`
>_Iniciando o lint..._

`$ node_modules/.bin/eslint arquivo.ext`
> ou /dir/dir/arquivo.ext
<br>
> _Para fazer o linting num determinado arquivo_

`$ node_modules/.bin/eslint arquivo.ext --fix`
>_**--fix** serve para ajustar alguns* erros de forma automatica_

`$ node_modules/.bin/eslint /dir/dir/**`
>_ou *.js para usar o lint em muitos arquivos, ou com a mesma extensão_

#### Encurtando o caminho para a execução

Lá em **package.json > scripts**...

Adicionar:

`"lint": "eslint arquivo.ext (ou /dir/dir/arquivo.ext) (ou /dir/dir/**) --fix"`

... E basta rodar

`$ npm run lint`

#### Mais?

- Uso do Prettier (Para altomatizar a formatação do ESLint)
- Uso o EditorConfig (Para padronizar configurações entre muitos devs)

*Alguns erros só podem ser ajustados manualmente, ver a documentação do ESLint para saber quais erros podem ser resolvidos com o **--fix**.