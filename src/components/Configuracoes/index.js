import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from "../estilo";
import ActionListBtn from '../ActionListBtn';
import BtnNavigate from '../BtnNavigate';
import BtnPopToTop from '../BtnPopToTop';

export default props => {
  const navigation = useNavigation();
  const [displayConfiugracao, setDisplayConfiguracao] = React.useState("none");

  return(
    <View style={estilo.container}>
      <View style={[estilo.containerVertical, {backgroundColor : "transparent", alignItems : 'center', boxShadow : "0px 5px 10px rgba(0,0,0,0)"}]}>
        <Text style={[estilo.mainTitle, {marginBottom : 16, textAlign : "center"}]}>General settings</Text>
        
        {/* <View style={{padding : 8, borderRadius : 300, borderWidth : 3, borderColor : "#000", marginBottom : 20,}}>
          <Image 
            source={require('../../assets/image.png')} 
            style={[estilo.imagemPerfil]}/>
        </View>
        <Text style={estilo.mainTitle}>Fulano Beltrano</Text> */}

        <View style={[{gap: 20, marginVertical : 40, alignItems : 'flex-start'}]}>
          <ActionListBtn
            iconName={'user-circle'} 
            titulo={'Conta'}
            configInternal={
              <BtnNavigate corFundo={"#000"} corTexto={"#fff"} titulo={"Texto"} route={'MenuPrincipal'}/>
            }/>

          <ActionListBtn
            iconName={'bell'} 
            titulo={'Notificações'}
            configInternal={
              <BtnNavigate corFundo={"#000"} corTexto={"#fff"} titulo={"Texto"} route={'MenuPrincipal'}/>
            }/>

          <ActionListBtn
            iconName={'map-marker'} 
            titulo={'Endereço'}
            configInternal={
              <BtnNavigate corFundo={"#000"} corTexto={"#fff"} titulo={"Texto"} route={'MenuPrincipal'}/>
            }/>

          <ActionListBtn
            iconName={'sign-out'} 
            titulo={'Sair do app'}
            configInternal={
              <>
                <BtnNavigate corFundo={"#000"} corTexto={"#fff"} titulo={"Sair do app"} route={'Splash'}/>
                <BtnPopToTop corFundo={"#000"} corTexto={"#c51a1a"} titulo={"Encerrar sessão"} />
              </>
            }/>
        </View>
      </View>
    </View>
  );
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