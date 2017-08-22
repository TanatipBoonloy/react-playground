import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'
import { getValue } from 'helpers/utils'

const TextComponent = (props) => {
  const {
    as,
    size,
    color,
    hoverColor,
    primary,
    inline,
    bold,
    ...otherProps
  } = props

  const getTextStyle = (themeStyle) => getValue(() => themeStyle.components.atoms.text)

  const Element = styled[as]`
    ${inline && 'display: inline;'}
    ${bold && 'font-weight: bold;'}
    color: ${({ theme: { colors, themeStyle } }) => {
    if (as === 'a') {
      return (colors[color]
        || (primary ?
          getTextStyle(themeStyle).a.color.primary
          : getTextStyle(themeStyle).a.color.default
        )
      )
    }
    return colors[color]
  }
};
    ${({ theme: { colors, themeStyle, config: { darkenOnHover } } }) => {
    if (as === 'a') {
      const colorOnHover = hoverColor ?
        colors[hoverColor]
        : darken(
          darkenOnHover,
          (colors[color]
          || (primary ?
            getTextStyle(themeStyle).a.onHover.color.primary
            : getTextStyle(themeStyle).a.onHover.color.default)
          )
        )
      return `
        :hover {
          color: ${colorOnHover};
        }
        cursor: pointer;
      `
    }
    return ''
  }
}
    `
  return (
    <Element {...otherProps} />
  )
}

TextComponent.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span', 'a']),
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  bold: PropTypes.bool,
  primary: PropTypes.bool,
  inline: PropTypes.bool,
}

TextComponent.defaultProps = {
  as: 'span',
  size: 'medium',
  color: undefined,
  hoverColor: undefined,
  bold: false,
  primary: false,
  inline: false,
}

export default TextComponent
