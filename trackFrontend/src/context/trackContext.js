import createDataContext from './createDataContext'

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const fetchTracks = (dispatch) => () => {}
const createTack = (dispatch) => () => {}
const deleteTrack = (dispatch) => () => {}

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTack, deleteTrack },
  []
)
