import { createSelector } from 'reselect'
import { generateBooleanFetchStatusByActionStatus } from 'helpers/redux'

const selectTodoList = (state) => (state.todoList) || {}

const selectTodoListDetail = createSelector(
  selectTodoList,
  (todoList) => todoList.data || {},
)

const selectFetchTodoList = createSelector(
  selectTodoList,
  (todoList) => todoList.fetchTodoList,
)

const selectFetchTodoListStatus = createSelector(
  selectFetchTodoList,
  (fetchTodoList) => generateBooleanFetchStatusByActionStatus(fetchTodoList.status),
)

const selectFetchTodoListError = createSelector(
  selectFetchTodoList,
  (fetchTodoList) => fetchTodoList.errorMessage || ''
)

export {
  selectTodoListDetail,
  selectFetchTodoListStatus,
  selectFetchTodoListError,
}
