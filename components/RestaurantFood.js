import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-web';
import { restaurantStyles } from '../styles/restaurant';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace with the correct icon set
import LocationPin from 'react-native-vector-icons/FontAwesome'; // Replace with the correct icon set
import { useNavigation } from '@react-navigation/native';

const restaurants = [
  {
    image_url:
      'https://roviandaplus.com/wp-content/uploads/2022/04/Pizza-Pepperoni.jpg',
    title: 'Pizza Kings',
    rating: 5,
    genre: 'pizza',
    price: '150',
    address: 'Parklands',
    description:
      'Savor the classic flavors of pepperoni,mushroom, sausage, bell pepper',
  },
  {
    image_url:
      'https://media.istockphoto.com/id/1341868828/photo/spicy-roast-chicken-with-garlic-honey-sauce.jpg?s=612x612&w=0&k=20&c=8S9jtTuX6Y8nbSandD5iPLV03Ip7nzVGp2J2KObYws0=',
    title: 'Chicken Choma',
    rating: 5,
    genre: 'Grilled Chicken',
    price: '100',
    address: 'Parklands',
    description:
      'Grilled chicken sizzles, releasing tantalizing aromas. Golden-brown',
  },
  {
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLZ2PUulwdmpo4UgxU_z7vIRrEAD04xoWkrHBK2bEWIfU6j2kHyi7qjYEWij1OVN6ovU&usqp=CAU',
    title: 'Swahili Dishes',
    rating: 5,
    genre: 'Mchele mnazi',
    price: '200',
    address: 'Westlands',
    description:
      'Steaming white rice serves as the bed for succulent grilled chicken',
  },
];

const RestaurantFood = () => {
  const navigation = useNavigation();

  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('RestaurantDetail', { restaurant });
  };

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={restaurantStyles.container}>
        {restaurants.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            style={restaurantStyles.rCard}
            onPress={() => handleRestaurantPress(restaurant)}
          >
            <View style={restaurantStyles.cardWrapper}>
              <Image
                source={{ uri: restaurant.image_url }}
                style={restaurantStyles.dishPic}
              />
              <View style={restaurantStyles.textArea}>
                <View>
                  <Text style={restaurantStyles.brand}>{restaurant.title}</Text>
                </View>

                <View style={restaurantStyles.rate}>
                  <Text style={restaurantStyles.genre}>
                    {restaurant.rating}
                    <Icon name="dot-single" />
                    {restaurant.genre}
                  </Text>
                  <Text style={restaurantStyles.price}>
                    ksh. {restaurant.price}
                  </Text>
                </View>

                <View style={restaurantStyles.location}>
                  <LocationPin name="location-pin" style={restaurantStyles.pin} />
                  <Text style={restaurantStyles.leftText}>
                    Nearby
                    <Icon name="dot-single" />
                    {restaurant.address}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantFood;
