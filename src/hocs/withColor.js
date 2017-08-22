import React from 'react'
import PropTypes from 'prop-types'

const colorHOC = (ComposedComponent) => {
  const withColor = (props, context) => {
    const {
      setColor,
      getColor,
    } = context
    return (
      <ComposedComponent {...props} color={getColor()} setColor={setColor} />
    )
  }

  withColor.contextTypes = {
    getColor: PropTypes.func,
    setColor: PropTypes.func,
  }

  withColor.propTypes = {
  }

  withColor.defaultProps = {
  }
  return withColor
}

export default colorHOC
