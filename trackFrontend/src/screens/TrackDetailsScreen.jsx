import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import MapView, { Polyline, Marker } from 'react-native-maps'
import { Context as TrackContext } from '../context/trackContext'

const TrackDetailsScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext)
  const _id = navigation.getParam('_id')

  const track = state.find((t) => t._id === _id)
  const initalCoords = track.locations[0].coords

  return (
    <View>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initalCoords,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
      >
        <Polyline
          lineDashPattern={[1]}
          coordinates={track.locations.map((location) => location.coords)}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
})

export default TrackDetailsScreen
