import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import React, { use, useLayoutEffect, useRef } from 'react'

const windowWrapper = (Component, windowKey) => {
    // Higher-Order Component to wrap window components
    const Wrapped = (props) => {
        // Access window store state and actions
        const {focuseWindow, windows} = useWindowStore();

        // Get window state
        const {isOpen, zIndex} = windows[windowKey];
        
        // Ref for the window container
        const ref = useRef(null);

        // GSAP effect to handle window open animation
        useGSAP(() => {
            const el = ref.current;
            if(!el || !isOpen) return;

            el.style.display = 'block';

            // Animate window appearance
            gsap.fromTo(el, 
                {scale: 0.8, opacity: 0, y: 40}, 
                {scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out'}
            );
        },[isOpen])

        // GSAP effect to make window draggable and focus on press
        useGSAP(() => {
            const el = ref.current;
            if(!el) return;

            const [instance] = Draggable.create(el, 
                {onPress: () => focuseWindow(windowKey)}
            )
            return () => instance.kill();
        },[])

        // Update display style based on isOpen state
        useLayoutEffect(() => {
            const el = ref.current;
            if(!el) return;
            el.style.display = isOpen ? 'block' : 'none';
        },[isOpen])

        return (
            <section id={windowKey} ref={ref} style={{zIndex}} className='absolute'>
                <Component {...props}/>
            </section>
        )
    }

    // Set display name for easier debugging
    Wrapped.displayName = `windowWrapper(${Component.displayName || Component.name || 'Component'})`;

  return Wrapped;
}

export default windowWrapper