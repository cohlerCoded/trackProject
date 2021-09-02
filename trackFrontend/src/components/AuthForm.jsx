import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

const AuthForm = ({
  headerText,
  buttonText,
  errorMessage,
  onSubmitHandler,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [viewIcon, setViewIcon] = useState(false)

  return (
    <View style={{ marginVertical: '45%' }}>
      <Text h3 h3Style={{ marginVertical: 15, textAlign: 'center' }}>
        {headerText}
      </Text>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        onFocus={() => setViewIcon(true)}
        onBlur={() => setViewIcon(false)}
        rightIcon={{
          type: 'font-awesome',
          name: secureTextEntry ? 'eye' : 'eye-slash',
          size: viewIcon ? 24 : 0,
          onPress: () => setSecureTextEntry(!secureTextEntry),
        }}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Button
        title={buttonText}
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
        onPress={onSubmitHandler}
      />
    </View>
  )
}

AuthForm.navigationOptions = () => {
  return {
    headerShown: false,
  }
}
const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
})

export default AuthForm
