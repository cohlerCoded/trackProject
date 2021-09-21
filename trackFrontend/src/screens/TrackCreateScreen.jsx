import '../_mockLocation'
import React, { useContext, useCallback } from 'react'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/locationContext'
import useLocation from '../hooks/useLocation'
import { withNavigationFocus } from 'react-navigation'
import TrackForm from '../components/TrackForm'
import { FontAwesome } from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext)

  const callback = useCallback(
    (location) => {
      addLocation(location, recording)
    },
    [recording]
  )

  const [err] = useLocation(isFocused || recording, callback)

  return (
    <SafeAreaView>
      <Text h2 h2Style={{ marginVertical: 30, textAlign: 'center' }}>
        Create a New Track
      </Text>
      <Map />
      {err && <Text>Please Enable Location Services</Text>}
      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name='plus' size={20} />,
}

export default withNavigationFocus(TrackCreateScreen)
