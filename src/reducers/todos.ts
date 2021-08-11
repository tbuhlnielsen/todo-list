import { nanoid } from 'nanoid'
import { Action, Todo } from '../types'

const todosReducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case 'item/add':
      return todos.concat({
        id: nanoid(),
        text: action.text,
        complete: false
      })

    case 'item/toggle':
      return todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })

    case 'item/delete':
      return todos.filter(todo => todo.id !== action.id)

    default:
      return todos // ignore unrecognised
  }
}

export { todosReducer }
