import * as React from 'react'
import FilterContext from '../contexts/filter'
import { Filter } from '../types'

interface Props {
  children: React.ReactNode
}

const FilterProvider = (props: Props) => {
  const [filter, setFilter] = React.useState<Filter>('all')

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {props.children}
    </FilterContext.Provider>
  )
}

export default FilterProvider
