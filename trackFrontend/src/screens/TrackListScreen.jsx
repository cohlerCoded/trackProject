import React, { useContext } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/trackContext'
ListItem
import { FontAwesome } from '@expo/vector-icons'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks, deleteTrack } = useContext(TrackContext)

  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <>
              <ListItem>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TrackDetails', { _id: item._id })
                  }
                >
                  <ListItem.Content
                    style={{ display: 'flex', flexDirection: 'row' }}
                  >
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Chevron style={{ alignSelf: 'flex-end' }} />
                  </ListItem.Content>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 0,
                    marginHorizontal: 20,
                  }}
                  onPress={() => {
                    deleteTrack(item._id, item.name)
                    navigation.navigate('TrackList')
                  }}
                >
                  <FontAwesome name='trash' size={24} color='black' />
                </TouchableOpacity>
              </ListItem>
            </>
          )
        }}
      />
    </View>
  )
}

TrackListScreen.navigationOptions = {
  title: 'Tracks',
  headerTitleAlign: 'center',
}

export default TrackListScreen
