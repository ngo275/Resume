// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles'
import { initialize, setLocale } from '../ducks/intl'
import type { Locale } from '../types'
import Navbar from '../containers/Navbar'
import ProfileHeader from '../components/ProfileHeader'
import Footer from '../containers/Footer'
import Main from '../containers/Main'
import { COLOR_PALETTE } from '../common/color'

const styles = theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const muiTheme = createMuiTheme({
  typography: {
    body1: {
      color: COLOR_PALETTE.PRIMARY_LIGHTER
    },
    body2: {
      color: COLOR_PALETTE.PRIMARY_LIGHTER
    }
  },

})

class App extends Component {

  async componentWillMount () {
    await this.props.initLocale()
  }

  render() {
    const isLoading = this.props.intl === undefined || this.props.intl.isLoading

    return (
      <div className='App'>
        <MuiThemeProvider theme={muiTheme}>
          { isLoading ? this._renderLoading() : this._renderContents() }
        </MuiThemeProvider>
      </div>
    )
  }

  _renderContents = () => {
    const { classes } = this.props
    return (
      <div className={classes.centered}>
        <Navbar />
        <ProfileHeader />
        <Main/>
        <Footer/>
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
