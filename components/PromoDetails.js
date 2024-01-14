// PromoDetail.js
import React from 'react';
import { View, Image, Text } from 'react-native';


const PromoDetail = ({ route }) => {
  console.log('Route:', route);  // Add this line to log the route
  const { promoItem } = route.params;

  return (
    <View>
      <Image source={promoItem.image} style={{ width: 300, height: 300, left: 65,top: 100,borderRadius:10, }} />
      <Text style={{  left: 63,top: 100,fontSize:15,fontWeight: 600,  }}>{promoItem.copy}</Text>
      <Text style={{  left: 63,top: 100,fontSize:15,fontWeight: 600,}}>Discount: {promoItem.discount}</Text>
      {/* Add additional details as needed */}
    </View>
  );
};

export default PromoDetail;
