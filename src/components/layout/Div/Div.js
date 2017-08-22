import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Div extends PureComponent {
  render() {
    const { children } = this.props
    return (<div>
      {children}
    </div>)
  }
}

Div.propTypes = {
  children: PropTypes.node,
}

Div.defaultProps = {
  children: undefined,
}

export default Div
