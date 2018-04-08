// @flow
import MyCard from '../components/MyCard'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'

export default compose(
  connect(),
  withProps({
    avatarCharacter: 'S',
    title: 'skills-title',
    subTitle: 'skills-updated-at',
    description: 'skills-description',
    imgPath: require('../assets/ic_skills.png'),
    contents: [
      {
        title: 'skills-title-programming',
        texts: [
          'skills-programming',
        ]
      },
      {
        title: 'skills-title-environments',
        texts: [
          'skills-environments',
        ]
      }
    ]
  })
)(MyCard)
