import { useState, useEffect, useRef } from 'react'
import { isClient } from '../../utils/tool'

const useScroll = ref => {
  const frame = useRef(0)
  const [state, setState] = useState({
    x: isClient ? window.scrollX : 0,
    y: isClient ? window.scrollY : 0
  })

  useEffect(
    () => {
      const handler = () => {
        console.log('handler...')
        frame.current = requestAnimationFrame(() => {
          setState({
            x: ref.current.scrollLeft,
            y: ref.current.scrollTop
          })
        })
      }

      if (ref && ref.current) {
        ref.current.addEventListener('scroll', handler, {
          capture: false,
          passive: true
        })
      }

      return () => {
        if (frame.current) {
          cancelAnimationFrame(frame.current)
        }
        if (ref && ref.current) {
          ref.current.removeEventListener('scroll', handler)
        }
      }
    },
    [ref]
  )

  return state
}

export default useScroll
