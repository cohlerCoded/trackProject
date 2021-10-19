import createDataContext from './createDataContext'
import { Alert } from 'react-native'
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
      return {
        ...state,
        errorMessage: '',
        successMessage: 'User successfully updated!',
        user: action.payload,
      }
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
    case 'CLEAR_SUCCESS_MESSAGE':
      return { ...state, successMessage: '' }
    case 'SIGNOUT':
      return { token: null, errorMessage: '' }
    default:
      return state
  }
}

const getUserDetails = (dispatch) => async (token) => {
  const res = await trackerApi.get(`/user/${token}`)
  dispatch({ type: 'GET_USER_DETAILS', payload: res.data })
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
const clearSuccessMessage = (dispatch) => () => {
  dispatch({ type: 'CLEAR_SUCCESS_MESSAGE' })
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

      const user = await trackerApi.get(`/user/${res.data.token}`)
      dispatch({ type: 'GET_USER_DETAILS', payload: user.data })

      navigate('TrackList')
    } catch (error) {
      dispatch({
        type: 'SIGNUP_ERROR',
        payload: error.response && error.response.data,
      })
    }
  }

const updateUser = (dispatch) => async (user) => {
  try {
    const { data } = await trackerApi.put(`/${user._id}`, user)
    dispatch({ type: 'USER_UPDATE_SUCCESS', payload: data })
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
        payload: 'Something went wrong with sign in',
      })
    }
  }

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'SIGNOUT' })
  navigate('Signin')
}

const deleteUser = (dispatch) => async (id) => {
  Alert.alert(
    'Are your sure?',
    `Are you sure you want to delete this account?`,
    [
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await trackerApi.delete(`/${id}`)
            dispatch({ type: 'SIGNOUT' })
            navigate('Signin')
          } catch (error) {
            throw new Error(error.message)
          }
        },
      },
      {
        text: 'No',
      },
    ]
  )
}
export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrorMessage,
    clearSuccessMessage,
    tryLocalSignin,
    getUserDetails,
    updateUser,
    deleteUser,
  },
  { token: null, errorMessage: '' }
)
