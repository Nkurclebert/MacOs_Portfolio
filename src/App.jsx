import gsap from 'gsap';
import { Draggable } from 'gsap/all'

import { Dock, Home, NavBar, Welcome } from '#components'
import React from 'react'
import {Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos} from '#windows';


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
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Home />
    </main>
  )
}

export default App