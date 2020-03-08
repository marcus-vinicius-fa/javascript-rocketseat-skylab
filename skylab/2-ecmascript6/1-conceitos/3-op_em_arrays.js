const vetor = [1, 3, 4, 5, 8, 9]

// usando map, reduce, filter, find

// uso do map

const newVetor = vetor.map(function (item, index) { // function(item) -> poderia ser só isso
    return item + index
})

console.log(newVetor)

// uso do reduce

const sum = vetor.reduce(function (total, next) {
    return total + next
})
// 0  // 8
// 1  // 5

// 1  // 13
// 3  // 8

// 4  // 21
// 4  // 9

// total = valor anterior
// next = proximo valor

console.log(sum)

// uso do filter

const filter = vetor.filter(function (item) {
    return item % 2 === 0
})

const testMap = vetor.map(function (item) { // Não funciona igual porque retorna todos os itens
    return item % 2 === 0
})

console.log(filter, testMap)

// uso do find
// semelhante ao filter, porem retorna somente o primeiro resultado
const find = vetor.find(function (item) {
    return item === 4
    // return item % 2 === 0
})

console.log(find)
