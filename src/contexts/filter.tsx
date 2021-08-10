import * as React from 'react'
import { createDefinedContext } from './util'
import { Filter } from '../types'

interface IFilterContext {
  filter: Filter
  setFilter(filter: Filter): void
}

const [useFilter, FilterContext] = createDefinedContext<IFilterContext>()

interface Props {
  children: React.ReactNode
  initValue?: Filter
}

const FilterProvider = (props: Props) => {
  const [filter, setFilter] = React.useState<Filter>(props.initValue || 'all')

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {props.children}
    </FilterContext.Provider>
  )
}

export { FilterProvider as default, useFilter }
