import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Products' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
