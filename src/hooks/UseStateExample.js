import React, { Fragment, useState } from 'react'

/* 类组件 */
export class GreetingClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'ly2011',
      age: 17
    }
  }
  onHandleNameChange = e => {
    this.setState({
      name: e.target.value
    })
  }
  onHandleAgeChange = e => {
    this.setState({
      age: e.target.value
    })
  }

  render() {
    const { name, age } = this.state
    return (
      <Fragment>
        <section className="row">
          <span>Name</span>
          <input type="text" value={name} onChange={this.onHandleNameChange} />
        </section>
        <section className="row">
          <span>Age</span>
          <input type="text" value={age} onChange={this.onHandleAgeChange} />
        </section>
      </Fragment>
    )
  }
}

/* hooks组件 */
export function Greeting() {
  const [name, setName] = useState('ly2011')
  const [age, setAge] = useState(17)
  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleAgeChange(e) {
    setAge(e.target.value)
  }
  return (
    <Fragment>
      <section className="row">
        <span>Name</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </section>
      <section className="row">
        <span>Age</span>
        <input type="text" value={age} onChange={handleAgeChange} />
      </section>
    </Fragment>
  )
}
