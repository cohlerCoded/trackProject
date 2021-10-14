import React, { useContext } from 'react'
import { View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/authContext'

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext)

  const { routeName } = navigation.state

  return (
    <View style={{ marginVertical: '45%' }}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign In'
        buttonText='Sign In'
        errorMessage={state.errorMessage}
        onSubmitHandler={signin}
        screen={routeName}
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
