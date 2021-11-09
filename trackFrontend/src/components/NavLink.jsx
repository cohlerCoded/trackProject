import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, linkText, routeName }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
        <Text style={styles.linkStyles}>{linkText}</Text>
      </TouchableOpacity>
    </>
  )
}

export default withNavigation(NavLink)

const styles = StyleSheet.create({
  linkStyles: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginVertical: 20,
  },
})
