import React, { Fragment, useState, useContext } from 'react'

// Context
import { ThemeContext, LocaleContext } from '../context'

/* 类组件 */
export class ContextClass extends React.Component {
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
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Fragment>
            <section className={`row ${theme.dark}`}>
              <span>Name</span>
              <input type="text" value={name} onChange={this.onHandleNameChange} />
            </section>
            <section className={`row ${theme.light}`}>
              <span>Age</span>
              <input type="text" value={age} onChange={this.onHandleAgeChange} />
            </section>
            <LocaleContext.Consumer>
              {({ locale }) => (
                <section className={`row ${theme.dark}`}>
                  <span>Locale</span>
                  <input type="text" value={locale.local} disabled />
                </section>
              )}
            </LocaleContext.Consumer>
          </Fragment>
        )}
      </ThemeContext.Consumer>
    )
  }
}

/* hooks组件 */
export function Context() {
  const [name, setName] = useState('ly2011')
  const [age, setAge] = useState(17)
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleAgeChange(e) {
    setAge(e.target.value)
  }

  return (
    <Fragment>
      <section className={`row ${theme.light}`}>
        <span>Name</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </section>
      <section className={`row  ${theme.dark}`}>
        <span>Age</span>
        <input type="text" value={age} onChange={handleAgeChange} />
      </section>
      <section className={`row ${theme.light}`}>
        <span>Foreign</span>
        <input type="text" value={locale.foreign} disabled />
      </section>
    </Fragment>
  )
}
