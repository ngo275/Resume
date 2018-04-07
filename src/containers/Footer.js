// @flow
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'

export default compose(
  connect(
    state => ({}),
    dispatch => ({})
  ),
  withProps({
    sns: [
      {
        provider: 'twitter',
        url: 'https://twitter.com/NGO275'
      },
      {
        provider: 'github',
        url: 'https://github.com/ngo275'
      },
      {
        provider: 'hatena',
        url: 'http://diary.shuichi.tech'
      }
    ]
  })
)(Footer)