import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Context as LocationContext } from '../context/locationContext'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext)
  console.log(locations.length)
  return (
    <View>
      <Input
        value={name}
        style={styles.input}
        placeholder='Enter Track Name'
        onChangeText={changeName}
      />
      <Button
        title={!recording ? 'Start Recording' : 'Stop Recording'}
        onPress={recording ? stopRecording : startRecording}
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={
          !recording
            ? {
                backgroundColor: 'green',
                borderRadius: 100,
                padding: 15,
              }
            : {
                backgroundColor: 'red',
                borderRadius: 100,
                padding: 15,
              }
        }
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          height: 100,
          width: 200,
          marginVertical: 10,
          alignSelf: 'center',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: { marginVertical: 15 },
})

export default TrackForm
