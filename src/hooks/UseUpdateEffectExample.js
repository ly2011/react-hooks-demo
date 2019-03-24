import React, { useState, useEffect } from 'react'
import useUpdateEffect from './enhance/useUpdateEffect'

export default function UseUpdateEffectExample() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useUpdateEffect(() => {
    console.log('count: ', count)

    return () => {}
  })

  return <div>Count: {count}</div>
}
