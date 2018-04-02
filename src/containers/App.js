// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import intl from 'react-intl-universal'
import { CircularProgress } from 'material-ui/Progress'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { withStyles } from 'material-ui/styles'
import { initialize, setLocale } from '../ducks/intl'
import type { Locale } from '../types'
import Navbar from '../components/Navbar'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

class App extends Component {

  async componentWillMount () {
    await this.props.initLocale()
    // await this.props.setLocale('en-US')
  }

  render() {
    const isLoading = this.props.intl === undefined || this.props.intl.isLoading

    return (
      <div className='App'>
        <MuiThemeProvider>
          { isLoading ? this._renderLoading() : this._renderContents() }
        </MuiThemeProvider>
      </div>
    )
  }

  _renderContents = () => {
    return (
      <div>
        <Navbar />
        <p className="App-intro">
          {intl.get('en-US')}
          hogehoge
        </p>
      </div>
    )
  }

  _renderLoading = () => {
    return (
      <div className={this.props.classes.centered}>
        <CircularProgress className={this.props.classes.progress} size={50} />
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

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
