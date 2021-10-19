import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { Alert } from 'react-native'
const trackReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TRACKS':
      return action.payload
    default:
      return state
  }
}

const fetchTracks = (dispatch) => async () => {
  const res = await trackerApi.get('/tracks')
  dispatch({ type: 'FETCH_TRACKS', payload: res.data })
}
const createTrack = (dispatch) => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations })
}

const editTrackName = (dispatch) => async (id, newName) => {
  await trackerApi.put(`/tracks/${id}`, { newName })
}
const deleteTrack = (dispatch) => async (id, name) => {
  Alert.alert(
    'Are your sure?',
    `Are you sure you want to delete track '${name}'?`,
    [
      {
        text: 'Yes',
        onPress: async () => {
          await trackerApi.delete(`/tracks/${id}`)
          const res = await trackerApi.get('/tracks')
          dispatch({ type: 'FETCH_TRACKS', payload: res.data })
        },
      },
      {
        text: 'No',
      },
    ]
  )
}

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack, deleteTrack, editTrackName },
  []
)
