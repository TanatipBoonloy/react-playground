import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import todoList from 'store/TodoList/reducer'

const rootReducer = (combineReducers({
  router: routerReducer,
  todoList,
}))

export default rootReducer
