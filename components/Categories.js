import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function Categories() {
  // Define your categories array here
  const categories = [
    { id: 1, name: 'Category 1', image: require('../assets/images/pizzaIcon.png') },
    { id: 2, name: 'Category 2', image: require('../assets/images/pizzaIcon.png') },
    { id: 3, name: 'Category 3', image: require('../assets/images/pizzaIcon.png') },
    { id: 4, name: 'Category 4', image: require('../assets/images/pizzaIcon.png') },
    // Add more categories as needed
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={{ marginTop: 4 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ overflow: 'visible' }}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          const isActive = category.id === activeCategory;
          const btnClass = isActive ? styles.activeCategoryButton : styles.categoryButton;
          const textClass = isActive ? styles.activeCategoryText : styles.categoryText;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(category.id)}
              style={btnClass}
            >
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Image style={styles.categoryImage} source={category.image} />
              </View>
              <Text style={textClass}>{category.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryButton: {
    padding: 8,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  activeCategoryButton: {
    padding: 8,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: '#333',
    marginRight: 10,
  },
  categoryImage: {
    width: 45,
    height: 45,
    borderRadius:5
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
  activeCategoryText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
