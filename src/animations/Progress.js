import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 60px;
`

const Bar = styled.div`
  flex: 1;
  background: #f5f5f5;
  margin: 10px 6px 10px;
  border-radius: 4px;
  overflow: hidden;
  & div {
    height: 25px;
    background: #ff4d4f;
  }
`

function Progress() {
  const [value, setValue] = useState(0)
  const animatedBarStyle = useSpring({
    width: `${value}%`,
    from: {
      width: `${0}%`
    }
  })
  return (
    <Wrapper>
      <button variant="fab" color="secondary" onClick={() => setValue(0)}>
        {'<'}
      </button>
      <Bar>
        <animated.div style={animatedBarStyle} />
      </Bar>
      <button variant="fab" color="secondary" onClick={() => setValue(100)}>
        {'>'}
      </button>
    </Wrapper>
  )
}

export default Progress
