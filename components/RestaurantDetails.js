// RestaurantDetail.js
import React from 'react';
import { View, Text, Image } from 'react-native';

const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <View>
      <Image source={{ uri: restaurant.image_url }} style={{ width: 350, height: 400,left: 40,top: 100,borderRadius: 10, }} />
      <Text style={{ left: 50,top: 100,fontSize:15,fontWeight: 600, }} >{restaurant.title}</Text>
      <Text style={{ left: 50,top: 100,fontSize:15,fontWeight: 600, }} >Rating: {restaurant.rating}</Text>
      <Text style={{ left: 50,top: 100,fontSize:15,fontWeight: 600, }} >Genre: {restaurant.genre}</Text>
      <Text style={{ left: 50,top: 100,fontSize:15,fontWeight: 600, }} >Price: ksh. {restaurant.price}</Text>
      <Text style={{ left: 50,top: 100,fontSize:15,fontWeight: 600, }} >Address: {restaurant.address}</Text>
      <Text style={{ left: 50,top: 100,fontSize:15,fontWeight: 600, }} >Description: {restaurant.description}</Text>
      {/* Add additional details as needed */}
    </View>
  );
};

export default RestaurantDetail;
