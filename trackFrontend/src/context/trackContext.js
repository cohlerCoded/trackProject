import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

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
const deleteTrack = (dispatch) => () => {}

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack, deleteTrack },
  []
)
