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
import Signin from './components/Signin/index';
import RedefinirSenha from './components/RedefinirSenha/index';
import EsqueceuSenha from './components/EsqueceuSenha/index';
import Perfil from './components/Perfil/index';
import Auth2fa from './components/Auth2fa/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={estiloInterno.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name='Splash' component={Splash}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Signin' component={Signin}/>
          <Stack.Screen name='EsqueceuSenha' component={EsqueceuSenha}/>
          <Stack.Screen name='RedefinirSenha' component={RedefinirSenha}/>
          <Stack.Screen name='MenuPrincipal' component={MenuPrincipal}/>
          <Stack.Screen name='Perfil' component={Perfil}/>
          <Stack.Screen name='Auth2fa' component={Auth2fa}/>
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