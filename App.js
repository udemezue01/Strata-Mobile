import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Screen imports

import Landing from './src/screen/Auth/Landing'

// Tailwinds styling import


import tailwind from 'tailwind-rn';

// React navigation import
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () =>{
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}


export default App
