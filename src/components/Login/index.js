import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from "../estilo";
import BtnNavigate from '../BtnNavigate';
import InputStandard from '../InputStandard';

export default props => { // Configurações da tela de LOGIN
  const [text, setText] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const navigation = useNavigation();
  
  return(

    <View style={estilo.container}>
      <View style={[estilo.containerVertical, {backgroundColor : "#FFFCF9", width : '90%', boxShadow : "0px 5px 10px rgba(0,0,0,0.5)"}]}>
        <Text style={[estilo.secTitle, {marginBottom : 16, textAlign : "center"}]}>Faça login e comece a usar</Text>
        
        <InputStandard texto={"Email"} icone={"email"} icone2={"close-circle-outline"} senhaAtiva={false}/>

        <InputStandard texto={"Password"} icone={"lock"} icone2={"eye"} senhaAtiva={true}/>
        
        <TouchableOpacity
          style={{flexDirection : 'row', gap: 5, justifyContent : 'flex-end'}}
          onPress={() => {navigation.navigate('ResetDeSenha')}}
          >
          <Text>Esqueceu sua senha?</Text>
          <Text style={{color: "#0094C6", fontWeight : '700'}}>Clique aqui</Text>
        </TouchableOpacity>

        <BtnNavigate corTexto={"#000"} corFundo={"#0094C6"} route={'MenuPrincipal'} titulo={"Login"}/>

        <BtnNavigate corTexto={"#FFF"} corFundo={"#000022"} titulo={"Switch to Sign up"}/>
      </View>
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
