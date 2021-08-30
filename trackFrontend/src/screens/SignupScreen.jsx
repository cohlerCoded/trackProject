import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

const SignupScreen = ({ navigation }) => {
  const [viewPassword, setViewPassword] = useState(true)
  const [viewIcon, setViewIcon] = useState(false)
  return (
    <View style={{ marginVertical: '45%' }}>
      <Text h3 h3Style={{ marginVertical: 15, textAlign: 'center' }}>
        Sign Up For Tracker
      </Text>
      <Input label='Email' />
      <Input
        label='Password'
        secureTextEntry={viewPassword}
        onFocus={() => setViewIcon(true)}
        onBlur={() => setViewIcon(false)}
        rightIcon={{
          type: 'font-awesome',
          name: viewPassword === true ? 'eye' : 'eye-slash',
          size: viewIcon === true ? 24 : 0,
          onPress: () => setViewPassword(!viewPassword),
        }}
      />
      <Button
        title='Sign Up'
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 100,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          height: 50,
          width: 200,
          marginVertical: 10,
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('Signin')}
      />
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

export default SignupScreen
