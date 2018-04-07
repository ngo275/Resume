// @flow
import MyCard from '../components/MyCard'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'

export default compose(
  connect(),
  withProps({
    title: 'hobby-title',
    subTitle: 'hobby-updated-at',
    description: 'hobby-description',
    imgPath: require('../assets/ic_github.png'),
    texts: [
      'hobby-programming',

    ],
  })
)(MyCard)
