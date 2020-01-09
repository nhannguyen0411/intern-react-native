/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import { ScrollView, View, Image, TouchableOpacity, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenTask from './src/components/ScreenTask';
import ScreenLogin from './src/components/ScreenLogin';
import ScreenRegister from './src/components/ScreenRegister';
import ScreenLoad from './src/components/ScreenLoad';
import ScreenProducts from './src/Screen/ScreenProduct';
import ScreenDetail from './src/Screen/ScreenDetail';
import DataProduct from './src/Screen/DataProduct';
import ScreenCart from './src/Screen/ScreenCart';
import { CartProvider } from './src/contexts/Cart';

const RootStack = createStackNavigator(
  {
    Home: ScreenLoad,
    Login: ScreenLogin,
    Task: ScreenTask,
    Register: ScreenRegister,
    Product: DataProduct,
    DetailProduct: ScreenDetail,
    Cart: ScreenCart
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return(
      <CartProvider>
        <AppContainer />
      </CartProvider>
    ) 
  }
}