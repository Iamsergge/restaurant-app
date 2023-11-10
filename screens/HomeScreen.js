import React from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import Categories from '../components/Categories'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput placeholder='Restaurants' style={styles.input} />
          <View style={styles.location}>
            <Icon.MapPin height={20} width={20} stroke="gray"/>
            <Text style={styles.locationText}>Johannesburg</Text>
          </View>
        </View>
        <View style={styles.filterIcon}>
            <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke="white" />
        </View>
      </View>
      {/*main */}
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 20
      }}
      >
        {/* categories */}
        <Categories/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  searchBox: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'gray',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  locationText: {
    marginLeft: 4,
    color: 'gray',
  },
  filterIcon: {
    padding: 12,
    backgroundColor: '#ccc',
    borderRadius: 20,
  },
});
