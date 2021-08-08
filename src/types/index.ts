export type Filter = 'all' | 'complete' | 'incomplete'

export interface Todo {
  id: string
  text: string
  complete: boolean
}
