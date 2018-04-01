import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initialize } from '../ducks/intl'

class App extends Component {

  async componentWillMount () {
    await this.props.initLocale()
  }

  render() {
    this.props.initLocale()
    const { intl } = this.props
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          hogehoge
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    intl: state.intl,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initLocale: () => dispatch(initialize()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
