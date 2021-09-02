import React, { useContext } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/authContext'
const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)

  return (
    <View style={{ marginVertical: '45%' }}>
      <AuthForm
        headerText='Sign Up For Tracker'
        buttonText='Sign Up'
        errorMessage={state.errorMessage}
        onSubmitHandler={signup}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.linkStyles}>
          Already have an account? Go to Sign In.
        </Text>
      </TouchableOpacity>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}
const styles = StyleSheet.create({})

export default SignupScreen
