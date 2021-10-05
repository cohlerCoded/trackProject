import React from 'react'
import { View, Text, TextInput } from 'react-native'

const PhoneInput = () => {
  return (
    <View style={{ marginLeft: 10, paddingBottom: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'grey' }}>
        Phone Number
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          borderBottomWidth: 1,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            alignSelf: 'center',
          }}
        >
          (
        </Text>
        <TextInput
          maxLength={3}
          placeholder='123'
          style={{
            alignSelf: 'center',
            fontSize: 18,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            alignSelf: 'center',
          }}
        >
          {') '}
        </Text>
        <TextInput
          maxLength={3}
          placeholder='456'
          style={{
            fontSize: 18,
            height: 36,
            width: 40,
            padding: 5,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            alignSelf: 'center',
          }}
        >
          {' - '}
        </Text>

        <TextInput
          placeholder='7890'
          maxLength={4}
          style={{
            alignSelf: 'center',
            fontSize: 18,
          }}
        />
      </View>
    </View>
  )
}

export default PhoneInput
