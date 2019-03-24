import { useRef, useEffect } from 'react'

/**
 * 当组件更新时触发(等同于 componentDidUpdate 生命周期函数)
 * @param {Function} effect
 * @param {*} deps
 */
const useUpdateEffect = (effect, deps) => {
  const isInitialMount = useRef(true)

  useEffect(
    isInitialMount.current
      ? () => {
          console.log('isInitialMount current...')
          isInitialMount.current = false
        }
      : effect,
    deps
  )
}

export default useUpdateEffect
