import { StyleSheet, Text, View ,Image , TextInput} from 'react-native'
import React , { useState }  from 'react'
import SocialMediaPost from '../Component/SocialMediaPost';
import { ScrollView } from 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import Fontisto from 'react-native-vector-icons/Fontisto';

const Homes = () => {
  const navigation = useNavigation();
  const [selectedHead, setSelectedHead] = useState('Top Stories');

  const handleHeadSelection = (head) => {
    setSelectedHead(head);
  };


  const dummy = [
    {
      img: require('../Component/Assets/Mob1.jpg'),
      category: 'Technology',
      headline: 'World Loudest SmartPhone Introduced',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },

    {
      img: require('../Component/Assets/Mob1.jpg'),
      category: 'Technology',
      headline: 'World Loudest SmartPhone Introduced',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },

    {
      img: require('../Component/Assets/Mob1.jpg'),
      category: 'Technology',
      headline: 'World Loudest SmartPhone Introduced',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },

   
  ];




  const dummys = [
    {
      img: require('../Component/Assets/iphone.jpg'),
      category: 'Technology',
      headline: 'World Fastest SmartPhone Introduced',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },

    {
      img: require('../Component/Assets/iphone2.jpg'),
      category: 'Technology',
      headline: 'Lap SmartPhone Introduced',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },

    {
      img: require('../Component/Assets/iphone3.jpg'),
      category: 'Technology',
      headline: 'Virtual SmartPhone Introduced',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },

   
  ];


  const dummyPost = [
    {
      img: require('../Component/Assets/Oliimg.png'),
      heading: 'Jason Bruno',
         content: 'Apple will announce ios 14.3 in December end 2022',
      postImg: require('../Component/Assets/iphone.jpg'),
      byname: 'Leo Schleifer',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },

    {
      img: require('../Component/Assets/SopImg.png'),
      heading: 'Jason Bruno',
      time: '5h',
      content: 'Apple will announce ios 14.5 in January end 2023',
      postImg:require('../Component/Assets/iphone2.jpg') ,
      byname: 'Leo Schleifer',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },


    {
      img: require('../Component/Assets/Oliimg.png'),
      heading: 'Jason Bruno',
         content: 'Apple will announce ios 14.6 in February end 2023',
      postImg: require('../Component/Assets/iphone3.jpg'),
      byname: 'Leo Schleifer',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },


  

    

    
    
  ];
  return (


    <ScrollView>
      <View style={{flexDirection:'row', justifyContent:'space-between', margin:20}}>
        <View >
        <Text style={{fontSize:26,color:'black',fontWeight:'900'}}>Today </Text>
        <Text style={{fontSize:15,color:'grey',fontWeight:'600'}}>Friday, 12 July</Text>
        </View>

        <Image source={require('../Component/Assets/prof.jpg')} style={{width:50,height:50, borderRadius:15}}></Image>
        
      </View>


      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for hashtags here"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      <View  style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
        <Text style={{fontSize:18,color:'black',fontWeight:'700'}}>Trending Blogs</Text>
        <Text style={{fontSize:15,color:'grey',fontWeight:'600'}}>View All</Text>
      </View>


      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.contentContainer}>
      
        
        {dummyPost.map((post, index) => (
    <SocialMediaPost key={index} data={post} />
  ))}
        
     
      </ScrollView>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.headContainer}>
        
      <View  style={[ selectedHead === 'Top Stories' ? styles.Head : null]}>
      <Text
          style={[styles.headText, selectedHead === 'Top Stories' ? styles.selectedHead : null]}
          onPress={() => handleHeadSelection('Top Stories')}
        >
          Top Stories
        </Text>
      </View>
      
       <View  style={[ selectedHead === 'World' ? styles.Head : null]}>
       <Text
          style={[styles.headText, selectedHead === 'World' ? styles.selectedHead : null]}
          onPress={() => handleHeadSelection('World')}
        >
          World
        </Text>
        
        </View> 


        <View   style={[ selectedHead === 'Technology' ? styles.Head : null]}>
        <Text
          style={[styles.headText, selectedHead === 'Technology' ? styles.selectedHead : null]}
          onPress={() => handleHeadSelection('Technology')}
        >
          Technology
        </Text>
        </View>
       


       <View  style={[ selectedHead === 'Business' ? styles.Head : null]}>
       <Text
          style={[styles.headText, selectedHead === 'Business' ? styles.selectedHead : null]}
          onPress={() => handleHeadSelection('Business')}
        >
          Business
        </Text>
       </View>
        
    <View  style={[ selectedHead === 'Trade' ? styles.Head : null]}>
        <Text
          style={[styles.headText, selectedHead === 'Trade' ? styles.selectedHead : null]}
          onPress={() => handleHeadSelection('Trade')}
        >
          Trade
        </Text>
    </View>
       
      </ScrollView>


     
      {selectedHead === 'Top Stories' ? (
        <View>
        {dummy.map((item, index) => (
          <View  key={index} style={styles.postContainer}>
           <View style={{flexDirection:'row'}}>
             
            <Image source={item.img} style={{height:87,width:87, borderRadius:10,padding:10}}>

              
            </Image>


            <View style={styles.textContainer}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.headline}>
           {item.headline}
          </Text>
          <View style ={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
          <View style={{flexDirection:'row'}}>
         <Ionicons name="heart-outline" color={"green"} size={15} />
         <Text style={{color:'black', fontSize:12, fontWeight:'600',marginLeft:6}}>{item.likes}K</Text>
          </View> 
        <View style={{flexDirection:'row'}}>
         <Fontisto name="commenting" color={"green"} size={14} />
        <Text style={{color:'black', fontSize:12, fontWeight:'600',marginLeft:6}}>{item.comments}</Text>
        </View>
        

        <View style={{flexDirection:'row'}}>
        
       <Fontisto name="share-a" color={"green"} size={14}/>
        <Text style={{color:'black', fontSize:12, fontWeight:'600' ,marginLeft:6}}>{item.shares}</Text>

        </View>
        </View>
        </View>

           </View>
          </View>
          
        ))}

</View>
      ) :(<View>
       {dummys.map((item, index) => (
          <View  key={index} style={styles.postContainer}>
           <View style={{flexDirection:'row'}}>
             
            <Image source={item.img} style={{height:87,width:87, borderRadius:10,padding:10}}>

              
            </Image>


            <View style={styles.textContainer}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.headline}>
           {item.headline}
          </Text>
          <View style ={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
         <View style={{flexDirection:'row'}}>
         <Ionicons name="heart-outline" color={"green"} size={15} />
         <Text style={{color:'black', fontSize:12, fontWeight:'600',marginLeft:6}}>{item.likes}K</Text>
          </View> 
        <View style={{flexDirection:'row'}}>
         <Fontisto name="commenting" color={"green"} size={14} />
        <Text style={{color:'black', fontSize:12, fontWeight:'600',marginLeft:6}}>{item.comments}</Text>
        </View>
        

        <View style={{flexDirection:'row'}}>
        
       <Fontisto name="share-a" color={"green"} size={14}/>
        <Text style={{color:'black', fontSize:12, fontWeight:'600' ,marginLeft:6}}>{item.shares}</Text>

        </View>
        
        </View>
        </View>

           </View>
          </View>
          
        ))}
      </View>)}
      

    </ScrollView>
  )
}

export default Homes

const styles = StyleSheet.create({


  Head:{
   
   borderRadius:15,
   backgroundColor : '#0076CE',
  },

  searchInput: {
    backgroundColor: '#ffff',
    height: 50,
    borderRadius: 12,
    margin:12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  
  contentContainer: {
    paddingHorizontal: 15,
  },
  headContainer:{
    flexDirection:'row',
    margin:10
  },
  headText: {
    color: 'black',
    margin: 12,
    fontSize: 15,
    fontWeight: '700',
    marginHorizontal:15
  },
  selectedHead: {
    color:'white',
    fontSize:14,
    fontWeight:'400',
    borderRadius:10,
    marginHorizontal:15
    
  },

  postContainer:{
    
    backgroundColor:'#ffff',
    marginLeft: 30,
    marginRight:30,
    borderRadius:10,
    elevation: 1, 
    padding:10,
    marginBottom:15
   
  },

  textContainer: {
    marginLeft: 20,
    flex:1
   
  },
  category: {
    fontWeight: 'bold',
   
  },
  headline: {
    marginTop:4,
    flexWrap: 'wrap',
    fontWeight:'700',
    color:'black'
  },

  footerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop:10
  },
  postFooterText: {
    color: '#555',
  }



  
  
})