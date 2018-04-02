import React, { Component } from 'react'
import { connect } from 'react-redux'
import intl from 'react-intl-universal'
import { initialize, setLocale } from '../ducks/intl'
import type { Locale } from '../types'

class App extends Component {

  async componentWillMount () {
    await this.props.initLocale()
    // await this.props.setLocale('en-US')
  }

  render() {
    // this.props.initLocale()
    console.log(this.props.intl)
    // const { intl } = this.props
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          {intl.get('en-US')}
          hogehoge
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    intl: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initLocale: async () => dispatch(initialize()),
    setLocale: async (locale: Locale) => dispatch(setLocale(locale))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
