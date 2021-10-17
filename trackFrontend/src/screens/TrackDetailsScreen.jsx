import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import MapView, { Polyline } from 'react-native-maps'
import { Context as TrackContext } from '../context/trackContext'
import { FontAwesome } from '@expo/vector-icons'

const TrackDetailsScreen = ({ navigation }) => {
  const { state, deleteTrack } = useContext(TrackContext)
  const _id = navigation.getParam('_id')

  const track = state.find((t) => t._id === _id)
  const initalCoords = track.locations[0].coords

  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignSelf: 'center' }}
        onPress={() => {}}
      >
        <Text style={{ fontSize: 30, marginVertical: 15, textAlign: 'center' }}>
          {track.name}
        </Text>
        <FontAwesome
          name='edit'
          size={20}
          color='black'
          style={{
            right: 0,
            marginHorizontal: 10,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
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
      <Button
        title='Delete Track'
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'red',
          borderRadius: 100,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          height: 50,
          width: 200,
          marginVertical: 30,
          alignSelf: 'center',
        }}
        onPress={async () => {
          await navigation.navigate('TrackList')
          deleteTrack(_id, track.name)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
})

export default TrackDetailsScreen
