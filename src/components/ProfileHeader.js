// @flow
import React, { Component } from 'react'
import intl from 'react-intl-universal'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing.unit,
    width: 120,
    height: 120,
  },
})

class ProfileHeader extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { classes } = this.props
    return (
      <div className={this.props.classes.container}>
        <Avatar alt='@ngo275' src={require('../assets/ic_me.png')} className={classes.avatar}/>
        <div>
          <p>{intl.get('name')}</p>
        </div>
      </div>
    )
  }

}

ProfileHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProfileHeader)
