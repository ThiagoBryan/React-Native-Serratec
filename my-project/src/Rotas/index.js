import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Quadrados } from "./../screens/Quadrados/index";
import { Contador } from "./../screens/Contador/index";
import Favoritos from './../screens/Favoritos/index';
import Teste from './../screens/Teste/index';
import Home from './../screens/Home/index';
import CadastroProdutos from "../screens/CadastroDeProdutos";


const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
      name="CadastroProdutos"
      component={CadastroProdutos}
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
        name="Quadrados"
        component={Quadrados}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Contador"
        component={Contador}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Teste"
        component={Teste}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Rotas;
