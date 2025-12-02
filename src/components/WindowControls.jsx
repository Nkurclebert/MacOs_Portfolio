import useWindowStore from '#store/window'
import React from 'react'

// WindowControls component to manage window actions
const WindowControls = ({target}) => {
    const {closeWindow} = useWindowStore();

  return (
    <div id='window-controls'>
        <div className='close' onClick={() => closeWindow(target)}/>
        <div className='minimize' />
        <div className='maximize' />
    </div>
  )
}

export default WindowControls