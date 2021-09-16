import { useContext } from 'react'
import { Context as LocationContext } from '../context/locationContext'
import { Context as TrackContext } from '../context/trackContext'

export default () => {
  const { createTrack } = useContext(TrackContext)
  const {
    state: { name, locations },
  } = useContext(LocationContext)

  const saveTrack = () => {
    createTrack(name, locations)
  }

  return [saveTrack]
}
