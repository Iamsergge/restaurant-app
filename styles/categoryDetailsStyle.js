import { StyleSheet } from 'react-native';

export const categoryDetailsStyles = StyleSheet.create({
  topImage: {
    width: 333,
    height: 197,
    borderRadius: 11,
    overflow: 'hidden', // Required for border-radius on Android
    backgroundColor: 'lightgray',
    // Remove backgroundImage and related styles
    top: 120,
    left: 50,
  },
  itemText: {
    // Your styles for itemText
  },
  cart: {
    width: 58,
    height: 32,
    backgroundColor: 'lightgray',
    overflow: 'hidden', // Required for contain on Android
    top: 20,
    left: 350,
  },
  button: {
    top:500,
    width: 302,
    height: 55,
    flexShrink: 0,
    borderRadius: 25,
    backgroundColor: '#F9851B',
    left: 63,
    justifyContent: 'center', // Align the text in the center
    alignItems: 'center', // Align the text in the center
    
  },
  addText: {
    width: 157,
    height: 39,
    flexShrink: 0,
    top: 110,
    left: 30,
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  chips: {
    width: 108,
    height: 72,
    flexShrink: 0,
    top: 200,
    left: 20,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  chipsText: {
        left: 180,
        top: 150,
        fontSize:15,
        fontWeight: 400,
  },
  chipsPrice: {
    left: 300,
    top: 130,
    fontSize: 15,
  },
  drink: {
    width: 108,
    height: 72,
    flexShrink: 0,
    top: 200,
    left: 20,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  juiceText: {
    left: 180,
    top: 150,
    fontSize:15,
    fontWeight: 400,

  },
  juicePrice: {
    left: 300,
    top: 130,
    fontSize: 15,

  },
  checkmark: {
    width: 41,
    height: 27,
    flexShrink: 0,
    backgroundColor: 'lightgray',
    resizeMode: 'contain',
    left: 370,
    top: 110,
  },

});