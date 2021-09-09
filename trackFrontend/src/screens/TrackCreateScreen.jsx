import '../_mockLocation'
import React, { useContext } from 'react'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/locationContext'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext)
  const [err] = useLocation((location) => addLocation(location))
  return (
    <SafeAreaView>
      <Text h2 h2Style={{ marginVertical: 30, textAlign: 'center' }}>
        Create a New Track
      </Text>
      <Map />
      {err && <Text>Please Enable Location Services</Text>}
    </SafeAreaView>
  )
}

export default TrackCreateScreen
