import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const NavLink = ({ navigation, linkText }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.linkStyles}>{linkText}</Text>
      </TouchableOpacity>
    </>
  )
}

export default NavLink

const styles = StyleSheet.create({
  linkStyles: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginVertical: 10,
  },
})
