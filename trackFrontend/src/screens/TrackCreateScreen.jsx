import '../_mockLocation'
import React, { useContext } from 'react'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/locationContext'
import useLocation from '../hooks/useLocation'
import { withNavigation, withNavigationFocus } from 'react-navigation'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext)
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, satte.recording)
  })

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

export default withNavigationFocus(TrackCreateScreen)
