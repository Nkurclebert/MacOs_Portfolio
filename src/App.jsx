import gsap from 'gsap';
import { Draggable } from 'gsap/all'

import { Dock, NavBar, Welcome } from '#components'
import React from 'react'
import {Terminal, Safari, Resume, Finder} from '#windows';


// Register GSAP Draggable plugin
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
    </main>
  )
}

export default App