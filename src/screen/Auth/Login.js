import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import tailwind from 'tailwind-rn';

const Login = () => {
  return (
    <View style={tailwind('h-full bg-gray-50 flex justify-center items-center')}>


      <Text style={tailwind('text-blue-600 font-body')}>Login screen </Text>



      

      <StatusBar style="" />
    </View>
  );
}

export default Login
