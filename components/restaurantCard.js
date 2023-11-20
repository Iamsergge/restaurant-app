import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { themeColors } from '../theme';

export default function RestaurantCard({ item, navigation }) {
  return (
    <TouchableWithoutFeedback 
      onPress={() => navigation.navigate('Restaurant', { ...item })}
    >
      <div
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 7px',
          marginRight: 6,
          backgroundColor: 'white',
          borderRadius: 20,
        }}
      >
        <Image
          style={{
            height: 36,
            width: 64,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          src={item.image}
          alt={item.name}
        />
        <div style={{ padding: '3px', paddingBottom: '4px', paddingTop: '2px' }}>
          <h3 style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</h3>
          <div style={{ display: 'flex', alignItems: 'center', marginVertical: '1px' }}>
            <img
              style={{ height: 15, width: 15 }}
              src={require('../assets/images/fullStar.png')}
              alt="Star"
            />
            <span style={{ fontSize: 12, color: 'green' }}>{item.stars}</span>
            <span style={{ fontSize: 12, color: 'gray' }}>
              ({item.reviews}) . <span style={{ fontWeight: 'bold' }}>{item.category}</span>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginVertical: '1px' }}>
            <span style={{ color: 'gray', fontSize: 15, marginRight: '5px' }}>Icon here</span>
            <span style={{ fontSize: 12, color: 'gray' }}>Nearby. {item.address}</span>
          </div>
        </div>
      </div>
    </TouchableWithoutFeedback>
  );
}
