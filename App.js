import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import tailwind from 'tailwind-rn';

export default function App() {
  return (
    <View style={tailwind('h-full bg-gray-50 flex justify-center items-center')}>
      <Text style={tailwind('text-blue-600 font-body')}>Open up App.js to start working on your app!</Text>

      <Text style={tailwind('text-red-600 font-body text-3xl tracking-wider')}>The second text!</Text>

      <View style={tailwind('mt-24 flex')}>

      <Button
        onPress={() => alert('Right button pressed')}
        title="Learn More"
        style={tailwind('h-full bg-green-600 font-body py-3 px-4')}
        accessibilityLabel="Learn more about this purple button"
      />

  <Button
        onPress={() => Alert.alert('Right button pressed')}
        title="Learn More"
        style={tailwind('h-full bg-green-600 font-body py-3 px-4')}
        accessibilityLabel="Learn more about this purple button"
      />


      </View>


      <StatusBar style="" />
    </View>
  );
}

