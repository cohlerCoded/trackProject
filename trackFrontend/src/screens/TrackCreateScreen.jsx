import { requestForegroundPermissionsAsync } from 'expo-location'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
const TrackCreateScreen = () => {
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync()
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
