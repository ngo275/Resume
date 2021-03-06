// @flow
import MyCard from '../components/MyCard'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'

export default compose(
  connect(),
  withProps({
    avatarCharacter: 'C',
    title: 'career-title',
    subTitle: 'career-updated-at',
    description: 'career-description',
    imgPath: require('../assets/ic_career.png'),
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
      {
        title: 'career-title-anypay-resign',
        texts: []
      },
      {
        title: 'career-title-pandai-entry',
        texts: [
          'career-pandai-entry',
        ]
      },
      {
        title: 'career-title-pandai-resign',
        texts: []
      },
      {
        title: 'career-title-credify-entry',
        texts: [
          'career-credify-entry',
        ]
      },
    ]
  })
)(MyCard)
