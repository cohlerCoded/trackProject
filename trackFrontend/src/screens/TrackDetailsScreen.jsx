import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Context as TrackContext } from '../context/trackContext'

const TrackDetailsScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext)
  const _id = navigation.getParam('_id')
  const track = state.find((t) => t._id === _id)
  console.log(state)
  console.log('track = ', track)

  return (
    <View>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <Button
        title='TrackList'
        onPress={() => navigation.navigate('TrackList')}
      />
    </View>
  )
}

export default TrackDetailsScreen
