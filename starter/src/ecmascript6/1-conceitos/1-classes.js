// alert('Teste 2')

class List { // Para trabalhar com herança
  constructor() {
    this.data = []
  }

  add(data) {
    this.data.push(data)
  }
}

class TodoList extends List {
  constructor() {
    super()
    this.ulElement = document.getElementById('list-todos')

    this.developer = 'Marcus Vinicius'
  }

  addTodo(todo) {
    this.ulElement.innerHTML = ''
    this.data.push(todo)
    console.log(this.data)
    this.renderTodo()
  }

  renderTodo() {
    for (let i in this.data) {
      let liElement = document.createElement('li')
      let liText = document.createTextNode(this.data[i])
      liElement.appendChild(liText)
      this.ulElement.appendChild(liElement)
    }
  }
}

const todoApp = new TodoList() // Instancia

console.log('Developer: ' + todoApp.developer)

document.getElementById('add-todo').onclick = function () {
  let inputElement = document.getElementById('value-todo')
  todoApp.addTodo(inputElement.value)
  inputElement.value = ''
}

// Método estático

class Matematica {
  static soma(a, b) { // Não preciso instanciar a classe
    return a + b
  }
}

console.log(Matematica.soma(1, 2))