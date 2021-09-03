import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/authContext'

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext)

  return (
    <View style={{ marginVertical: '45%' }}>
      <AuthForm
        headerText='Sign In'
        buttonText='Sign In'
        errorMessage={state.errorMessage}
        onSubmitHandler={signin}
      />
      <NavLink
        linkText="Don't have an account yet? Go to sign up."
        routeName='Signup'
      />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}
export default SigninScreen
