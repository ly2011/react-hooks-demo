import { useEffect } from 'react'

/**
 * 当组件挂载的时候，调用一次(等同于类组件的componentDidMount生命周期)
 * @param {Function} mount
 */
const useMount = mount => {
  useEffect(() => {
    if (mount) mount()
  }, [])
}

export default useMount
