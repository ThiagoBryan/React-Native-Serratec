import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ConsultarProdutos from "../../src/sreens/ConsultarProdutos";
import Produtos from "../../src/sreens/Produtos";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../../src/sreens/Home";
import Categoria from "../../src/sreens/Categoria";
import Usuario from "./../../src/sreens/Usuario/index";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Usuario") {
            iconName = focused ? "person" : "person";
          } else if (route.name === "Produtos") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Categoria") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "yellow",
        tabBarInactiveBackgroundColor: "black",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Usuario"
        component={Usuario}
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

      <Tab.Screen
        name="Categoria"
        component={Categoria}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
