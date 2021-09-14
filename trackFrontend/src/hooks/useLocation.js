import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location'
import { useEffect, useState } from 'react'

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null)

  useEffect(() => {
    let subscriber
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync()
        const subscriber = await watchPositionAsync(
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

    if (shouldTrack) {
      startWatching()
    } else {
      if (subscriber) {
        subscriber.remove()
      }
      subscriber(null)
    }
    return () => {
      subscriber && subscriber.remove()
    }
  }, [shouldTrack, callback, subscriber])

  return [err]
}
