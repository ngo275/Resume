import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { initialize, setLocale } from '../ducks/intl'
import type { Locale } from '../types'

export default compose(
  connect(
    state => ({}),
    dispatch => ({
      setLocale: async (locale: Locale) => dispatch(setLocale(locale))
    })
  ),
  withHandlers({
    onLangChange: props => event => {
      console.log(props, event)
      props.setLocale('en-US')
    }
  })
)(Navbar)
