import React, { Component } from 'react'

// Styles
import './App.css'

// Helpers
import Section from './helpers/Sections'

// Examples
import { Greeting, GreetingClass } from './hooks/UseStateExample'
import { Context, ContextClass } from './hooks/UseContextExample'
import { Title, TitleClass } from './hooks/UseEffectExample'
import { CustomHook } from './hooks/UseCustomHooks'
import ReducerHook from './hooks/UseReducerExample'
import Progress from './animations/Progress'
import UseLockBodyScrollExample from './hooks/UseLockBodyScrollExample'

class App extends Component {
  render() {
    // const { isVisible } = this.state
    return (
      <div className="App">
        <Section isVisible={false} heading="useState" sectionBg="purple-bg">
          <div>
            <h1 className="heading">new way</h1>
            <Greeting />
          </div>
          <div>
            <h1 className="heading">old way</h1>
            <GreetingClass />
          </div>
        </Section>
        <Section isVisible={false} heading="useContext" sectionBg="white-bg">
          <div>
            <h1 className="heading">new way</h1>
            <Context />
          </div>
          <div>
            <h1 className="heading">old way</h1>
            <ContextClass />
          </div>
        </Section>
        <Section isVisible={false} heading="useEffect" sectionBg="gainsboro-bg">
          <div>
            <h1 className="heading">new way</h1>
            <Title />
          </div>
          <div>
            <h1 className="heading">old way</h1>
            <TitleClass />
          </div>
        </Section>
        <Section isVisible={false} heading="useCustomHooks" sectionBg="purple-bg">
          <div>
            <h1 className="heading">new way</h1>
            <CustomHook />
          </div>
        </Section>
        <Section isVisible={false} heading="useReducerHooks" sectionBg="white-bg">
          <div>
            <h1 className="heading">Count Example</h1>
            <ReducerHook />
          </div>
        </Section>
        <Section isVisible={false} heading="React Spring Progress Bar Example" sectionBg="gainsboro-bg">
          <div>
            <Progress />
          </div>
        </Section>
        <Section isVisible={true} heading="useLockBodyScrollExample" sectionBg="gainsboro-bg">
          <div>
            <UseLockBodyScrollExample />
          </div>
        </Section>
      </div>
    )
  }
}

export default App
