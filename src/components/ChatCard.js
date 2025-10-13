import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from "./estilo";


export default ChatCard = ({notificacao, nomeContato, lastMessage}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity style={{flexDirection: 'row', width:  '100%', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10, backgroundColor : "#FFF"}}>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Image source={require('../assets/image.png')} style={estilo.imagemChatCard}/>
          <View>
            <Text style={estilo.secTitle}>{nomeContato}</Text>
            <Text style={{color: "#70747f"}}>{lastMessage}</Text>
          </View>
        </View>
        <Text style={{backgroundColor: "#000", padding: 5, color: "#fff", borderRadius: 20}}>{notificacao}</Text>
      </TouchableOpacity>
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
