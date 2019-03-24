import React, { useRef } from 'react'
import useScroll from './enhance/useScroll'

export default function UseScrollExample() {
  const element = useRef(null)
  const { x, y } = useScroll(element)

  return (
    <div ref={element} style={{ width: '400px', height: '400px', overflow: 'auto' }}>
      <div>x: {x}</div>
      <div style={{ width: '500px', height: '500px' }}>y: {y}</div>
    </div>
  )
}
