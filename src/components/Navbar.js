// @flow
import React, { Component } from 'react'
import intl from 'react-intl-universal'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'
import { Locale, Locales } from '../types'
import { COLOR_PALETTE } from '../common/color'

const styles = theme => ({
  navbarContainer: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.PRIMARY,
    width: '100%',
  },
  iconButton: {
    margin: theme.spacing.unit,
    float: 'right',
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
        <IconButton variant='raised' onClick={this.handleLangClick} className={this.props.classes.iconButton}>
          <Avatar alt='languages' src={require('../assets/ic_world.png')}/>
        </IconButton>
        <Menu
          id='select-language-menu'
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          {Object.entries(Locales).map(locale => (
            <MenuItem key={locale} onClick={() => this.handleLangButton(locale[0])}>{intl.get(locale[0])}</MenuItem>
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