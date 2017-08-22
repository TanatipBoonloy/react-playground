import { combineReducers } from 'redux'
import { generateFetchStatusByActionStatus } from 'helpers/redux'
import { fetchTodoListStatus } from './actionTypes'

const initialState = []
const TodoList = (state = initialState, action) => {
  switch (action.type) {
    case fetchTodoListStatus.success:
      return action.payload.data
    default:
      return state
  }
}

const createStatusReducer = (statusType) => generateFetchStatusByActionStatus(statusType)
const createErrorReducer = (statusType) => (state = {}, action) => {
  switch (action.type) {
    case statusType.failure:
      return action.error
    default:
      return state
  }
}

export default combineReducers({
  data: TodoList,
  fetchTodoList: combineReducers({
    status: createStatusReducer(fetchTodoListStatus),
    error: createErrorReducer(fetchTodoListStatus),
  }),
})
