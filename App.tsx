/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
 
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoginNavigation from './Component/LoginNavigation';
import Home from './Screen/Home';




const App = () => {
  return (
   <>

<NavigationContainer>

<LoginNavigation/>

</NavigationContainer>


  
     

     
     





</>
  
  );
};

const styles = StyleSheet.create({
  
});

export default App;
