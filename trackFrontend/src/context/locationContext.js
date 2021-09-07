import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'START_RECORDING':
    case 'STOP_RECORDING':
    case 'ADD_LOCATION':
      return { ...state, currentLocation: action.payload }
    default:
      return state
  }
}

const startRecording = (dispatch) => () => {}
const stopRecording = (dispatch) => () => {}
const addLocation = (dispatch) => (location) => {
  dispatch({ type: 'ADD_LOCATION', payload: location })
}

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
)
