import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screen/Profile';
import Home from '../Screen/Home';

import Content from '../Screen/Content';
import Splash from '../Screen/Splash';
import WebView from 'react-native-webview';
import WebViewscreen from '../Screen/WebViewscreen';
import Web from '../Screen/Web';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Homes from '../Screen/Homes';
import Explore from '../Screen/Explore';
import Saved from '../Screen/Saved';
import Profiles from '../Screen/Profiles';
import Details from '../Screen/Details';
import Headers from './Headers';






const Stack = createStackNavigator();

const RenderHeader = () => {
    return (
      <View style={{backgroundColor: '#ffff', height: 80}}>
          <Headers />
        </View>
    );
  };
  


  
  
  const TabNavigation = () => {
      return (
        <Tab.Navigator screenOptions={{
    
          header: RenderHeader, // Render the header for each screen
          headerShown: true,
        }}>
          <Tab.Screen
            name="Homes"
            component={Homes}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" color={"green"} size={size} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Explore"
            component={Explore}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ellipse-outline" color={"green"} size={size} />
              ),

              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Saved"
            component={Saved}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="add-outline" color={"green"} size={size} />
              ),
              
            headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profiles"
            component={Profiles}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbubbles-outline" color={"green"} size={size} />
              ),

              headerShown: false,
            }}
          />
          
    
             
        </Tab.Navigator>
      )
    }
  const Tab = createBottomTabNavigator();
 
  
  
 
const LoginNavigation = () => {
  return (
    <Stack.Navigator>


<Stack.Screen name="Main" component={TabNavigation} options={
        {
            headerShown:false
        }
    }/>


<Stack.Screen name="Details" component={Details} options={
        {
            headerShown:false
        }
    }/>


    
   




  </Stack.Navigator>
  )
}

export default LoginNavigation

const styles = StyleSheet.create({})