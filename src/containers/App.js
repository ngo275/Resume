import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initialize } from '../ducks/intl'

class App extends Component {

  async componentWillMount () {
    // console.log(this.props)
    await this.props.initLocale()
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
