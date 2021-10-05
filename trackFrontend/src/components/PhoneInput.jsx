import React from 'react'
import { View, Text, TextInput } from 'react-native'

const PhoneInput = () => {
  return (
    <View style={{ marginLeft: 10, paddingBottom: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#86939e' }}>
        Phone Number
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#86939e',
          marginRight: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            alignSelf: 'center',
          }}
        >
          {'( '}
        </Text>
        <TextInput
          maxLength={3}
          placeholder='123'
          keyboardType='numeric'
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
          {' ) '}
        </Text>
        <TextInput
          maxLength={3}
          keyboardType='numeric'
          placeholder='456'
          style={{
            fontSize: 18,
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
          maxLength={4}
          keyboardType='numeric'
          placeholder='7890'
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
