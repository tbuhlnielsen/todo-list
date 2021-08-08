import { Action, Filter } from '../types'

const filterReducer = (filter: Filter, action: Action) => {
  switch (action.type) {
    case 'filter/set':
      return action.payload.filter

    default:
      return filter // ignore unrecognised
  }
}

export { filterReducer }
