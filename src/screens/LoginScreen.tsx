import { View, Text } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}: any) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Home")}>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen