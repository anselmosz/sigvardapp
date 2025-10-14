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
        <Text style={[estilo.secTitle, {marginBottom : 16, textAlign : "center"}]}>Digite sua nova senha</Text>

        <InputStandard texto={"Nova senha"} icone={"lock"} icone2={"eye"} senhaAtiva={true}/>

        <InputStandard texto={"Confirmar senha"} icone={""} icone2={""} senhaAtiva={true}/>
        
        <TouchableOpacity
          style={{flexDirection : 'row', gap: 5, justifyContent : 'flex-end'}}
          onPress={() => {navigation.popToTop()}}
          >
          <Text>Já possuí conta?</Text>
          <Text style={{color: "#F6AA1C", fontWeight : '700'}}>Clique aqui</Text>
        </TouchableOpacity>

        <BtnNavigate corTexto={"#000"} corFundo={"#F2AF29"} route={'MenuPrincipal'} titulo={"Redefinir senha"}/>
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
