import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return { errorMessage: '', token: action.payload }
    case 'SIGNUP_ERROR':
      return { ...state, errorMessage: action.payload }
    case 'SIGNIN_SUCCESS':
      return { errorMessage: '', token: action.payload }
    case 'SIGNIN_ERROR':
      return { ...state, errorMessage: action.payload }
    case 'CLEAR_ERROR_MESSAGE':
      return { ...state, errorMessage: '' }
    default:
      return state
  }
}

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
}
const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const res = await trackerApi.post('/signup', { email, password })
      await AsyncStorage.setItem('token', res.data.token)
      dispatch({ type: 'SIGNUP_SUCCESS', payload: res.data.token })
      navigate('TrackList')
    } catch (error) {
      dispatch({
        type: 'SIGNUP_ERROR',
        payload: 'Something went wrong with sign up',
      })
    }
  }

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const res = await trackerApi.post('/signin', { email, password })
      await AsyncStorage.setItem('token', res.data.token)
      dispatch({ type: 'SIGNIN_SUCCESS', payload: res.data.token })
      navigate('TrackList')
    } catch (error) {
      dispatch({
        type: 'SIGNIN_ERROR',
        payload: 'Something went wrong with sign up',
      })
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
  { signup, signin, signout, clearErrorMessage },
  { token: null, errorMessage: '' }
)
