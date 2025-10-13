import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from "./estilo";

export default BtnGoBack = ({corTexto, corFundo, titulo}) => {
  const navigation = useNavigation();

  return(
    <View>
      <TouchableOpacity
        style={[estilo.btnSmall, {backgroundColor : corFundo, alignItems : 'center', flexDirection : 'row', justifyContent : 'center', gap : 10}]}
        onPress={() => {navigation.goBack();}}>
        <Icon name="arrow-left" size={12} color={corTexto}/>
        <Text style={[estilo.btnText, {color : corTexto}]}>{titulo}</Text>
      </TouchableOpacity>
    </View>
  );
}

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
