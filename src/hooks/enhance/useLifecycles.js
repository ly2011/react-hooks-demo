import { useEffect } from 'react'

/**
 * 当组件挂载/卸载的时候，分别调用一次(等同于类组件的componentDidMount/componentWillUnmount生命周期)
 * @param {Function} mount
 * @param {Function} unmount
 */
const useLifecycles = (mount, unmount) => {
  useEffect(() => {
    if (mount) mount()
    return () => {
      if (unmount) unmount()
    }
  }, [])
}

export default useLifecycles
