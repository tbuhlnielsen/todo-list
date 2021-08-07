import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Filter from './components/Filter'

const App = () => {
  const [filter, setFilter] = useState('all')

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((event.target as HTMLInputElement).value)
  }

  return (
    <Container>
      <h1>Todo</h1>
      <Filter filter={filter} onChange={handleFilterChange} />
    </Container>
  )
}

export default App
