import React, { useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/authContext'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
    <View>
      <Text h3 h3Style={{ marginVertical: 30, textAlign: 'center' }}>
        Account Settings
      </Text>
      <Button
        title='Sign Out'
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'red',
          borderRadius: 100,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          height: 50,
          width: 200,
          marginVertical: 10,
          alignSelf: 'center',
        }}
        onPress={signout}
      />
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})
