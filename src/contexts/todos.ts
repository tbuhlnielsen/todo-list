import { createDefinedContext } from './util'
import { Action, Todo } from '../types'

interface ITodosContext {
  todos: Todo[]
  dispatchTodos(action: Action): void
}

const [useTodos, TodosContext] = createDefinedContext<ITodosContext>()

export { TodosContext as default, useTodos }
