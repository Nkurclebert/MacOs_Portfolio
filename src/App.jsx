import { Dock, NavBar, Welcome } from '#components'
import React from 'react'

const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />
    </main>
  )
}

export default App