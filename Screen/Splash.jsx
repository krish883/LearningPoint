import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const Splash = ({ navigation }) => {


    

    useEffect(() => {
        const timer = setTimeout(() => {
          
            navigation.replace('Main'); 
        }, 2000); 
    
        return () => clearTimeout(timer); 
      }, [navigation]);
    
  return (
    <View style={styles.container}>
      <Text style = {{fontSize:24, color:'black', fontWeight:'700', marginBottom:50}}>Welcome to Learning Point!</Text>
      <Image
        source={require('../Component/Assets/LP.jpg')}
        style={styles.image}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', 
      },
      image: {
        width: 175,
        height: 165,
        borderRadius: 20,
        marginTop: 3,
        marginLeft: 10,
      },
})