import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
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
        <Text style={[estilo.secTitle, {marginBottom : 16, textAlign : "center"}]}>Crie sua conta</Text>
        
        <InputStandard texto={"Nome"} icone={"account"} icone2={""} senhaAtiva={false}/>

        <InputStandard texto={"Email"} icone={"email"} icone2={"close-circle-outline"} senhaAtiva={false}/>

        <InputStandard texto={"Senha"} icone={"lock"} icone2={"eye"} senhaAtiva={true}/>

        <InputStandard texto={"Confirmar senha"} icone={""} icone2={""} senhaAtiva={true}/>
        
        <BtnNavigate corTexto={"#000"} corFundo={"#F2AF29"} route={'MenuPrincipal'} titulo={"Criar conta"}/>
        
        <TouchableOpacity
          style={{flexDirection : 'row', gap: 5, justifyContent : 'flex-end'}}
          onPress={() => {navigation.goBack()}}
          >
          <Text>Já possuí conta?</Text>
          <Text style={{color: "#F6AA1C", fontWeight : '700'}}>Clique aqui</Text>
        </TouchableOpacity>

        <Text style={[estilo.text16, {textAlign: 'center', marginVertical: 20}]}>Cadastre-se com</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/google.png')} style={estilo.imagemBtn}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/facebook.png')} style={estilo.imagemBtn}/>
          </TouchableOpacity>
        </View>
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
