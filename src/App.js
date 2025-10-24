/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context';

import Splash from './components/Splash/'
import BottomNav from './components/BottomNav/'
import Login from './components/Login/'
import MenuPrincipal from './components/MenuPrincipal/'
import Signin from './components/Signin/';
import RedefinirSenha from './components/RedefinirSenha/';
import EsqueceuSenha from './components/EsqueceuSenha/';
import Perfil from './components/Perfil/';
import Auth2fa from './components/Auth2fa/';
import Lanches from './components/Lanches/';
import Bebidas from './components/Bebidas/';
import Configuracoes from './components/Configuracoes/';
import DrawerTab from './components/DrawerTab/';
import AppDrawerNav from './Navegacao/AppDrawerNav';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={estiloInterno.container}>
      <NavigationContainer>
        <AppDrawerNav/>
        {/* <BottomNav/> */}
        {/* <DrawerTab/> */}
        {/* <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name='BottomNav' component={BottomNav} options={{headerShown: false}}/>
          <Stack.Screen name='Splash' component={Splash}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Signin' component={Signin}/>
          <Stack.Screen name='Auth2fa' component={Auth2fa}/>
          <Stack.Screen name='EsqueceuSenha' component={EsqueceuSenha}/>
          <Stack.Screen name='RedefinirSenha' component={RedefinirSenha}/>
          <Stack.Screen name='MenuPrincipal' component={MenuPrincipal}/>
          <Stack.Screen name='Lanches' component={Lanches}/>
          <Stack.Screen name='Bebidas' component={Bebidas}/>
          <Stack.Screen name='Configuracoes' component={Configuracoes}/>
          <Stack.Screen name='Perfil' component={Perfil}/>
        </Stack.Navigator> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const estiloInterno = StyleSheet.create({
  container : {
    flex: 1,
  },
});