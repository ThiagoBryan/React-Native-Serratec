import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './components/icones';
import Rotas from './Rotas';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabBar />
      {/* <Rotas /> */}
    </NavigationContainer>
  );
}