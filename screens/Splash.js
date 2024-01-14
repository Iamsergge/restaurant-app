// Splash.js
import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { splashStyles } from '../styles/splash';

const Splash = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={splashStyles.container}>
          <Image source={require('../assets/splash.jpeg')} style={splashStyles.splashPic} />
          <View style={splashStyles.ellipse}>
            <Image source={require('../assets/foodDeli.png')} style={splashStyles.ellipsePic} />
          </View>
          <View>
            <Text style={splashStyles.text1}>
              savour flavors<br></br>
              anytime<br></br>
              anywhere
            </Text>
          </View>
          <View style={splashStyles.button}>
            <TouchableOpacity style={splashStyles.buttonText} onPress={handleLoginPress}>
              Get Started
            </TouchableOpacity>
          </View>
          <Text style={splashStyles.text2}>Unlock a world of taste - sign up today</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Splash;
