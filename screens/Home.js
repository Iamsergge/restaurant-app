// Home.js
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { UserSection } from '../components/UserSection';
import Category from '../components/Category';
import { Featured } from '../components/Featured';
import { Promo } from '../components/Promo';

const Home = () => {
  return (
    <SafeAreaView>
      {/* Your Home screen components */}
      <View>
        <Text>Home Screen</Text>
        <UserSection />
        <Category />
        <Featured title="Featured" description="Enjoy these crazy, juicy and tasty discount" />
        <Promo description="Enjoy these crazy, juicy and tasty discount" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
