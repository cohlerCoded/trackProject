import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider as AuthProvider } from './src/context/authContext'
import { Provider as LocationProvider } from './src/context/locationContext'
import { Provider as TrackProvider } from './src/context/trackContext'
import { setNavigator } from './src/navigationRef'

import AccountScreen from './src/screens/AccountScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailsScreen from './src/screens/TrackDetailsScreen'
import TrackListScreen from './src/screens/TrackListScreen'

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetails: TrackDetailsScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <TrackProvider>
          <App
            ref={(nav) => {
              setNavigator(nav)
            }}
          />
        </TrackProvider>
      </LocationProvider>
    </AuthProvider>
  )
}
