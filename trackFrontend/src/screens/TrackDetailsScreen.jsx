import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const TrackDetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackDetailsScreen</Text>
      <Button
        title='TrackList'
        onPress={() => navigation.navigate('TrackList')}
      />
    </View>
  )
}

export default TrackDetailsScreen
