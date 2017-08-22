import { getWindowSize } from 'helpers/screen'
import { getValue } from 'helpers/utils'

export const getColor = (selectedColor) => ({ theme: { colors } }) => (
  getValue(() => colors[selectedColor]) || selectedColor
)

export const getFont = (selectedFont = 'span', selectedSize = 'medium') => ({ theme: { fonts } }) => (
  getValue(() => fonts[selectedFont][selectedSize][getWindowSize()])
)

export const getConfig = (selectedConfig) => ({ theme: { config } }) => (
  getValue(() => config[selectedConfig])
)

export const getStyle = (selectedPathCB) => (selectedStyleCB) => ({ theme: { themeStyle } }) => {
  const componentStyle = getValue(() => selectedPathCB(themeStyle))
  return getValue(() => selectedStyleCB(componentStyle))
}
