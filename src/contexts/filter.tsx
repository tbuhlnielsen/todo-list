import * as React from 'react'
import createDefinedContext from './util'
import { Action, Filter } from '../types'

interface IFilterContext {
  filter: Filter
  dispatchFilter: React.Dispatch<Action>
}

export const [useFilter, FilterContext] = createDefinedContext<IFilterContext>()

const filterReducer = (filter: Filter, action: Action) => {
  switch (action.type) {
    case 'filter/set':
      return action.payload.filter

    default:
      throw new Error('unrecognised action type')
  }
}

interface Props {
  children: React.ReactNode
}

export const FilterProvider = (props: Props) => {
  const [filter, dispatchFilter] = React.useReducer(filterReducer, 'all')

  return (
    <FilterContext.Provider value={{ filter, dispatchFilter }}>
      {props.children}
    </FilterContext.Provider>
  )
}
