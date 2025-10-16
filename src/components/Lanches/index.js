import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, StatusBar, Image } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from "../estilo";

const DATA = [
  {
    id: '1',
    titulo: 'Puro beef',
    descricao : 'Pão crocante, carne bovina, molho especial, cheddar',
    valor: '34,90',
  },
  {
    id: '2',
    titulo: 'Over Beef',
    descricao : 'Pão crocante, carne bovina, molho especial, cheddar',
    valor: '34,90',
  },
  {
    id: '3',
    titulo: 'Rustic Beef',
    descricao : 'Pão crocante, carne bovina, molho especial, cheddar',
    valor: '34,90',
  },
  {
    id: '4',
    titulo: 'Vegan beef',
    descricao : 'Pão crocante, carne bovina, molho especial, cheddar',
    valor: '34,90',
  },
  {
    id: '5',
    titulo: 'Double Beef',
    descricao : 'Pão crocante, carne bovina, molho especial, cheddar',
    valor: '34,90',
  },
];

const ItemView = ({titulo, descricao, valor}) => (
  <View style={estiloInterno.itemStyle}>
    <Image source={require('../../assets/images/cheeseburger.png')} style={{width: 90, height: 90}}/>
    <View style={{gap: 10}}>
      <Text style={estiloInterno.tituloprincipal}>{titulo}</Text>
      <Text style={estiloInterno.subtitulo}>{descricao}</Text>
      <Text>R$ {valor}</Text>
    </View>
  </View>
)

export default props => {
  return(
    <View style={estilo.container}>
      <View style={estiloInterno.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <ItemView titulo={item.titulo} descricao={item.descricao} valor={item.valor}/>}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const estiloInterno = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  itemStyle: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  tituloprincipal: {
    fontSize: 22,
    fontWeight: "bold"
  },
  subtitulo : {
    fontSize: 14,
    width: '90%',
  },
});