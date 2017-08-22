import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import getStore from './app-store'
import Routes from './Route'
import ColorProvider from './providers/ColorProvider'
import LocalizationProvider from './providers/LocalizationProvider'
import theme from './static/theme'

const App = () => (
  <Provider store={getStore()}>
    <LocalizationProvider>
      <ThemeProvider theme={theme}>
        <ColorProvider>
          <Routes />
        </ColorProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </Provider>
)

export default App
