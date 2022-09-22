import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Cadastro from "./Components/Cadastro/Cadastro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name = 'Home' component={Home} /> 
      <Stack.Screen name = 'Cadastro' component={Cadastro} /> 
      <Stack.Screen name = 'Login' component={Login} /> 
    </Stack.Navigator>

  </NavigationContainer>
  );
}
