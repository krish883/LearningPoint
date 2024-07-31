import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'


import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Fontisto from 'react-native-vector-icons/Fontisto';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const Details = () => {

  const navigation = useNavigation();

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const imageSliderData = [
    { id: '1', imageUrl: require('../Component/Assets/Mob1.jpg') },
    { id: '2', imageUrl: require('../Component/Assets/Mob2.jpg') },
    { id: '3', imageUrl: require('../Component/Assets/Mob3.jpg') },
    { id: '4', imageUrl: require('../Component/Assets/Mob4.jpg') },
  ];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);
    setActiveIndex(index);
  };

  
  const scrollToIndex = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: index * screenWidth, animated: true });
    }
    setActiveIndex(index);
  };
  return (
    <ScrollView>
      <View style={styles.contenthead}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Image
            source={require('../Component/Assets/arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Details</Text>
      </View>


      <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 20 }}>
        <Image source={require('../Component/Assets/prof.jpg')} style={{ width: 25, height: 25, borderRadius: 30, marginRight: 14 }}></Image>
        <Text style={{ color: 'black', fontWeight: '700', fontSize: 13, marginRight: 10 }}>CoinGape</Text>
        <Text style={{ color: 'blue', fontWeight: '700', fontSize: 13 }}>Follow</Text>
      </View>


      <View style={{ marginTop: 25 }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: '800', marginStart: 15, marginEnd: 15 }}>
          Apple Will announce ios 14.3 in December end 2022
        </Text>
        <View style={{ width: 195 }}>
          <View style={{ flexDirection: 'row', marginTop: 20, marginStart: 25, justifyContent: 'space-between' }}>
          <View style={{flexDirection:'row'}}>
         <Ionicons name="heart-outline" color={"#6495ED"} size={17} />
         <Text style={{color:'black', fontSize:12, fontWeight:'600',marginLeft:6}}>46K</Text>
          </View> 
        <View style={{flexDirection:'row'}}>
         <Fontisto name="commenting" color={"#6495ED"} size={14} />
        <Text style={{color:'black', fontSize:12, fontWeight:'600',marginLeft:6}}>47K</Text>
        </View>
        

        <View style={{flexDirection:'row'}}>
        
       <Fontisto name="share-a" color={"#6495ED"} size={14}/>
        <Text style={{color:'black', fontSize:12, fontWeight:'600' ,marginLeft:6}}>23K</Text>

        </View>

          </View>
        </View>
      </View>
      <View style={{ marginTop: 25 }}>
       


        <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={200}
      >
        {imageSliderData.map((item, index) => (
          <Image
            key={item.id}
            source={item.imageUrl}
            style={{ width: screenWidth, height: screenHeight * 0.3, resizeMode: 'contain' }}
          />
        ))}
      </ScrollView>
        <View style={styles.paginationDots}>
          {imageSliderData.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
              onPress={() => scrollToIndex(index)}
            />
          ))}
        </View>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 7, marginStart: 20 }}>
        <View style={styles.interest}>
          <Text style={{ color: '#6495ED', fontSize: 12, fontWeight: '900' }}>#IOS</Text>
        </View>
        <View style={styles.interest}>
          <Text style={{ color: '#6495ED', fontSize: 12, fontWeight: '900' }}>#BLOGS</Text>
        </View>
        <View style={styles.interest}>
          <Text style={{ color: '#6495ED', fontSize: 12, fontWeight: '900' }}>#APPLE</Text>
        </View>


      </View>


      <View style={{ padding: 15, marginStart: 12, marginEnd: 12 }}>
        <Text style={{ color: '#A9A9A9', fontWeight: '500', lineHeight: 20 }}>So we spend another three weeks making those decisions. I can feel you screaming at me, "Come on, man! There is no way it takes three weeks to pick those libraries!"</Text>

        <Text style={{ marginTop: 15, color: '#A9A9A9', fontWeight: '500', lineHeight: 20 }}>Well, welcome to enterprise projects. There are many decisions. For each one, you have to create decision criteria, do research, validato findings by creating a proof of concept, present lindings document everything in the decision log, and keep libraries up to date. It takes a crazy amount of time, and it is not even fun.</Text>
      </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({

  text: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 27
  },

  contenthead: {
    height: 70,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',

    elevation: 1,

  },

  arrow: {
    marginTop: 30,
    marginLeft: 13
  },

  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#6495ED',
  },

  interest: {

    height: 32,
    backgroundColor: '#B9D9EB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginVertical: 5,
    marginRight: 18,
    // Adjust spacing between interests
  },
})