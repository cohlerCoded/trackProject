import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h2 h2Style={{ marginVertical: 30, textAlign: 'center' }}>
        Creat a New Track
      </Text>
      <Map />
    </SafeAreaView>
  )
}

export default TrackCreateScreen
