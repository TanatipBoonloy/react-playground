import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Color from './Color'

class ColorProvider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      color: 'red',
    }
  }

  getChildContext = () => ({
    getColor: this.getColor,
    setColor: this.setColor,
  })

  getColor = () => {
    const {
      color,
    } = this.state
    return color
  }

  setColor = (color = 'initial') => {
    this.setState({ color })
  }

  render() {
    return (<div>{this.props.children}</div>)
  }
}

ColorProvider.childContextTypes = {
  getColor: PropTypes.func,
  setColor: PropTypes.func,
}

ColorProvider.propTypes = {
  children: PropTypes.any,
}

ColorProvider.defaultProps = {
  color: 'red',
  children: undefined,
}

export default ColorProvider
