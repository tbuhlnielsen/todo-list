export type ColorMode = 'light' | 'dark'

export type Filter = 'all' | 'complete' | 'incomplete'

export interface Todo {
  id: string
  text: string
  complete: boolean
}

export type Action =
  | { type: 'undo' }
  | { type: 'redo' }
  | { type: 'item/add'; text: string }
  | { type: 'item/toggle'; id: string }
  | { type: 'item/delete'; id: string }
