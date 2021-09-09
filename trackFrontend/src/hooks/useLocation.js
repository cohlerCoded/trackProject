import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location'
import { useEffect, useState } from 'react'

export default (callback) => {
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync()
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      )
      if (!granted) {
        throw new Error('Location permission not granted')
      }
    } catch (error) {
      setErr(error)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

  return [err]
}
