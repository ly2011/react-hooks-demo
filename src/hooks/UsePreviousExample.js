import React, { Fragment, useState } from 'react'

import usePrevious from './enhance/usePrevious'

export default function UsePreviousExample() {
  const [count, setCount] = useState(0)

  // 获取上一次的值
  const prevCount = usePrevious(count)

  return (
    <Fragment>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </Fragment>
  )
}
