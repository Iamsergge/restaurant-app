import React from 'react-native';
import { StyleSheet } from 'react-native';

export const featureStyles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 20,
    },
    textwrapper: {
        width: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    arrow: {
        marginRight: 40,
        color: '#f07c4e',
        fontSize: 13,

    },
    descText: {
      marginHorizontal: 10,
      marginBottom: 8,
      color: '#808080' , 
    },
    restaurantCard: {
        backgroundColor: '#ced4da',
        padding: 10,
        marginTop: 10,
    }
})