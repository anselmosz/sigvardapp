import React from "react";
import estilo from "../estilo";
import { Text, View, StyleSheet } from "react-native";

export default props => {
  return(
    <View style={{flex : 1, alignItems: 'center', justifyContent: "center"}}>
      <Text style={estilo.mainTitle}>Drawer custom</Text>
    </View>
  )
}