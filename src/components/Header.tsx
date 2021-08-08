import * as React from 'react'

const headerStyles: React.CSSProperties = {
  textAlign: 'center'
}

const Header = () => {
  return (
    <header style={headerStyles}>
      <h1>Todo List</h1>
    </header>
  )
}

export default Header
