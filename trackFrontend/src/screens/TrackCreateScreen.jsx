import '../_mockLocation'
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location'
import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/locationContext'

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext)
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
        (location) => addLocation(location)
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

  return (
    <SafeAreaView>
      <Text h2 h2Style={{ marginVertical: 30, textAlign: 'center' }}>
        Create a New Track
      </Text>
      <Map />
      {err && <Text>Please Enable Location Services</Text>}
    </SafeAreaView>
  )
}

export default TrackCreateScreen
