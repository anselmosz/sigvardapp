/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context';

import Splash from './components/Splash/index'
import Login from './components/Login/index'
import MenuPrincipal from './components/MenuPrincipal/index'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={estiloInterno.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name='Splash' component={Splash}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='MenuPrincipal' component={MenuPrincipal}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const estiloInterno = StyleSheet.create({
  container : {
    flex: 1,
  },
});