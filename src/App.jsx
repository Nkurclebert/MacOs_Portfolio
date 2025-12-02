import gsap from 'gsap';
import { Draggable } from 'gsap/all'

import { Dock, NavBar, Welcome } from '#components'
import React from 'react'
import Terminal from '#windows';

// Register GSAP Draggable plugin
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  )
}

export default App