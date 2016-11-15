const h = require('hyperscript')

function Todos (listOfTodos, markItemDone) {
  return h('ul',
        {},
        listOfTodos.map((todoItem, index) => {
          return Todo(todoItem, markItemDone, index)
        })
    )
}

function Todo (todoItem, markItemDone, index) {
  const customClass = todoItem.isDone ? 'done' : 'notDone'

  return h(`li.${customClass}`,
    {
      // className: customClass,
      onclick: () => markItemDone(index)
    },
        todoItem.name)
}

module.exports = Todos