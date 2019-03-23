// useReducer : 页面内的redux
import React, { Fragment, useReducer } from 'react'

const initialState = {
  loading: false,
  count: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return {
        ...state,
        count: state.count + 1,
        loading: false
      }
    }
    case 'decrement': {
      return {
        ...state,
        count: state.count - 1,
        loading: false
      }
    }
    case 'loading': {
      return {
        ...state,
        loading: true
      }
    }
    default: {
      return state
    }
  }
}

const delay = (time = 1500) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), time)
  })
}

export default function Reducer() {
  const [{ count, loading }, dispatch] = useReducer(reducer, initialState)
  const onHandleIncrement = async () => {
    dispatch({ type: 'loading' })
    await delay(500)
    dispatch({ type: 'increment' })
  }
  const onHandleDecrement = async () => {
    dispatch({ type: 'loading' })
    await delay(500)
    dispatch({ type: 'decrement' })
  }

  return (
    <Fragment>
      <section>
        <p>Count {loading ? 'loading...' : count}</p>
        <button
          type="button"
          style={{ width: '50px', height: '24px', padding: '5px 10px', marginRight: '10px' }}
          onClick={onHandleIncrement}
        >
          +
        </button>
        <button
          type="button"
          style={{ width: '50px', height: '24px', padding: '5px 10px' }}
          onClick={onHandleDecrement}
        >
          -
        </button>
      </section>
    </Fragment>
  )
}
