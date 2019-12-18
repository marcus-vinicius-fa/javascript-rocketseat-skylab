// Formas de importar:

// import { soma as somaFunction, sub } from './funcoes' // para renomear
// import somaFunction from './soma' // posso dar o nome que eu quiser
// import somaFunction, { sub } from './funcoes'
import * as funcoes from './funcoes'


// a partir de um arquivo principal fazemos importações
// dos arquivos que precisamos

console.log(funcoes.default(1, 4))
console.log(funcoes.mult(10, 5))