import { StyleSheet } from 'react-native';

export const promoStyleSheet = StyleSheet.create({
  promoWrapper: {
    height: 80,
    width: 160,
    marginLeft: 10,
    marginRight: 20, // Corrected typo here
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: 'bold', // Corrected fontWeight value
    marginTop: 20,
    marginHorizontal: 10,
  },
  promoDesc: {
    marginHorizontal: 10,
    color: '#808080',
  },
  promoText: {
    color: '#fff',
  },
  promoText2: {
    color: '#f07e4e',
    fontWeight: 'bold',
    paddingTop: 5,
    fontSize: 15,
  },
  promoPic: {
    position: 'absolute',
    height: 95,
    width: 95,
    right: -3,
    bottom: -12,
  },
});
