// @flow
import MyCard from '../components/MyCard'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'

export default compose(
  connect(),
  withProps({
    avatarCharacter: 'P',
    title: 'work-title',
    subTitle: 'work-updated-at',
    description: 'work-description',
    imgPath: require('../assets/ic_paymo.jpg'),
    contents: [
      {
        title: 'work-title-paymo',
        texts: [
          'work-paymo',
        ]
      },
      {
        title: 'work-title-mimi',
        texts: [
          'work-mimi',
        ]
      },
      {
        title: 'work-title-marble',
        texts: [
          'work-marble',
        ]
      },
    ]
  })
)(MyCard)
