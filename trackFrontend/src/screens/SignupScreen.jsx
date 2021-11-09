import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/authContext'

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)
  return (
    <View>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign Up For Tracker'
        buttonText='Sign Up'
        errorMessage={state.errorMessage}
        onSubmitHandler={signup}
      />
      <NavLink
        linkText='Already have an account? Go to sign in.'
        routeName='Signin'
      />
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
