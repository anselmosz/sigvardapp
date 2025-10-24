import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import MenuPrincipal from "../components/MenuPrincipal";
import Splash from "../components/Splash";
import Login from "../components/Login";
import Signin from "../components/Signin";
import EsqueceuSenha from "../components/EsqueceuSenha";
import Auth2fa from "../components/Auth2fa";

const Drawer = createDrawerNavigator();

export default props => {
  return(
    <Drawer.Navigator drawerContent={props=> <CustomDrawer/>} screenOptions={{
      
    }}>
      <Drawer.Screen name="Splash" component={Splash}/>
      <Drawer.Screen name="Login" component={Login}/>
      <Drawer.Screen name="Signin" component={Signin}/>
      <Drawer.Screen name="EsqueceuSenha" component={EsqueceuSenha}/>
      <Drawer.Screen name="Auth2fa" component={Auth2fa}/>
      <Drawer.Screen name="MenuPrincipal" component={MenuPrincipal}/>
    </Drawer.Navigator>
  )
}
