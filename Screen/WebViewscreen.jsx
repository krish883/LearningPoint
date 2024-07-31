import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { WebView } from 'react-native-webview';


const WebViewscreen = ({ route }) => {

    
    const { url } = route.params;


   
  const isWebUrl = url.startsWith('http://') || url.startsWith('https://');

  
  const source = isWebUrl ? { uri: url } : { uri: `file:///android_asset/${url}` };


    return <WebView source={source} />;
}

export default WebViewscreen

const styles = StyleSheet.create({})