import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../Screen/Profile';
import Home from '../Screen/Home';

import Content from '../Screen/Content';






const Stack = createStackNavigator();

const RenderHeader = () => {
    return (
      <View style={{backgroundColor: '#ffff', height: 80}}>
          <Header />
        </View>
    );
  };
  
  
 
const LoginNavigation = () => {
  return (
    <Stack.Navigator>
    
    <Stack.Screen name="Main" component={Home} options={
        {
            headerShown:false
        }
    }/>



<Stack.Screen name="Content" component={Content} options={
        {
            headerShown:false
        }
    }/>




    <Stack.Screen name="Profile" component={Profile} 
     options={
      {
          headerShown:false
      }
  }/>
  </Stack.Navigator>
  )
}

export default LoginNavigation

const styles = StyleSheet.create({})