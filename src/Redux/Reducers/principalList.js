import { principalConstants } from '../constants'

const initState = {
  principals_list: [],
  loading: false,
  error: '',
}

const principalList = (state = initState, action) => {
  switch (action.type) {
    case principalConstants.GET_ALL_PRINCIPAL_REQEUST:
      state = { ...state, loading: true }
      break

    case principalConstants.GET_ALL_PRINCIPAL_SUCCESS:
      state = {
        ...state,
        principals_list: action.payload.principals_list,
        loading: false,
      }
      break

    case principalConstants.GET_ALL_PRINCIPAL_FAILURE:
      state = { ...state, loading: false, error: action.payload.error }
      break

    case principalConstants.ADD_NEW_PRINCIPAL_REQEUST:
      state = { ...state, loading: true }
      break

    case principalConstants.ADD_NEW_PRINCIPAL_SUCCESS:
      const newPrincipal = action.payload.principal
      const updated_principals_list = [...state.principals_list, newPrincipal]

      state = {
        ...state,
        principals_list: updated_principals_list,
        loading: false,
      }
      break

    case principalConstants.ADD_NEW_PRINCIPAL_FAILURE:
      state = { ...state, loading: false, error: action.payload.error }
      break

    case principalConstants.UPDATE_PRINCIPAL_REQEUST:
      state = { ...state, loading: true }
      break

    case principalConstants.UPDATE_PRINCIPAL_SUCCESS:
      var updatedPrincipal = action.payload.principal
      var updatedList = state.principals_list.filter((current) => {
        return current._id !== updatedPrincipal._id
      })
      updatedList = [...updatedList, updatedPrincipal]

      state = {
        ...state,
        principals_list: updatedList,
        loading: false,
      }
      break

    case principalConstants.UPDATE_PRINCIPAL_FAILURE:
      state = { ...state, loading: false, error: action.payload.error }
      break
  }
  return state
}

export default principalList
