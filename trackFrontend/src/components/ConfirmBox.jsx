import React, { useState } from 'react'
import { View, Button, StyleSheet, Alert } from 'react-native'

const ConfirmBox = ({
  header,
  message,
  confirmText,
  rejectText,
  confirmHandler,
}) => {
  return Alert.alert(header, message, [
    // The "Yes" button
    {
      text: confirmText,
      onPress: () => {
        confirmHandler
      },
    },
    // The "No" button
    // Does nothing but dismiss the dialog when tapped
    {
      text: rejectText,
    },
  ])
  return (
    <View style={styles.container}>
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
    </View>
  )
}

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
    marginBottom: 30,
  },
  text: {
    fontSize: 30,
  },
})

export default ConfirmBox
