import { getWindowSize } from 'helpers/screen'
import { getValue } from 'helpers/utils'

export const getColor = (selectedColor = 'initial') => ({ theme: { colors } }) => (
  getValue(() => colors[selectedColor]) || selectedColor
)

export const getFont = (selectedFont = 'span', selectedSize = 'medium') => ({ theme: { fonts } }) => (
  getValue(() => fonts[selectedFont][selectedSize][getWindowSize()])
)
