import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Marker } from 'react-native-maps'
import { Context as LocationContext } from '../context/locationContext'
import { FontAwesome5 } from '@expo/vector-icons'

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext)

  if (!currentLocation)
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />

  return (
    <MapView
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      <Marker coordinate={currentLocation.coords}>
        <FontAwesome5 name='map-marker-alt' size={26} color='red' />
      </Marker>
      <Polyline
        lineDashPattern={[1]}
        coordinates={locations.map((location) => location.coords)}
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
})

export default Map
