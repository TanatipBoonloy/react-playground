export default (locale = 'en') => {
  /* eslint-disable */
  const homePage = require(`./${locale}/page/homePage.json`)
  /* eslint-enable */
  return {
    homePage,
  }
}
