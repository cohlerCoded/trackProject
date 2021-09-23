import React, { useState } from 'react'
import { View, Button, StyleSheet, Alert } from 'react-native'

export default function ConfirmBox() {
  const [showBox, setShowBox] = useState(true)

  const showConfirmDialog = ({
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
  }

  return (
    <View style={styles.screen}>
      {showBox && <View style={styles.box}></View>}
      <Button title='Delete' onPress={() => showConfirmDialog()} />
    </View>
  )
}

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
  screen: {
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
