import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { fetchTodoList } from 'store/TodoList/actions'
import * as todoListSelector from 'store/TodoList/selectors'

const TodoListHOC = (ComposedComponent) => {
  class withTodoList extends Component {
    componentDidMount() {
      const { fetchTodoList: fetch } = this.props
      fetch()
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  withTodoList.propTypes = {
    fetchTodoList: PropTypes.func.isRequired,
  }

  const mapStateToProps = (state) => ({
    todoListDetail: todoListSelector.selectTodoListDetail(state),
    fetchTodoListStatus: todoListSelector.selectFetchTodoListStatus(state),
    fetchTodoListError: todoListSelector.selectFetchTodoListError(state),
  })

  const mapDispatchToProps = (dispatch) => bindActionCreators({
    goToHomePage: () => push('/'),
    fetchTodoList,
  }, dispatch)

  return connect(mapStateToProps, mapDispatchToProps)(withTodoList)
}

export default TodoListHOC
