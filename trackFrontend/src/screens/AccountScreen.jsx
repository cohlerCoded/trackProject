import React, { useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context as AuthContext } from '../context/authContext'
import { FontAwesome } from '@expo/vector-icons'
import AuthForm from '../components/AuthForm'
import { useRoute } from '@react-navigation/native'
import { NavigationEvents } from 'react-navigation'

const AccountScreen = ({ navigation }) => {
  const { state, signout, updateUser, clearErrorMessage, clearSuccessMessage } =
    useContext(AuthContext)
  const { routeName } = navigation.state
  return (
    <View>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
        onWillBlur={clearSuccessMessage}
      />
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text h3 h3Style={{ marginVertical: 30, textAlign: 'center' }}>
          Account Settings
        </Text>
        <AuthForm
          screen={routeName}
          headerText='Edit Info'
          buttonText='Save Changes'
          errorMessage={state.errorMessage}
          successMessage={state.successMessage}
          onSubmitHandler={updateUser}
        />
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
      </SafeAreaView>
    </View>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  headerTitleAlign: 'center',
  tabBarIcon: <FontAwesome name='gear' size={20} />,
}
const styles = StyleSheet.create({})

export default AccountScreen
