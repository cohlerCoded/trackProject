import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const NavLink = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.linkStyles}>
          Already have an account? Go to Sign In.
        </Text>
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
