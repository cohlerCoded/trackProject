import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/authContext'
import PhoneInput from './PhoneInput'

const AuthForm = ({
  headerText,
  buttonText,
  errorMessage,
  onSubmitHandler,
  screen,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [viewIcon, setViewIcon] = useState(false)
  const { state, getUserDetails } = useContext(AuthContext)

  const phoneInputHandler = (number) => setPhoneNumber(number)

  console.log(phoneNumber, screen)
  useEffect(() => {
    if (state.token) {
      getUserDetails(state.token)
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
      <PhoneInput onInputChange={phoneInputHandler} />
      {screen !== 'Account' && (
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
      )}
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
        onPress={() => onSubmitHandler({ email, password, phoneNumber })}
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
