// Valores padrão para parametros de função

const soma = (a = 1, b = 2) => a + b

console.log(soma(2, 3))

console.log(soma(2))  // primeiro parametro apenas // Sem valor padrão -> NaN
console.log(soma()) // Sem valor padrão -> Nan