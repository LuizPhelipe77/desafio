import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/Routes';
import CartProvider from './src/contexts/CartContexts'


export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor='#fafafa' barStyle='dark-content' />
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}

