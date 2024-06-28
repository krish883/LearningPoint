import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
       <View style={styles.head}></View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    head: {
        backgroundColor: '#dcdcdc',
        height: 90,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 10, // This elevation is for Android
       
      
      }
})