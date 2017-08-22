import { fetchTodoListStatus } from './actionTypes'

export const fetchTodoList = () => (dispatch) => {
  dispatch(onRequest(fetchTodoListStatus)())
  // call Api
  return setTimeout(() => {
    dispatch(onSuccess(fetchTodoListStatus)({
      data: [
        'register-page',
        'login-page',
      ],
    }))
  }, 2000)
}

const onRequest = (statusType) => () => ({
  type: statusType.request,
})

const onSuccess = (statusType) => (response) => ({
  type: statusType.success,
  payload: {
    data: response.data,
  },
})
