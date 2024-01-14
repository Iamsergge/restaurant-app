// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Category from './components/Category';
import CategoryDetail from './components/CategoryDetails';
import RestaurantDetail from './components/RestaurantDetails';
import PromoDetail from './components/PromoDetails';
import Cart from './components/Cart'; // Import the Cart component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
        <Stack.Screen name="PromoDetail" component={PromoDetail} />
        <Stack.Screen name="Cart" component={Cart} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
