import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from "./estilo";

export default BtnSendToast = ({corTexto, corFundo, mensagem, route, titulo}) => {
  const navigation = useNavigation();

  return(
    <View>
      <TouchableOpacity
        style={[estilo.btnSmall, {backgroundColor : corFundo, }]}
        onPress={() => {ToastAndroid.show(mensagem, ToastAndroid.SHORT); navigation.navigate(route)}}>
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
