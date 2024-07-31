import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Fontisto from 'react-native-vector-icons/Fontisto';



const Explore = () => {

  const navigation = useNavigation();
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
  return (
    <ScrollView>

      <View style={styles.contenthead}>
        <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
          <Image
            source={require('../Component/Assets/arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Explore</Text>
      </View>


      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for hashtags here"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      <View>
        <Text style={{ fontSize: 15, fontWeight: '600', color: 'black', marginLeft: 20, marginTop: 10, marginBottom: 15 }}>Recent Search</Text>

        <View style={{ marginBottom: 20, flexDirection: 'row' , justifyContent:'space-between'}}>
          <Text style={{ marginLeft: 20, color: 'grey' }}>Economy News</Text>
           <Entypo name="cross" color={"grey"} size={14} style={{marginEnd:20}}/>
        </View>

        <View style={{ marginBottom: 20, flexDirection: 'row' , justifyContent:'space-between'}}>
          <Text style={{ marginLeft: 20, color: 'grey' }}>Business</Text>
          <Entypo name="cross" color={"grey"} size={14} style={{marginEnd:20}}/>
        </View>


        <View style={{ marginBottom: 20, flexDirection: 'row' , justifyContent:'space-between'}}>
          <Text style={{ marginLeft: 20, color: 'grey' }}>Crypto Markets</Text>
          <Entypo name="cross" color={"grey"} size={14} style={{marginEnd:20}}/>
        </View>

        <View style={{ marginBottom: 20, flexDirection: 'row' , justifyContent:'space-between'}}>
          <Text style={{ marginLeft: 20, color: 'grey' }}>Technology News</Text>
          <Entypo name="cross" color={"grey"} size={14} style={{marginEnd:20}}/>
        </View>


      </View>

      <View>
        <Text style={{ fontSize: 15, fontWeight: '600', color: 'black', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>Popular Tags</Text>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 7, marginStart: 20 }}>
        <View style={styles.interest}>
          <Text style={{ color: '#6495ED', fontSize: 12, fontWeight: '900' }}>#business</Text>
        </View>
        <View style={styles.interest}>
          <Text style={{ color: '#6495ED', fontSize: 12, fontWeight: '900' }}>#crypto</Text>
        </View>
        <View style={styles.interest}>
          <Text style={{ color: '#6495ED', fontSize: 12, fontWeight: '900' }}>#science</Text>
        </View>

        <View style={styles.interest}>
          <Text style={{ color: '#6495ED', fontSize: 12, fontWeight: '900' }}>#startup</Text>
        </View>

        <View style={styles.interest}>
          <Text style={{ color: '#6495ED', fontSize: 12, fontWeight: '900' }}>#technology</Text>
        </View>

        <View style={styles.interest}>
          <Text style={{ color: '#6495ED', fontSize: 12, fontWeight: '900' }}>#education</Text>
        </View>

        <View style={styles.interest}>
          <Text style={{ color: '#6495ED', fontSize: 12, fontWeight: '900' }}>#politics</Text>
        </View>

      </View>

      <View>
        <Text style={{ fontSize: 17, fontWeight: '700', color: 'black', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>Trending Blogs</Text>
      </View>



      {dummy.map((item, index) => (

        <View key={index} style={styles.postContainer}>


          <View style={{ flexDirection: 'row' }}>

            <Image source={item.img} style={{ height: 87, width: 87, borderRadius: 10, padding: 10 }}>


            </Image>


            <View style={styles.textContainer}>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.headline}>
                {item.headline}
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
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

    </ScrollView>
  )
}

export default Explore

const styles = StyleSheet.create({

  text: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 10
  },

  arrow: {
    marginTop: 3,
  },
  contenthead: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 20,
  },

  searchInput: {
    backgroundColor: '#ffff',
    height: 50,
    borderRadius: 12,
    margin: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 30
  },

  interest: {

    height: 32,
    backgroundColor: '#B9D9EB',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginVertical: 5,
    marginRight: 18,
    // Adjust spacing between interests
  },

  postContainer: {

    backgroundColor: '#ffff',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    elevation: 1,
    padding: 10,
    marginVertical: 15

  },

  textContainer: {
    marginLeft: 20,
    flex: 1

  },
  category: {
    fontWeight: 'bold',

  },
  headline: {
    marginTop: 4,
    flexWrap: 'wrap',
    fontWeight: '700',
    color: 'black'
  },

})