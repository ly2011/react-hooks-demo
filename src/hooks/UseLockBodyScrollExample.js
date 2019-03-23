import React, { useState } from 'react'
import useLockBodyScroll from './enhance/useLockBodyScroll'

import './UseLockBodyScrollExample.css'

export default function UseLockBodyScrollExample() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <div className="bar">
        <button onClick={() => setModalOpen(true)}>Show Modal</button>
      </div>

      <Content />

      {modalOpen && (
        <Modal title="Try scrolling" content="I bet you can't! Muahahaha 😈" onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}

function Modal({ title, content, onClose }) {
  // Call hook to lock body scroll
  useLockBodyScroll()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

const Content = () => {
  const terms = ['stars', 'birds', 'puppy', 'nature', 'snow', 'cafe', 'hipster', 'startup', 'salad', 'funny']

  const images = terms.map(term => <img src={`https://source.unsplash.com/random/800x200?${term}`} alt="" />)

  return <div className="images">{images}</div>
}
