// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import CareerCard from '../containers/CareerCard'
import SkillsCard from '../containers/SkillsCard'
import HobbyCard from '../containers/HobbyCard'
import Footer from '../containers/Footer'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 860,
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
})

class Main extends Component {

  render () {
    const { classes } = this.props

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify='center'>
            <Grid item xs={12} sm={6}>
              <Grid key='career' item xs={12} className={classes.centered}>
                <CareerCard/>
              </Grid>
              <Grid key='skills' item xs={12} className={classes.centered}>
                <SkillsCard/>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid key='hobby' item xs={12} className={classes.centered}>
                <HobbyCard/>
              </Grid>
              <Grid key='skills2' item xs={12} className={classes.centered}>
                <SkillsCard/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

Main.propsTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Main)