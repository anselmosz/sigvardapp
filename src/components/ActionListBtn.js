import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from "./estilo";

export default ActionListBtn = ({route, iconName, titulo}) => {
  const navigation = useNavigation();

  return(
    <View>
      <TouchableOpacity 
        onPress={() => {navigation.setOptions({title : route})}} // SETOPTIONS definido de maneiro temporária para depois adicionar mais telas
        style={{alignItems : 'center', flexDirection : 'row', justifyContent : 'space-evenly', width : '100%'}}>
        <View style={{alignItems : 'center', flexDirection : 'row', gap: 16}}>
          <Icon name={iconName} size={30} color="#005E7C"/>
          <Text style={estilo.secTitle}>{titulo}</Text>
        </View>
        <Icon name="angle-right" size={26}/>
      </TouchableOpacity>
    </View>
  )
}