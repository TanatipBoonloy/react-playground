import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getLocalization from 'localization'
import availableLanguage from 'localization/available-language.json'
import { getValue } from 'helpers/utils'

class LocalizationProvider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      locale: this.getLocales()[0],
    }
  }

  getChildContext = () => ({
    language: availableLanguage,
    getLocale: this.getLocale,
    getLocales: this.getLocales,
    getMessage: this.getMessage,
    setLocale: this.setLocale,
  })

  getLocales = () => Object.keys(availableLanguage) || []

  getMessage = (messesgesResolver) => {
    const { locale } = this.state
    const messages = getLocalization(locale)
    return getValue(() => messesgesResolver(messages))
  }

  getLocale = () => {
    const { locale } = this.state
    return locale
  }

  setLocale = (locale) => {
    this.setState({ locale })
  }

  render() {
    const { children } = this.props
    return (<div>{children}</div>)
  }
}

LocalizationProvider.childContextTypes = {
  language: PropTypes.object,
  getLocale: PropTypes.func,
  getLocales: PropTypes.func,
  getMessage: PropTypes.func,
  setLocale: PropTypes.func,
}

LocalizationProvider.propTypes = {
  children: PropTypes.node,
}

LocalizationProvider.defaultProps = {
  children: undefined,
}

export default LocalizationProvider
