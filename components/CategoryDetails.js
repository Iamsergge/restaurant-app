import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { categoryDetailsStyles } from '../styles/categoryDetailsStyle';
import { useNavigation } from '@react-navigation/native';

const CategoryDetail = ({ route }) => {
  const navigation = useNavigation();
  const { title, items, handleCategoryPress, image } = route.params;

  const handleCartPress = () => {
    console.log('Cart button pressed');
    navigation.navigate('Cart');
  };


  return (
    <View>
      <TouchableOpacity>
        <Image source={require('../assets/ShoppingCart.png')} style={categoryDetailsStyles.cart} />
      </TouchableOpacity>
      <Image source={image} style={categoryDetailsStyles.topImage} />
      <View>
        {items?.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleCategoryPress(item)}>
            <Image source={item.image} style={categoryDetailsStyles.topImage} />
            <Text style={categoryDetailsStyles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={categoryDetailsStyles.button}>
          <Text style={{ color: 'white' }}>Add to cart</Text>
        </TouchableOpacity>

        {/* Wrapping the chips image, text, and price in a row */}
        <View style={categoryDetailsStyles.chipsContainer}>
          <Image source={require('../assets/chips.png')} style={categoryDetailsStyles.chips} />
          <View style={categoryDetailsStyles.chipsTextContainer}>
            <Text style={categoryDetailsStyles.chipsText}>Chips</Text>
            <Text style={categoryDetailsStyles.chipsPrice}>R100</Text>
            <Image source={require('../assets/Checkmark.png')} style={categoryDetailsStyles.checkmark}/>
          </View>
        </View>
          <View style={categoryDetailsStyles.drinkContainer}>
        <Image source={require('../assets/juice.png')} style={categoryDetailsStyles.drink} />
            <Text style={categoryDetailsStyles.juiceText}>Juice</Text>
            <Text style={categoryDetailsStyles.juicePrice}>R30</Text>
            <Image source={require('../assets/Checkmark.png')} style={categoryDetailsStyles.checkmark}/>
        </View>
      </View>
    </View>
  );
};

export default CategoryDetail;
