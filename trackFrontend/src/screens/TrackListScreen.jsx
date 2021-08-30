import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title='TrackDetails'
        onPress={() => navigation.navigate('TrackDetails')}
      />
    </View>
  )
}

export default TrackListScreen
