import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ConsultarProdutos from "../../src/sreens/ConsultarProdutos";
import Produtos from "../../src/sreens/Produtos";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ConsultarProdutos"
        component={ConsultarProdutos}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={Produtos}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
