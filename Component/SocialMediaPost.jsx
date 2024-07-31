import { StyleSheet, Text, View , ScrollView, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Fontisto from 'react-native-vector-icons/Fontisto';
const SocialMediaPost = ({data}) => {

  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.socialMediaPost}>
      <View style={styles.postHeader}>
       
     <Image source={ data.img} style={styles.profileImage} />

     
        <View style={styles.headerTextContainer}>
            <View>
            <Text style={styles.postHeading}>{data.heading}</Text>
            </View>
         
             <Text style={styles.postTime}>{data.time}</Text>
        </View>
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>

      <TouchableOpacity onPress={() => navigation.navigate('Details') }>
      <Image source={data.postImg} style={styles.postsImage} />

      </TouchableOpacity>
      </View>

      <View  style={{justifyContent:'left', padding:8}}>
      <TouchableOpacity onPress={() => navigation.navigate('Details') }>
      <Text style={styles.postContent}>{data.content}</Text>
      </TouchableOpacity>
      </View>
      
      
      
       
      <View style={styles.postFooter}>
       
      <View style={styles.footerIcon}>
      <View style={{flexDirection:'row'}}>
         <Ionicons name="heart-outline" color={"black"} size={15} />
         <Text style={{color:'black', fontSize:12, fontWeight:'600',marginLeft:6}}>{data.likes}K</Text>
          </View> 
        <View style={{flexDirection:'row'}}>
         <Fontisto name="commenting" color={"black"} size={14} />
        <Text style={{color:'black', fontSize:12, fontWeight:'600',marginLeft:6}}>{data.comments}</Text>
        </View>
        

        <View style={{flexDirection:'row'}}>
        
       <Fontisto name="share-a" color={"black"} size={14}/>
        <Text style={{color:'black', fontSize:12, fontWeight:'600' ,marginLeft:6}}>{data.shares}</Text>

        </View>
         
        </View>
      </View>
      
    </View>
    </ScrollView>
  )
}

export default SocialMediaPost

const styles = StyleSheet.create({
    socialMediaPost: {
        width:280,
       
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
       
      },
      postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      profileImage: {
        width: 32,
        height: 32,
        borderRadius: 20,
        marginRight: 10,
      },
      headerTextContainer: {
        flex: 1,
        flexDirection:'row'
      },
      postHeading: {
        color:'black',
        fontSize: 14,
      },
      postTime: {
        color: '#999',
        fontSize:10
      },
      postContent: {
        marginBottom: 1,
        fontSize:16,
        color:'black',
        fontWeight:'700'
      },
      footerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:10
      },
      footerIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop:10
      },
      postFooterText: {
        color: '#555',
      },
      
      postsImage: {
        width:255,
        height:140,
        borderRadius: 10,
        margin:2
      },
})