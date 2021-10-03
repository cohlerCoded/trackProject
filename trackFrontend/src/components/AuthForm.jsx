import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/authContext'

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
  const { state, getUserDetails } = useContext(AuthContext)
  useEffect(() => {
    if (state.token) {
      console.log(state)
    }
  }, [])
  return (
    <>
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
      {errorMessage ? (
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
        onPress={() => onSubmitHandler({ email, password })}
      />
    </>
  )
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
