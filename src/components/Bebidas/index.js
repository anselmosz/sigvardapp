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
    titulo: 'Caipirinha',
    descricao: 'Clásico brasileiro: Limão, Cachaça, Açúcar',
    valor: '10,90',
  },
  {
    id: '2',
    titulo: 'Coca-cola 350ml',
    descricao: '',
    valor: '6,90',
  },
  {
    id: '3',
    titulo: 'Guaraná 200ml',
    descricao: '',
    valor: '5,90',
  },
  {
    id: '4',
    titulo: 'Heineken Longneck',
    descricao: '',
    valor: '14,80',
  },
  {
    id: '5',
    titulo: 'Suco de abacaxi 400ml',
    descricao: '',
    valor: '8,80',
  },
  {
    id: '6',
    titulo: 'Suco de limão 400ml',
    descricao: '',
    valor: '8,80',
  },
]

const ItemView = ({titulo, descricao, valor}) => (
  <View style={estiloInterno.itemStyle}>
    <Image source={require('../../assets/images/drinks.png')} style={{width: 90, height: 90}}/>
    <View style={{gap: 10, width: '90%'}}>
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
  },
});