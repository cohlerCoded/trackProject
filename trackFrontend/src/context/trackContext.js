import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const fetchTracks = (dispatch) => () => {}
const createTrack = (dispatch) => async (name, locations) => {
  await lala.post('/tracks', { name, locations })
}
const deleteTrack = (dispatch) => () => {}

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack, deleteTrack },
  []
)
