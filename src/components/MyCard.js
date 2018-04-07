// @flow
import React, { Component } from 'react'
import intl from 'react-intl-universal'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import IconButton from 'material-ui/IconButton'
import red from 'material-ui/colors/red'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 16,
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
})

class MyCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  render () {
    const { classes, title, subTitle, description, imgPath, texts } = this.props
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label='Recipe' className={classes.avatar}>
              C
            </Avatar>
          }
          title={intl.get(title)}
          subheader={intl.get(subTitle)}
        />
        <CardMedia
          className={classes.media}
          image={imgPath}
          title={intl.get(title)}
        />
        <CardContent>
          <Typography component='p'>
            {intl.get(description)}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label='Show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph variant='body2'>
              Method:
            </Typography>
            {texts.map(t => {
              return (
                <Typography paragraph>
                  {intl.get(t)}
                </Typography>
              )
            })}
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }
}

MyCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgPath: PropTypes.object.isRequired,
  texts: PropTypes.array.isRequired,
}

export default withStyles(styles)(MyCard)
