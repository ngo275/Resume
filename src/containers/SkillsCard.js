// @flow
import MyCard from '../components/MyCard'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'

export default compose(
  connect(),
  withProps({
    title: 'skills-title',
    subTitle: 'skills-updated-at',
    description: 'skills-description',
    imgPath: require('../assets/ic_github.png'),
    texts: [
      'skills-programming',
      'skills-environments',
    ],
  })
)(MyCard)
