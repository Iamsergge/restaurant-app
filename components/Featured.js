import React from 'react';
import { View, Text } from 'react-native';
import { featureStyles } from '../styles/feature';
import { userStyles } from '../styles/user';
import Arrow from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-web';
import RestaurantFood from './RestaurantFood';

export const Featured = ({ title, description }) => {
  return (
    <View style={featureStyles.container}>
      <View style={featureStyles.textWrapper}>
        <Text style={userStyles.text2}>{title}</Text>
        <Arrow name='arrow-right-circle' style={featureStyles.arrow} />
      </View>

      <Text style={featureStyles.descText}> {description}</Text>
        <ScrollView
        hoizontal={true}
        showsHorizontalScrollIndicator={false}
        style={featureStyles.restaurantCard}
        >
         <RestaurantFood/>  

        </ScrollView>

    </View>
  );
};
