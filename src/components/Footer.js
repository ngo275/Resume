// @flow
import React, { Component } from 'react'
// import intl from 'react-intl-universal'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles'
import { COLOR_PALETTE } from '../common/color'

const styles = theme => ({
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTE.PRIMARY,
    width: '100%',
    height: 120,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconButton: {
    margin: theme.spacing(1),
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    color: COLOR_PALETTE.BASE,
  }
})

class Footer extends Component {

  render () {
    const { classes, sns } = this.props

    return (
      <div className={this.props.classes.container}>
        <div className={classes.row}>
          {sns.map(service => {
            return (
              <IconButton key={service.provider} className={this.props.classes.iconButton} href={service.url} target='_blank'>
                <Avatar alt='twitter' src={`../assets/ic_${service.provider}.png`}/>
              </IconButton>
            )
          })}
        </div>
        <p className={classes.name}>~ @ngo275 ~</p>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  sns: PropTypes.array.isRequired,
}

export default withStyles(styles)(Footer)
