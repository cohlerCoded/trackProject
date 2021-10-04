import React from 'react'
import { View, Text, TextInput } from 'react-native'

const PhoneInput = () => {
  return (
    <View style={{ marginLeft: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'grey' }}>
        Phone Number
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <TextInput
          maxLength={3}
          style={{ fontSize: 18, borderBottomWidth: 1, height: 48 }}
        />
        <TextInput maxLength={3} />
        <TextInput maxLength={4} />
      </View>
    </View>
  )
}

export default PhoneInput
