import React from "react";
import { StyleSheet } from "react-native";

export default estilo = StyleSheet.create({
  container: {
    flex: 1,
    gap : 20,
    backgroundColor: '#F2AF29',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerVertical: {
    margin: 20,
    paddingHorizontal : 24,
    paddingVertical : 32,
    gap : 10,
    borderRadius : 10,
    justifyContent : "center",
    // alignItems : "center",
    // boxShadow : "0px 5px 10px rgba(0,0,0,0.5)"
  },

  containerGrid: {
    flexDirection : "row",
    padding : 20,
    flex : 2, 
    flexWrap : "wrap", 
    gap : 20, 
    justifyContent : "center", 
    alignContent : "center",
    // boxShadow : "0px 5px 10px rgba(0,0,0,0.5)"
  },

  boxInputHor: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 20,
  },

  inputBoxUnique: {
    width: 40,
    fontSize: 18,
    backgroundColor: "#9292924d",
    borderRadius: 5,
    textAlign: "center"
  },

  header : {
    height : 80,
    borderBottomColor : "#000",
    borderBottomWidth : 2,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-evenly",
  },

  imagemPerfil : {
    width : 150,
    height : 150,
    borderRadius : 300,
  },

  imagemChatCard : {
    width : 70,
    height : 70,
    borderRadius: 10
  },

  imagemBtn : {
    width: 40,
    height: 40,
    borderRadius: 200,
  },

  loadingBar : {
    backgroundColor : '#FFF',
    width: 250,
    height: 7,
    borderRadius: 10,
  },  

  mainTitle : {
    fontSize : 26,
    fontWeight : "bold",
    // fontFamily : "BBHSansBartle-Regular",
  },

  secTitle : {
    fontSize : 20,
    fontWeight : "bold",
    // fontFamily : "BBHSansBogle-Regular",
  },

  text16 : {
    fontSize : 16, 
    fontWeight : "600"
  },
  text18 : {
    fontSize : 18, 
    fontWeight : "600"
  },

  btnSmall : {
    alignItems : "center",
    padding : 12,
    borderRadius : 5
  },

  btnLargeSquare : {
    gap : 10,
    justifyContent : "center",
    alignItems : "center",
    padding : 10,
    borderRadius : 15
  },

  btnText : {
    fontWeight : "bold",
    fontSize : 18,
    color : "#FFF"
  },

  input2 : {
    marginVertical: 10,
    padding : 10,
    fontSize : 16,
    borderStyle : "solid",
    borderBottomWidth : 2,
    borderRadius : 5,
  },

  input1 : {
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between",
    paddingVertical : 4,
    paddingHorizontal : 12,
    borderStyle : "solid",
    borderWidth : 2,
    borderRadius : 10,
    marginBottom : 5,
    borderBottomWidth : 2,
  },
});