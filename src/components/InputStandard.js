import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, } from 'react-native-paper';

export default InputStandard = ({texto, icone, icone2, senhaAtiva}) => {
  const [text, setText] = React.useState("");
  const [pass, setPass] = React.useState(senhaAtiva);

  return(
    <View>
      <TextInput 
        label={texto}
        value={text}
        mode='outlined'
        activeOutlineColor='#F6AA1C'
        // activeUnderlineColor='#F6AA1C'
        onChangeText={text => setText(text)}
        left={<TextInput.Icon icon={icone} color="#000"/>}
        maxLength={100}
        right={
          <TextInput.Icon icon={icone2} color="#c0c0c0" 
            onPress={() => {
              pass == true ? setPass(false) : setPass(true); 
          }}/>
        }
        secureTextEntry={pass}
        style={{backgroundColor: "transparent", marginBottom: 10,}}/>        
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
