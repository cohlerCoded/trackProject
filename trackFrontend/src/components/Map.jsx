import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'

const Map = () => {
  const track = []

  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      track.push({
        latitude: 37.33233 + i * 0.001,
        longitude: -122.03121 + i * 0.001,
      })
    } else {
      track.push({
        latitude: 37.33233 + i * 0.002,
        longitude: -122.03121 + i * 0.001,
      })
    }
  }
  return (
    <MapView
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      <Polyline coordinates={track} lineDashPattern={[0]} strokeWidth={2} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
})

export default Map
