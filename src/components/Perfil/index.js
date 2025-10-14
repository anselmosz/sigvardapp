import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import estilo from "../estilo";
import ActionListBtn from '../ActionListBtn';

export default props => {
  const navigation = useNavigation()

  return(
    <View style={estilo.container}>
      <View style={[estilo.containerVertical, {backgroundColor : "#FFFCF9", alignItems : 'center', width : '90%', boxShadow : "0px 5px 10px rgba(0,0,0,0.5)"}]}>
        <Text style={[estilo.secTitle, {marginBottom : 16, textAlign : "center"}]}>Profile</Text>
        
        <View style={{padding : 8, borderRadius : 300, borderWidth : 3, borderColor : "#000", marginBottom : 20,}}>
          <Image 
            source={require('../../assets/image.png')} 
            style={[estilo.imagemPerfil]}/>
        </View>
        <Text style={estilo.mainTitle}>Fulano Beltrano</Text>

        <View style={[{gap: 20, marginVertical : 40, alignItems : 'flex-start'}]}>
          <ActionListBtn route={'Profile'} iconName={'user-circle-o'} titulo={'Edit profile'}/>
          <ActionListBtn route={'Notifications'} iconName={'bell'} titulo={'Notifications'}/>
          <ActionListBtn route={'Location'} iconName={'map-marker'} titulo={'Shipping Address'}/>
          <ActionListBtn route={'Password'} iconName={'lock'} titulo={'Change password'}/>
        </View>
      </View>
    </View>
  );
}
