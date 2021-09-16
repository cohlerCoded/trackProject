import createDataContext from './createDataContext'

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const fetchTracks = (dispatch) => () => {}
const createTrack = (dispatch) => (name, locations) => {
  console.log(name, locations.length)
}
const deleteTrack = (dispatch) => () => {}

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack, deleteTrack },
  []
)
