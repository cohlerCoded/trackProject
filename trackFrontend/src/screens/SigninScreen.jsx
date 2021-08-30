import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>SigninScreen</Text>
      <Button title='Signup' onPress={() => navigation.navigate('Signup')} />
      <Button
        title='TrackList'
        onPress={() => navigation.navigate('TrackList')}
      />
    </View>
  )
}

export default SigninScreen
