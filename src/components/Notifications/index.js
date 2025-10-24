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
    descricao: 'Nova notificação',
    dataNot: '22/10/2025',
    horaNot: '10:00',
  },
  {
    id: '2',
    descricao: 'Nova notificação',
    dataNot: '22/10/2025',
    horaNot: '10:00',
  },
  {
    id: '3',
    descricao: 'Nova notificação',
    dataNot: '22/10/2025',
    horaNot: '10:00',
  },
  {
    id: '4',
    descricao: 'Nova notificação',
    dataNot: '22/10/2025',
    horaNot: '10:00',
  },
  {
    id: '5',
    descricao: 'Nova notificação',
    dataNot: '22/10/2025',
    horaNot: '10:00',
  },
];

const ItemView = ({descricao, dataNot, horaNot}) => (
  <View style={estiloInterno.itemStyle}>
    <Icon name="bell" size={30}/>
    <View style={{gap: 10}}>
      <Text style={estiloInterno.subtitulo}>{descricao}</Text>
      <Text>{dataNot} - {horaNot}</Text>
    </View>
  </View>
)

export default props => {
  return(
    <View style={estilo.container}>
      <View style={estiloInterno.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <ItemView dataNot={item.dataNot} descricao={item.descricao} horaNot={item.horaNot}/>}
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