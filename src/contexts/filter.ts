import { createDefinedContext } from './util'
import { Filter } from '../types'

interface IFilterContext {
  filter: Filter
  setFilter(filter: Filter): void
}

const [useFilter, FilterContext] = createDefinedContext<IFilterContext>()

export { FilterContext as default, useFilter }
