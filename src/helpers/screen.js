import screenSizes from 'static/theme/screenSizes.json'

const getWindow = (callback = () => {}) => {
  try {
    return callback(window)
  } catch (_) {
    return undefined
  }
}

export const getWindowSize = (includeWideScreen = false) => (
  getWindow((window) => {
    const windowWidth = window.innerWidth
    if (windowWidth < screenSizes.tablet) return 'mobile'
    else if (windowWidth >= screenSizes.tablet && windowWidth < screenSizes.desktop) return 'tablet'
    else if (windowWidth >= screenSizes.desktop && windowWidth < screenSizes.widescreen) return 'desktop'
    else if (includeWideScreen) return 'widescreen'
    return 'desktop'
  })
)
