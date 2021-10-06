import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const PhoneInput = ({ onInputChange, number }) => {
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
        <Text style={styles.text}>{'( '}</Text>
        <TextInput
          maxLength={3}
          placeholder='123'
          keyboardType='numeric'
          style={styles.text}
          onChangeText={onInputChange}
          value={number}
        />
        <Text style={styles.text}>{' ) '}</Text>
        <TextInput
          maxLength={3}
          keyboardType='numeric'
          placeholder='456'
          style={styles.text}
        />
        <Text style={styles.text}>{' - '}</Text>
        <TextInput
          maxLength={4}
          keyboardType='numeric'
          placeholder='7890'
          style={styles.text}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: 10,
  },
})

export default PhoneInput
