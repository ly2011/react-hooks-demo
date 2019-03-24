import React, { Fragment, useState } from 'react'
import useMount from './enhance/useMount'
import useUnMount from './enhance/useUnmount'
import useLifecycles from './enhance/useLifecycles'

export default function UseMountExample() {
  const [name, setName] = useState('ly2011')
  useMount(() => console.log('MOUNT'))
  useUnMount(() => console.log('UNMOUNT'))
  useLifecycles(() => console.log('useLifecycles-MOUNT'), () => console.log('useLifecycles-UNMOUNT'))
  function handleNameChange(e) {
    setName(e.target.value)
  }

  return (
    <Fragment>
      <section className="row">
        <span>Name</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </section>
    </Fragment>
  )
}
