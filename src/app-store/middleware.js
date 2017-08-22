import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import history from './history'

const middlewares = [
  thunk,
  routerMiddleware(history),
]
const enhancers = []

if (process.browser && process.env.NODE_ENV === 'development' && window.devToolsExtension) {
  enhancers.push(window.devToolsExtension())
}

const composedMiddleware = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)

export default composedMiddleware
