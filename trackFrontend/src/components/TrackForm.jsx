import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Context as LocationContext } from '../context/locationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext)
  const [saveTrack] = useSaveTrack()

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
              }
            : {
                backgroundColor: 'red',
                borderRadius: 100,
              }
        }
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          height: 75,
          width: 200,
          alignSelf: 'center',
        }}
      />
      {!recording && locations.length ? (
        <Button
          title='Save Track'
          onPress={saveTrack}
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: 'blue',
            borderRadius: 100,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
            height: 75,
            width: 200,
            alignSelf: 'center',
          }}
        />
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  input: { marginVertical: 15 },
})

export default TrackForm
