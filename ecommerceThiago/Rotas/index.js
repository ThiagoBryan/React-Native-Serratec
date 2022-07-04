import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtos from "../src/sreens/Produtos";
import ConsultarProdutos from "../src/sreens/ConsultarProdutos";

import Login from "../src/sreens/Login";
import TabBar from "../components/TabBar";
import Home from "../src/sreens/Home";


const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      /> 
        <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    
       <Stack.Screen
        name="ConsultarProdutos"
        component={ConsultarProdutos}
        options={{
          headerShown: false,
        }}
      /> 
        <Stack.Screen
        name="TabBar"
        component={TabBar}
        options={{
          headerShown: false,
        }}
      /> 
     </Stack.Navigator>
  );
};

export default Rotas;
