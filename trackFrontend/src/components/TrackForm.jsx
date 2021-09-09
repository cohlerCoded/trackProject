import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

const TrackForm = () => {
  return (
    <View>
      <Input style={styles.input} placeholder='Enter Track Name' />
      <Button
        title='Start Recording'
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'green',
          borderRadius: 100,
          padding: 15,
        }}
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
