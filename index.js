const morph = require('morphdom')
const Todos = require('./todos')

console.log('hi')

const state = {
  todos: [{
    name: 'get milk',
    isDone: false
  }, {
    name: 'call back person',
    isDone: false
  }]
}

const initialView = Todos(state.todos, markItemDone)
document.body.appendChild(initialView)

function markItemDone (index) {
  if (state.todos[index].isDone) state.todos[index].isDone = false
  else state.todos[index].isDone = true
  const newView = Todos(state.todos, markItemDone)
  morph(initialView, newView)
}