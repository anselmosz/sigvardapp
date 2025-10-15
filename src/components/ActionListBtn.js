import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from "./estilo";

export default ActionListBtn = ({iconName, titulo, configInternal}) => {
  const navigation = useNavigation();
  const [displayConfiugracao, setDisplayConfiguracao] = React.useState("none");
  let opcoesDoCard = configInternal;

  return(
    <View style={estiloInterno.containerView}>
      <TouchableOpacity 
        onPress={() => {displayConfiugracao == "none" ? setDisplayConfiguracao("flex") : setDisplayConfiguracao("none")}}
        style={estiloInterno.cardView}>
        <Icon name={iconName} size={30}/>
        <Text style={estilo.secTitle}>{titulo}</Text>
        <Icon name="angle-right" size={26}/>
      </TouchableOpacity>
      <View style={{display : displayConfiugracao, marginTop : 16}}>
        {opcoesDoCard}
      </View>
    </View>
  )
}

const estiloInterno = StyleSheet.create({
  containerView : {
    width: 380, 
    backgroundColor: "#fff", 
    borderRadius: 10, paddingVertical: 14, 
    paddingHorizontal: 40,
  },
  cardView : {
    alignItems : 'center',
    flexDirection : 'row', 
    justifyContent : 'space-between'
  },
})