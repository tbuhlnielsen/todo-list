export type Filter = 'all' | 'complete' | 'incomplete'

export interface Todo {
  id: string
  text: string
  complete: boolean
}

export type Action =
  | { type: 'item/toggle'; payload: { id: string } }
  | { type: 'item/delete'; payload: { id: string } }
  | { type: 'filter/set'; payload: { filter: Filter } }
