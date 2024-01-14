// Promo.js
import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { promoStyleSheet } from '../styles/promo';
import { useNavigation } from '@react-navigation/native';

const promoItems = [
  {
    image: require('../assets/burger2.jpg'),
    copy: 'snack time\nmade better',
    discount: '~20~',
    backGroundColor: 'black',
  },
  {
    image: require('../assets/vanilla.jpg'),
    copy: 'snack time\nmade better',
    discount: '~20~',
    backGroundColor: '#396858',
  },
];

export const Promo = ({ description }) => {
  const navigation = useNavigation();

  const handlePromoPress = (promoItem) => {
    navigation.navigate('PromoDetail', { promoItem });
  };

  return (
    <View>
      <Text style={promoStyleSheet.promoTitle}>Promo</Text>
      <Text style={promoStyleSheet.promoDesc}>{description}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {promoItems.map((promoItem, index) => (
          <TouchableOpacity key={index} onPress={() => handlePromoPress(promoItem)}>
            <View
              style={[
                promoStyleSheet.promoWrapper,
                { backgroundColor: promoItem.backGroundColor },
              ]}
            >
              <View>
                <Text style={promoStyleSheet.promoText}>{promoItem.copy}</Text>
                <Text style={promoStyleSheet.promoText2}>{promoItem.discount}</Text>
              </View>
              <Image source={promoItem.image} style={promoStyleSheet.promoPic} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
