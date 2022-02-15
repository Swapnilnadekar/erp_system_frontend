import { principalConstants } from '../constants'

const initState = {
  token: '',
  user: {
    name: '',
    email: '',
    contact: '',
    role: '',
    userName: '',
    profile_pic: '',
  },
  role: 'admin',
  authenticate: false,
  authenticating: false,
  loading: false,
  error: '',
  message: '',
}

const principal = (state = initState, action) => {
  switch (action.type) {
    case principalConstants.PRINCIPAL_LOGIN_REQUEST:
      state = { ...state, authenticating: true, loading: true }
      break

    case principalConstants.PRINCIPAL_LOGIN_SUCCESS:
      state = {
        ...state,
        authenticating: false,
        authenticate: true,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      }
      break

    case principalConstants.PRINCIPAL_LOGIN_FAILURE:
      state = {
        ...state,
        authenticating: false,
        authenticate: false,
        loading: false,
        error: action.payload.error,
      }
      break
    case principalConstants.PRINCIPAL_LOGOUT_REQUEST:
      state = { ...state, loading: true }
      break

    case principalConstants.PRINCIPAL_LOGOUT_SUCCESS:
      state = { ...initState, loading: false }
      break
    case principalConstants.PRINCIPAL_LOGOUT_FAILURE:
      state = { ...initState, error: 'error', loading: false }
      break
    case principalConstants.ADD_NEW_PRINCIPAL_REQEUST:
      state = { ...state, loading: true }
      break

    case principalConstants.ADD_NEW_PRINCIPAL_SUCCESS:
      state = { ...state, loading: false }
      break

    case principalConstants.ADD_NEW_PRINCIPAL_FAILURE:
      state = { ...state, loading: false, error: action.payload.error }
      break

    case principalConstants.DELETE_PRINCIPAL_REQEUST:
      state = { ...state, loading: true }
      break

    case principalConstants.DELETE_PRINCIPAL_SUCCESS:
      state = {
        ...state,
        loading: false,
      }
      break

    case principalConstants.DELETE_PRINCIPAL_FAILURE:
      state = { ...state, loading: false, error: action.payload.error }
      break
  }
  return state
}
export default principal
