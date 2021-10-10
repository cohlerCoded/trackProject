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
    case 'USER_UPDATE_SUCCESS':
      return { errorMessage: '', user: action.payload }
    case 'USER_UPDATE_ERROR':
      return { ...state, errorMessage: action.payload }
    case 'GET_USER_DETAILS':
      return { ...state, errorMessage: '', user: action.payload }
    case 'SIGNIN_SUCCESS':
      return { errorMessage: '', token: action.payload }
    case 'SIGNIN_ERROR':
      return { ...state, errorMessage: action.payload }
    case 'CLEAR_ERROR_MESSAGE':
      return { ...state, errorMessage: '' }
    case 'SIGNOUT':
      return { token: null, errorMessage: '' }
    default:
      return state
  }
}

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'SIGNIN_SUCCESS', payload: token })
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
}
const signup =
  (dispatch) =>
  async ({ email, password, phoneNumber }) => {
    try {
      const res = await trackerApi.post('/signup', {
        email,
        password,
        phoneNumber,
      })
      await AsyncStorage.setItem('token', res.data.token)
      dispatch({ type: 'SIGNUP_SUCCESS', payload: res.data.token })
      navigate('TrackList')
    } catch (error) {
      console.log(error.response.data)
      dispatch({
        type: 'SIGNUP_ERROR',
        payload: error.response && error.response.data,
      })
    }
  }

const getUserDetails = (dispatch) => async (token) => {
  const res = await trackerApi.get(`/user/${token}`)
  dispatch({ type: 'GET_USER_DETAILS', payload: res.data })
}

const updateUser = (dispatch) => async (user) => {
  try {
    const res = await trackerApi.put(`/${user._id}`, user)
    dispatch({ type: 'USER_UPDATE_SUCCESS', payload: res.data })
  } catch (error) {
    dispatch({
      type: 'USER_UPDATE_ERROR',
      payload: 'Something went wrong with update',
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

      const user = await trackerApi.get(`/user/${res.data.token}`)
      dispatch({ type: 'GET_USER_DETAILS', payload: user.data })

      navigate('TrackList')
    } catch (error) {
      dispatch({
        type: 'SIGNIN_ERROR',
        payload: 'Something went wrong with sign up',
      })
    }
  }

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'SIGNOUT' })
  navigate('Signin')
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin,
    getUserDetails,
    updateUser,
  },
  { token: null, errorMessage: '' }
)
