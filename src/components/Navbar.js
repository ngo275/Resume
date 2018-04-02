import React, { Component } from 'react'
import intl from 'react-intl-universal'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

class Navbar extends Component {
  render () {
    return (
      <div>
        <Button className={this.props.classes.button} onClick={this.handleLangButton}>
          {intl.get('languages')}
        </Button>
      </div>
    )
  }

  handleLangButton = () => {
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar)