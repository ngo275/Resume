// @flow
import React, { Component } from 'react'
// import intl from 'react-intl-universal'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
    width: '100%',
    height: 120,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconButton: {
    margin: theme.spacing.unit,
  },
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
                <Avatar alt='twitter' src={require(`../assets/ic_${service.provider}.png`)}/>
              </IconButton>
            )
          })}
        </div>
        <p className={classes.row}>Shuichi Nagao</p>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  sns: PropTypes.array.isRequired,
}

export default withStyles(styles)(Footer)
