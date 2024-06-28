import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'


import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();


  const [selectedCourse, setSelectedCourse] = useState('HTML');

  const handleCourseSelection = (courseData) => {
    setSelectedCourse(courseData);
    navigation.navigate('Content', { selectedCourse: courseData });
  };

  const courses = [
    { id: 1, name: 'HTML', image: require('../Component/Assets/web1.jpg') },
    { id: 2, name: 'CSS', image: require('../Component/Assets/web2.jpg') },
    { id: 3, name: 'Bootstrap', image: require('../Component/Assets/web3.jpg') },
    { id: 4, name: 'ReactJs', image: require('../Component/Assets/React.jpg') },

  ];

  const javacourses = [
    { id: 11, name: 'JAVA', image: require('../Component/Assets/IT1.jpg') },
    { id: 12, name: 'PLSQL', image: require('../Component/Assets/IT2.jpg') },
    { id: 13, name: 'JDBC', image: require('../Component/Assets/IT3.jpg') },
    { id: 14, name: 'SPRINGBOOT', image: require('../Component/Assets/Spring.jpg') },

  ];

  const AIcourses = [
    { id: 21, name: 'AI', image: require('../Component/Assets/AI.jpg') },
    { id: 22, name: 'AIPYTHON', image: require('../Component/Assets/AIPython.jpg') },
    { id: 23, name: 'ML', image: require('../Component/Assets/ML.jpg') },
    { id: 24, name: 'SCIKITLEARN', image: require('../Component/Assets/Learn.jpg') },

  ];


  const DScourses = [
    { id: 31, name: 'PYTHON', image: require('../Component/Assets/Python.jpg') },
    { id: 32, name: 'R', image: require('../Component/Assets/DS2.jpg') },
    { id: 33, name: 'POWERBI', image: require('../Component/Assets/DS3.jpg') },
    { id: 34, name: 'NUMPY', image: require('../Component/Assets/DS1.jpg') },

  ];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.head}>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Image source={require('../Component/Assets/LP.jpg')} style={{ width: 75, height: 65, borderRadius: 20, marginTop: 3, marginLeft: 10 }}></Image>
          
        <TextInput
          style={styles.searchInput}
          placeholder="Search for any courses.."
          placeholderTextColor="#A9A9A9"
        />
     
        </View>
      </View>


      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../Component/Assets/Homepage.jpeg')} style={{ width: 314, height: 164 , borderRadius:7}}></Image>
      </View>

      <View style={{ marginTop: 20, marginLeft: 12 }}>
        <Text style={{ fontWeight: '700', color: 'black', fontSize: 18 }}>
          All the skills you need in one place
        </Text>

        <Text style={{ fontWeight: '700', color: '#C0C0C0', fontSize: 14 }}>
          From critical skills to technical topics, LearningPoint support your professional development
        </Text>
      </View>


      <View style={{ marginTop: 20, marginLeft: 12 }}>


        <Text style={{ fontSize: 18, color: 'black' }}>
          Web Development Course
        </Text>
        <View style={{ borderBottomWidth: 2, borderColor: 'black', marginLeft: 3, height: 2, width: 210 }} />

      </View>


      <View>
        <View style={styles.trendingContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {courses.map((course) => (
              <View style={styles.socialMediaPost}>
                <View style={styles.horizontalSlide}>
                  <TouchableOpacity key={course.id} onPress={() => handleCourseSelection(course.name)}>
                    <Image
                      source={course.image}
                      style={{ width: 132, height: 84, margin: 8, borderRadius: 7 }}
                    />

                  </TouchableOpacity>

                </View>


                <View style={styles.contain}>
                  <Text style={styles.text}>
                    {course.name}
                  </Text>
                </View>


              </View>

            ))}




          </ScrollView>
        </View>
      </View>



      <View style={{ marginTop: 20, marginLeft: 12 }}>


        <Text style={{ fontSize: 18, color: 'black' }}>
          Java Full Stack Developer
        </Text>
        <View style={{ borderBottomWidth: 2, borderColor: 'black', marginLeft: 3, height: 2, width: 205 }} />

      </View>


      <View>
        <View style={styles.trendingContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {javacourses.map((course) => (
              <View style={styles.socialMediaPost}>
                <View style={styles.horizontalSlide}>
                  <TouchableOpacity key={course.id} onPress={() => handleCourseSelection(course.name)}>
                    <Image
                      source={course.image}
                      style={{ width: 132, height: 84, margin: 8, borderRadius: 7 }}
                    />

                  </TouchableOpacity>

                </View>


                <View style={styles.contain}>
                  <Text style={styles.text}>
                    {course.name}
                  </Text>
                </View>


              </View>

            ))}


          </ScrollView>
        </View>
      </View>


      <View style={{ marginTop: 20, marginLeft: 12 }}>


        <Text style={{ fontSize: 18, color: 'black' }}>
          AI/ML Technologies
        </Text>
        <View style={{ borderBottomWidth: 2, borderColor: 'black', marginLeft: 3, height: 2, width: 162 }} />

      </View>

      <View>
        <View style={styles.trendingContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>


            {AIcourses.map((course) => (
              <View style={styles.socialMediaPost}>
                <View style={styles.horizontalSlide}>
                  <TouchableOpacity key={course.id} onPress={() => handleCourseSelection(course.name)}>
                    <Image
                      source={course.image}
                      style={{ width: 132, height: 84, margin: 8, borderRadius: 7 }}
                    />
                  </TouchableOpacity>

                </View>


                <View style={styles.contain}>
                  <Text style={styles.text}>
                    {course.name}
                  </Text>
                </View>


              </View>
            ))}


          </ScrollView>
        </View>
      </View>



      <View style={{ marginTop: 20, marginLeft: 12 }}>


        <Text style={{ fontSize: 18, color: 'black' }}>
          Data Science Technologies
        </Text>
        <View style={{ borderBottomWidth: 2, borderColor: 'black', marginLeft: 3, height: 2, width: 217 }} />

      </View>


      <View>
        <View style={styles.trendingContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>


            {DScourses.map((course) => (


              <View style={styles.socialMediaPost}>
                <View style={styles.horizontalSlide}>
                  <TouchableOpacity key={course.id} onPress={() => handleCourseSelection(course.name)}>
                    <Image
                      source={course.image}
                      style={{ width: 132, height: 84, margin: 8, borderRadius: 7 }}
                    />
                  </TouchableOpacity>

                </View>


                <View style={styles.contain}>
                  <Text style={styles.text}>
                    {course.name}
                  </Text>
                </View>


              </View>

            ))}

          </ScrollView>
        </View>
      </View>








    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff"
  },

  head: {
    backgroundColor: 'white',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 10, // This elevation is for Android


  },

  course: {
    fontSize: 18,
    color: 'black',
    textDecorationLine: 'underline',

  },

  trendingContainer: {
    marginTop: 15,

  },
  trendingText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  horizontalSlide: {
    width: 132,
    height: 84,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  socialMediaPost: {
    width: '20%',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10

  },

  searchInput: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 10,
    marginTop:27,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  text: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    flexWrap: 'wrap',
    color:'black'
  },

})