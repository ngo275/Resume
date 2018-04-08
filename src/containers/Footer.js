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
        provider: 'linkedin',
        url: 'https://www.linkedin.com/in/%E4%BF%AE%E4%B8%80-%E6%B0%B8%E5%B0%BE-23920611b/'
      },
      {
        provider: 'hatena',
        url: 'http://diary.shuichi.tech'
      }
    ]
  })
)(Footer)