import { createStore } from 'redux'
import composedMiddleware from './middleware'
import rootReducer from './reducer'

const getStore = (initialState = {}) => createStore(
  rootReducer,
  initialState,
  composedMiddleware,
)

export default getStore
