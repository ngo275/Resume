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
    contents: [
      {
        title: 'career-title-university-entry',
        texts: [
          'career-university-entry1',
          'career-university-entry2',
          'career-internship-candle',
        ]
      },
      {
        title: 'career-title-university-graduation',
        texts: [
          'career-university-graduation',
        ]
      },
      {
        title: 'career-title-gradschool-entry',
        texts: [
          'career-gradschool-entry',
        ]
      },
      {
        title: 'career-title-gradschool-dropout',
        texts: []
      },
      {
        title: 'career-title-anypay-entry',
        texts: [
          'career-anypay-entry1',
        ]
      },

    ]
  })
)(MyCard)
