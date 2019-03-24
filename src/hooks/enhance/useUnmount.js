import { useEffect } from 'react'

/**
 * 当组件卸载的时候调用一次，比useMount 多了一层函数封装(等同于类组件的 componentWillUnmount 生命周期函数)
 * @param {Function} unmount
 */
const useUnMount = unmount => {
  useEffect(
    () => () => {
      if (unmount) unmount()
    },
    []
  )
}

export default useUnMount
