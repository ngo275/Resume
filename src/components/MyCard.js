// @flow
import React, { Component } from 'react'
import intl from 'react-intl-universal'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { COLOR_PALETTE } from '../common/color'
// import type { CardContentType } from '../types'

const styles = theme => ({
  card: {
    maxWidth: 420,
    margin: 16,
    whiteSpace: 'pre-line'
  },
  header: {
    // backgroundColor: COLOR_PALETTE.PRIMARY_LIGHTER,
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
    backgroundColor: COLOR_PALETTE.SECONDARY_DARKER,
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
    const { classes, avatarCharacter, title, subTitle, description, imgPath, contents } = this.props
    return (
      <Card className={classes.card} raised>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar aria-label='Recipe' className={classes.avatar}>
              {avatarCharacter}
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
            {contents.map((content, index) => {
              return (
                <div key={index}>
                  {content.title ?
                    <Typography key={index} variant='body2'>
                      ■ {intl.get(content.title)}
                    </Typography>
                    : null
                  }
                  {content.texts.map((t, index) => {
                    return (
                      <Typography key={index} paragraph>
                        {intl.get(t)}
                      </Typography>
                    )
                  })}
                </div>
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
  avatarCharacter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgPath: PropTypes.any.isRequired,
  contents: PropTypes.array.isRequired,
}

export default withStyles(styles)(MyCard)
