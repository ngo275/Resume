// @flow
import MyCard from '../components/MyCard'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'

export default compose(
  connect(),
  withProps({
    avatarCharacter: 'H',
    title: 'hobby-title',
    subTitle: 'hobby-updated-at',
    description: 'hobby-description',
    imgPath: require('../assets/ic_hobby.jpg'),
    contents: [
      {
        title: 'hobby-title-travel',
        texts: [
          'hobby-travel',
        ]
      },
      {
        title: 'hobby-title-blockchain',
        texts: [
          'hobby-blockchain',
        ]
      },
      {
        title: 'interest-title-thesedays',
        texts: [
          'interest-thesedays',
        ]
      }
    ]
  })
)(MyCard)
