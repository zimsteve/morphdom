const h = require('hyperscript')

const Todos = (listOfTodos, markItemDone) => {
  return h('ul',
        {},
        listOfTodos.map((todoItem, index) => {
          return Todo(todoItem, markItemDone, index)
        })
    )
}

const Todo = (todoItem, markItemDone, index) => {
  const customClass = todoItem.isDone ? 'done' : 'notDone'

  return h('li',
    {
      className: customClass,
      onClick: () => markItemDone(index)
    },
        todoItem.name)
}

module.exports = Todos