import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import tailwind from 'tailwind-rn';

const Register = () => {
  return (
    <View style={tailwind('h-full bg-gray-50 flex justify-center items-center')}>


      <Text style={tailwind('text-blue-600 mt-24')}> The register screen </Text> 
    
    </View>
  )
}

export default Register
