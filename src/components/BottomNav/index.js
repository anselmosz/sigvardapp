import React from "react";
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import MenuPrincipal from "../MenuPrincipal";
import Configuracoes from "../Configuracoes";
import Auth2fa from "../Auth2fa";

const Tab = createBottomTabNavigator();

export default props => {
  return(
    <Tab.Navigator
      // screenOptions={{
        // tabBarActiveTintColor: 'blue',
        // tabBarInactiveTintColor: 'gray',
        // tabBarStyle: {
        //   backgroundColor: 'lightgray',
        //   height: 60,
        // },
        // headerShown: false, // Hides the header for all tab screens
      // }}
      >
      <Tab.Screen options={{
        title: "inicio",
        tabBarIcon: () => (
          <Icon name="th-large" color="#000" size={24} />
        )
      }} name="MenuPrincpal" component={MenuPrincipal}/>

      <Tab.Screen options={{
        tabBarIcon: () => (
          <Icon name="gear" color="#000" size={24} />
        )
      }} name="Configuracoes" component={Configuracoes}/>

      <Tab.Screen options={{
        tabBarIcon: () => (
          <Icon name="lock" color="#000" size={24} />
        )
      }} name="Auth2fa" component={Auth2fa}/>

      {/* <Tab.Screen options={{
        tabBarIcon: () => {
          <Icon name="user-circle" color="#000" size={24} />
        }
      }} name='Signin' component={Signin}/>

      <Tab.Screen options={{
        tabBarIcon: () => {
          <Icon name="user-circle" color="#000" size={24} />
        }
      }} name='Auth2fa' component={Auth2fa}/
      >
      <Tab.Screen options={{
        tabBarIcon: () => {
          <Icon name="user-circle" color="#000" size={24} />
        }
      }} name='EsqueceuSenha' component={EsqueceuSenha}/>
      <Tab.Screen options={{
        tabBarIcon: () => {
          <Icon name="user-circle" color="#000" size={24} />
        }
      }} name='RedefinirSenha' component={RedefinirSenha}/>
      <Tab.Screen options={{
        tabBarIcon: () => {
          <Icon name="user-circle" color="#000" size={24} />
        }
      }} name='MenuPrincipal' component={MenuPrincipal}/>
      <Tab.Screen options={{
        tabBarIcon: () => {
          <Icon name="user-circle" color="#000" size={24} />
        }
      }} name='Lanches' component={Lanches}/
      >
      <Tab.Screen options={{
        tabBarIcon: () => {
          <Icon name="user-circle" color="#000" size={24} />
        }
      }} name='Bebidas' component={Bebidas}/
      >
      <Tab.Screen options={{
        tabBarIcon: () => {
          <Icon name="user-circle" color="#000" size={24} />
        }
      }} name='Configuracoes' component={Configuracoes}/>
      <Tab.Screen options={{
        tabBarIcon: () => {
          <Icon name="user-circle" color="#000" size={24} />
        }
      }} name='Perfil' component={Perfil}/> */}

    </Tab.Navigator>
  )
}