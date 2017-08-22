import FETCH_STATUS from 'app-store/static/fetchStatus'

export const generateFetchStatusByActionStatus = (actionTypes) => (state = FETCH_STATUS.INITIAL, action) => {
  switch (action.type) {
    case actionTypes.initial:
      return FETCH_STATUS.INITIAL
    case actionTypes.request:
      return FETCH_STATUS.REQUEST
    case actionTypes.success:
      return FETCH_STATUS.SUCCESS
    case actionTypes.failure:
      return FETCH_STATUS.FAILURE
    default:
      return state
  }
}

export const generateBooleanFetchStatusByActionStatus = (actionStatus) => ({
  isInitial: actionStatus !== FETCH_STATUS.INITIAL && actionStatus !== FETCH_STATUS.REQUEST && actionStatus !== FETCH_STATUS.SUCCESS && actionStatus !== FETCH_STATUS.FAILURE,
  isRequest: actionStatus === FETCH_STATUS.REQUEST,
  isSuccess: actionStatus === FETCH_STATUS.SUCCESS,
  isFailure: actionStatus === FETCH_STATUS.FAILURE,
})
