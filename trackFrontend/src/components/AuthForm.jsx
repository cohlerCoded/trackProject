import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Keyboard, ScrollView } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/authContext'

const AuthForm = ({
  headerText,
  buttonText,
  errorMessage,
  successMessage,
  onSubmitHandler,
  screen,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [readyToSignIn, setReadyToSignIn] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [viewIcon, setViewIcon] = useState(false)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  const { state } = useContext(AuthContext)

  const phoneNumberFormater = (number) => {
    return number.length <= 1 && number[0] === '('
      ? ''
      : number.length === 1
      ? '(' + number
      : number.length === 4
      ? number + ') '
      : number.length <= 5 && number[4] === ')'
      ? number.slice(0, 4)
      : number.length === 9
      ? number + ' - '
      : number.length <= 11 && number[10] === '-'
      ? number.slice(0, 9)
      : number
  }

  useEffect(() => {
    if (state.user) {
      setEmail(state.user.email)
      setPhoneNumber(state.user.phoneNumber)
    }

    password.length > 3 && email.includes('@')
      ? setReadyToSignIn(true)
      : setReadyToSignIn(false)

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true) // or some other action
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false) // or some other action
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [email, password, readyToSignIn])

  return (
    <ScrollView style={{ marginVertical: isKeyboardVisible ? '10%' : '45%' }}>
      <Text h3 h3Style={{ marginVertical: 15, textAlign: 'center' }}>
        {headerText}
      </Text>
      <Input
        label={screen === 'Signin' ? 'Email or Phone Number' : 'Email'}
        value={email}
        onChangeText={(text) => setEmail(text.trim())}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='example@gmail.com'
      />
      {screen !== 'Signin' && (
        <Input
          label='Phone Number'
          value={phoneNumberFormater(phoneNumber)}
          onChangeText={setPhoneNumber}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='numeric'
          maxLength={16}
          placeholder='(123) 456 - 7890'
        />
      )}
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
      {successMessage ? (
        <Text style={styles.successMessage}>{successMessage}</Text>
      ) : null}
      <Button
        title={buttonText}
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor:
            screen === 'Account'
              ? 'green'
              : readyToSignIn
              ? 'rgba(78, 116, 289, 1)'
              : '#86939e',
          borderRadius: 100,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          height: 50,
          width: 200,
          marginVertical: 10,
          alignSelf: 'center',
        }}
        onPress={
          screen === 'Account'
            ? () =>
                onSubmitHandler({
                  _id: state.user._id,
                  email,
                  password,
                  phoneNumber,
                })
            : () => onSubmitHandler({ email, password, phoneNumber })
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  successMessage: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    marginVertical: 10,
  },
})

export default AuthForm
