import { Button } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Image } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from '../estilo';
import BtnNavigate from '../BtnNavigate';

export default props => { // Configurações da tela de SPLASH

  return (
    <View style={[estilo.container, {gap : 20}]}>
      <Image source={require('../../assets/image.png')} style={estilo.imagemPerfil}/>
      <Text style={[estilo.mainTitle, {color: "#FFF"}]}>Sigvard</Text>
      {/* <ProgressBar progress={0.5} style={estilo.loadingBar} color={MD3Colors.primary20} indeterminate/> */}
      <ActivityIndicator size={50} color="#FFF"/>
      <BtnNavigate corFundo={"#000"} corTexto={"#fff"} route={'Login'} titulo={'Login'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap : 40,
    backgroundColor: '#b3651c',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },

});
