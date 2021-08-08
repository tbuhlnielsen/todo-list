import * as React from 'react'
import { createDefinedContext } from './util'
import { Action, Filter } from '../types'

interface IFilterContext {
  filter: Filter
  dispatchFilter: React.Dispatch<Action>
}

const [useFilter, FilterContext] = createDefinedContext<IFilterContext>()

const filterReducer = (filter: Filter, action: Action) => {
  switch (action.type) {
    case 'filter/set':
      return action.payload.filter

    default:
      return filter // ignore unrecognised
  }
}

interface Props {
  children: React.ReactNode
}

const FilterProvider = (props: Props) => {
  const [filter, dispatchFilter] = React.useReducer(filterReducer, 'all')

  return (
    <FilterContext.Provider value={{ filter, dispatchFilter }}>
      {props.children}
    </FilterContext.Provider>
  )
}

export { FilterProvider as default, filterReducer, useFilter }
