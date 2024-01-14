// Category.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { categoryStyles } from '../styles/category';
import { useNavigation } from '@react-navigation/native';

const items = [
  {
    image: require('../assets/fish-salad.jpg'),
    title: 'Meal',
  },
  {
    image: require('../assets/dessert1.jpg'),
    title: 'Dessert',
  },
  {
    image: require('../assets/chickenBurger.png'),
    title: 'Fastfood',
  },
  {
    image: require('../assets/veggies.jpg'),
    title: 'Veggies',
  },
  {
    image: require('../assets/pastry.jpg'),
    title: 'Pastry',
  },
  {
    image: require('../assets/soda.jpg'),
    title: 'Soft Drink',
  },
  {
    image: require('../assets/tea.jpg'),
    title: 'Tea & Coffee',
  },
];

const Category = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (item) => {
    navigation.navigate('CategoryDetail', { title: item.title, image: item.image });
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={categoryStyles.wrapper}
    >
      {items.map((item, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => handleCategoryPress(item)}>
            <Image source={item.image} style={categoryStyles.topImage} />
            <Text style={categoryStyles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Category;
