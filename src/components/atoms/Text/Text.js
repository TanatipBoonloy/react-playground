import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'
import { getColor, getConfig, getStyle } from 'helpers/styles'

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

  const getStylePath = (styleConf) => styleConf.components.atoms.text

  const Element = styled[as]`
    ${inline && 'display: inline;'}
    ${bold && 'font-weight: bold;'}
    color: ${(styledComponentProps) => {
    if (as === 'a') {
      return (getColor(color)(styledComponentProps)
        || (primary ?
          getStyle(getStylePath)((style) => style.a.color.primary)(styledComponentProps)
          : getStyle(getStylePath)((style) => style.a.color.default)(styledComponentProps)
        )
      )
    }
    return getColor(color)(styledComponentProps)
  }
};
    ${(styledComponentProps) => {
    if (as === 'a') {
      const colorOnHover = hoverColor ?
        getColor(hoverColor)(styledComponentProps)
        : darken(
          getConfig('darkenOnHover')(styledComponentProps),
          (getColor(color)(styledComponentProps)
          || (primary ?
            getStyle(getStylePath)((style) => style.a.onHover.color.primary)(styledComponentProps)
            : getStyle(getStylePath)((style) => style.a.onHover.color.default)(styledComponentProps)
          )
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
