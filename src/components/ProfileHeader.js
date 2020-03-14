// @flow
import React, { Component } from 'react'
import intl from 'react-intl-universal'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import { COLOR_PALETTE } from '../common/color'

const styles = theme => ({
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.PRIMARY,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    width: 120,
    height: 120,
  },
  name: {
    color: COLOR_PALETTE.BASE,
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
          <p className={classes.name}>{intl.get('name')}</p>
        </div>
      </div>
    )
  }

}

ProfileHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProfileHeader)
