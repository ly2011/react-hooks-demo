import React, { Fragment, useState, useRef } from 'react'
import useOnClickOutside from './enhance/useOnClickOutside'
export default function UseOnClickOutsideExample() {
  const ref = useRef()

  const [isModalOpen, setModalOpen] = useState(false)
  useOnClickOutside(ref, () => setModalOpen(false))

  return (
    <Fragment>
      {isModalOpen ? (
        <div ref={ref}>👋 Hey, I'm a modal. Click anywhere outside of me to close.</div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </Fragment>
  )
}
