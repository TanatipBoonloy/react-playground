import React from 'react'
import PropTypes from 'prop-types'

const IntlHOC = (ComposedComponent) => {
  const withIntl = (props, context) => {
    const {
      language,
      getLocale,
      getLocales,
      getMessage,
      setLocale,
    } = context
    return (
      <ComposedComponent
        language={language}
        locale={getLocale()}
        availableLocale={getLocales()}
        getMessage={getMessage}
        setLocale={setLocale}
      />
    )
  }

  withIntl.contextTypes = {
    language: PropTypes.object,
    getLocale: PropTypes.func,
    getLocales: PropTypes.func,
    getMessage: PropTypes.func,
    setLocale: PropTypes.func,
  }

  withIntl.propTypes = {
  }

  withIntl.defaultProps = {
  }

  return withIntl
}
export default IntlHOC
