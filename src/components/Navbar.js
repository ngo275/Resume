// @flow
import React, { Component } from 'react'
import intl from 'react-intl-universal'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Menu, { MenuItem } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'
import { Locale, Locales } from '../types'

const styles = theme => ({
  navbarContainer: {
    flex: 1,
    backgroundColor: '#DDD',
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
    float: 'right',
    width: 80,
  },
})

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      anchorEl: null,
    }
  }
  render () {
    return (
      <div className={this.props.classes.navbarContainer}>
        <Button
          aria-owns={this.state.anchorEl ? 'select-language-menu' : null}
          aria-haspopup='true'
          className={this.props.classes.button}
          onClick={this.handleLangClick}
        >
          {intl.get('languages')}
        </Button>
        <Menu
          id='select-language-menu'
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          {Object.entries(Locales).map(locale => (
            <MenuItem onClick={() => this.handleLangButton(locale[0])}>{intl.get(locale[0])}</MenuItem>
          ))}
        </Menu>
      </div>
    )
  }

  handleLangClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleLangButton = (lang: Locale) => {
    this.props.onLangChange(lang)
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  onLangChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(Navbar)