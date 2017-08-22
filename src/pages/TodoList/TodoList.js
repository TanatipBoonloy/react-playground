import React from 'react'
import PropTypes from 'prop-types'
import withTodoList from 'hocs/withTodoList'

const TodoList = (props) => {
  const {
    goToHomePage,
    fetchTodoList,
    todoListDetail,
    fetchTodoListStatus,
    fetchTodoListError,
  } = props

  const TodoListLoading = (fetchTodoListStatus.isRequest) ? (
    <p>Loading..</p>
  ) : undefined

  const TodoListRenderer = (fetchTodoListStatus.isSuccess) ? (
    <ul>
      {
        todoListDetail.map((todo) => (
          <li>{todo}</li>
        ))
      }
    </ul>
  ) : undefined

  const ErrorMessage = (fetchTodoListStatus.isFailure) ? (
    <p style={{ color: 'red' }}>{fetchTodoListError}</p>
  ) : undefined
  return (
    <div>
      <button onClick={goToHomePage}>Go Back To Home Page</button>
      <br />
      <button onClick={fetchTodoList}>Fetch To Do List Again</button>
      {TodoListLoading}
      {TodoListRenderer}
      {ErrorMessage}
    </div>
  )
}

TodoList.propTypes = {
  goToHomePage: PropTypes.func.isRequired,
  fetchTodoList: PropTypes.func.isRequired,
  todoListDetail: PropTypes.array.isRequired,
  fetchTodoListStatus: PropTypes.object.isRequired,
  fetchTodoListError: PropTypes.string.isRequired,
}

export default withTodoList(TodoList)
