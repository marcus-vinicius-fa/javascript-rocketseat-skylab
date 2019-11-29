var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
// '|| []' é a forma de resolver o problema de não haver um array para iterar aqui. [] é o default!
// JSON.parse() transforma de volta em array...

function renderTodos() {
  listElement.innerHTML = '';
  // tudo que está na lista (no html) recebe vazio. Não altera o array 'todos'.
  // "a propriedade Element.innerHTML define ou obtém a sintaxe HTML descrevendo os elementos descendentes."
  // inner = interior 

  for (todo of todos) { // for() específico para arrays...
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    // <li>Fazer café</li>

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#'); // '#' para não ter efeito nenhum
    var linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);
    // <a href='#'>Excluir</a>

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'delTodo(' + pos + ')');
    // <a onclick='delTodo(pos)'>Excluir</a>

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  saveToStorage();
  renderTodos();
}

buttonElement.onclick = addTodo; // sem parenteses, pois não está chamando a função

function delTodo(pos) {
  todos.splice(pos, 1); // a partir da posição (pos), remova 1 item. Ex: Se 'pos' = 1, vai remover o item de referência 1 somente. Se fosse (pos, 2) removeria o item passado em 'pos' + o próximo item.
  saveToStorage();
  renderTodos();
}

function saveToStorage() {

  localStorage.setItem('list_todos', JSON.stringify(todos));
  // localStorage é uma variável global que representa o local na memória. 
  // setItem() para setar um valor no storage.
  // local storage não grava arrays, apenas chave valor no formato string, parecido com objeto.
  // JSON têm uma etrutura parecida com objetos porém é string!
  // stringfy transforma o vetor em string, e organiza no formato json.
}