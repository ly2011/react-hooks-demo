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
import UsePreviousExample from './hooks/UsePreviousExample'
import UseOnClickOutsideExample from './hooks/UseOnClickOutsideExample'
import UseMountExample from './hooks/UseMountExample'
import UseScrollExample from './hooks/UseScrollExample'
import UseUpdateEffectExample from './hooks/UseUpdateEffectExample'

class App extends Component {
  state = {
    isVisible: true
  }
  setVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  render() {
    const { isVisible } = this.state
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
        <Section isVisible={false} heading="useLockBodyScrollExample" sectionBg="gainsboro-bg">
          <div>
            <UseLockBodyScrollExample />
          </div>
        </Section>
        <Section isVisible={false} heading="usePreviousExample" sectionBg="gainsboro-bg">
          <div>
            <UsePreviousExample />
          </div>
        </Section>
        <Section isVisible={false} heading="UseOnClickOutsideExample" sectionBg="gainsboro-bg">
          <div>
            <UseOnClickOutsideExample />
          </div>
        </Section>
        <Section isVisible={isVisible} heading="UseMountExample" sectionBg="gainsboro-bg">
          <div>
            <UseMountExample />
          </div>
        </Section>
        <Section isVisible={isVisible} heading="UseScrollExample" sectionBg="gainsboro-bg">
          <div>
            <UseScrollExample />
          </div>
        </Section>
        <Section isVisible={isVisible} heading="UseUpdateEffectExample" sectionBg="gainsboro-bg">
          <div>
            <UseUpdateEffectExample />
          </div>
        </Section>
        <button onClick={this.setVisible}>切换显隐Example</button>
      </div>
    )
  }
}

export default App
