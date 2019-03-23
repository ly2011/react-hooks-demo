import { useEffect, useRef } from 'react'

export default function usePrevious(value) {
  const ref = useRef()

  useEffect(
    () => {
      ref.current = value
    },
    [value]
  ) // 只有value改变后,才会重新渲染

  // 返回以前的props(属性)或state(状态)
  return ref.current
}
