import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import RestaurantCard from './restaurantCard';


const FeaturedRow = ({ title, description, restaurants }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        style={{ overflow: 'visible', paddingTop: 5 }}
      >
        {Array.isArray(restaurants) ? (
          restaurants.map((restaurant, index) => (
            <RestaurantCard item={restaurant} key={index} />
          ))
        ) : (
          <Text>No restaurants available</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: 'gray',
    fontSize: 12,
  },
  seeAllButton: {},
});
