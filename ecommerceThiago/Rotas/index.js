import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtos from "../src/sreens/Produtos";
import ConsultarProdutos from "../src/sreens/ConsultarProdutos";

const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Produtos"
        component={Produtos}
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
