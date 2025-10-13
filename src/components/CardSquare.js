import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ToastAndroid } from "react-native";
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Button } from '@react-navigation/elements';
import estilo from "./estilo";
import Icon from "react-native-vector-icons/FontAwesome";

export default CardSquare = ({route, cardIcon, cardTitle, tamanho}) => {
  const navigation = useNavigation();

  return(
    <View>
      <TouchableOpacity 
        onPress={() => {navigation.navigate(route)}}
        style={[estilo.btnLargeSquare, { backgroundColor : "#000", height : tamanho, width : tamanho }]}>
        <Icon name={cardIcon} size={32} color="#FFF"/>
        <Text style={{fontSize : 16, color : "#FFF", fontWeight : 500, textAlign : "center"}}>{cardTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}