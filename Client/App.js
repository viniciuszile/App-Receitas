import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Cadastro from "./Components/Cadastro/Cadastro";
import Administrador from "./Components/Pages/Administrador/Administrador";
import Receitas from "./Components/Pages/Receitas/Receitas";
import Login_Adm from "./Components/Pages/Login_Adm/Login_Adm";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <View>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name = 'Home' component={Home} /> 
      <Stack.Screen name = 'Cadastro' component={Cadastro} /> 
      <Stack.Screen name = 'Login' component={Login} /> 
      <Stack.Screen name = 'Administrador' component={Administrador} /> 
      <Stack.Screen name = 'Receitas' component={Receitas} /> 
      <Stack.Screen name = 'Login_Adm' component={Login_Adm} /> 
    </Stack.Navigator>
  </NavigationContainer>
  </View>
  );
}
