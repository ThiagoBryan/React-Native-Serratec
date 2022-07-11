import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtos from "../src/sreens/Produtos";
import ConsultarProdutos from "../src/sreens/ConsultarProdutos";
import Login from "../src/sreens/Login";
import Home from "../src/sreens/Home";
import Usuario from './../src/sreens/Usuario/index';
import Categoria from './../src/sreens/Categoria/index';
import ConsultarCategoria from './../src/sreens/ConsultarCategoria/index';

const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="ConsultarCategoria"
        component={ConsultarCategoria}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Usuario"
        component={Usuario}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Categoria"
        component={Categoria}
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
     
    </Stack.Navigator>
  );
};

export default Rotas;
