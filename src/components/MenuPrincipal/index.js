import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from "../estilo";
import CardSquareIcon from '../CardSquareIcon';
import CardSquareImage from '../CardSquareImage';


export default props => { // Configurações do MENU
  return (
    <View style={estilo.container}>

      <View style={[estilo.containerGrid]}>
        <CardSquareImage 
          route={'Lanches'} 
          cardTitle={'Lanches'} 
          tamanho={190} 
          caminhoDaImagem={require('../../assets/images/cheeseburger.png')}/>
        
        <CardSquareImage
          route={''} 
          cardTitle={'Combos'} 
          tamanho={190}
          caminhoDaImagem={require('../../assets/images/combo.png')}/>
        
        <CardSquareImage
          route={''} 
          cardTitle={'Acompanhamentos'} 
          tamanho={190}
          caminhoDaImagem={require('../../assets/images/fried-potatoes.png')}/>
          
        <CardSquareImage 
          route={'Bebidas'} 
          cardTitle={'Bebidas'} 
          tamanho={190} 
          caminhoDaImagem={require('../../assets/images/drinks.png')}/>

        <CardSquareImage 
          route={''} 
          cardTitle={'Sobremesas'} 
          tamanho={190} 
          caminhoDaImagem={require('../../assets/images/panna-cotta.png')}/>

        
        <CardSquareImage 
          route={''} 
          cardTitle={'Meus Pedidos'} 
          tamanho={190} 
          caminhoDaImagem={require('../../assets/images/delivery-man.png')}/>
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
