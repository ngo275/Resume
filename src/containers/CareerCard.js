// @flow
import MyCard from '../components/MyCard'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'

export default compose(
  connect(),
  withProps({
    title: 'career-title',
    subTitle: 'career-updated-at',
    description: 'career-description',
    imgPath: require('../assets/ic_github.png'),
    texts: [
      'career-university-entry',
      'career-university-graduation',
      'career-gradschool-entry',
      'career-internship-candle',
      'career-internship-mercari',
      'career-gradschool-dropout',
      'career-anypay-entry',
    ],
  })
)(MyCard)
