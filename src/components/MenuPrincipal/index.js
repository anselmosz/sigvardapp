import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from "../estilo";
import CardSquare from '../CardSquare';


export default props => { // Configurações do MENU
  return (
    <View style={estilo.container}>

      <View style={[estilo.containerGrid]}>
        <CardSquare route={'Chat'} cardIcon={'comments-o'} cardTitle={'Chat'} tamanho={150}/>
        {/* <CardSquare route={'Perfil'} cardIcon={'user'} cardTitle={'Perfil'} tamanho={150}/> */}
        <CardSquare route={'Configuracoes'} cardIcon={'gear'} cardTitle={'Configurações'} tamanho={150}/>
      </View>

    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap : 20,
//     backgroundColor: '#b3651c',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   mainTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFF',
//   },
// });
