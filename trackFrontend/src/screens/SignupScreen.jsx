import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button title='Signin' onPress={() => navigation.navigate('Signin')} />
    </View>
  )
}

export default SignupScreen
