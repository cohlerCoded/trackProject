import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP_ERROR':
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const res = await trackerApi.post('/signup', { email, password })
      console.log(res.data)
    } catch (error) {
      dispatch({
        type: 'SIGNUP_ERROR',
        payload: 'Something went wrong with sign up',
      })
    }
    //api req to signup with email and password
    //if sign up modify state to auth
    //if fail error
  }
}
const signin = (dispatch) => {
  return ({ email, password }) => {
    //api req to signin with email and password
    //if signin modify state to auth
    //if fail error
  }
}
const signout = (dispatch) => {
  return ({ email, password }) => {
    //if sign up modify state
    //if fail error
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedin: false, errorMessage: '' }
)
