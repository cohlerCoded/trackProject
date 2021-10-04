import React from 'react'
import { View, TextInput } from 'react-native'

const PhoneInput = () => {
  return (
    <View>
      <TextInput maxLength={3} />
      <TextInput maxLength={3} />
      <TextInput maxLength={4} />
    </View>
  )
}

export default PhoneInput
