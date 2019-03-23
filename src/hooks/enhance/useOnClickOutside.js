import { useEffect } from 'react'

export default function(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // 如果点击ref元素或后代元素，则什么也不做
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler && handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    [ref, handler]
  )
}
