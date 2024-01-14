import { StyleSheet } from "react-native";

export const splashStyles = StyleSheet.create({
  container: {
    width: 430,
    height: 900,
    backgroundColor: '#FFF',
  },
  splashPic: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    backgroundPosition: '50%',
  },
  ellipsePic: {
    width: 193,
    height: 200,
    borderRadius: 193,
    overflow: 'hidden', // Ensure the image respects the border-radius
    flexShrink: 0,
    left: 112,
    bottom: 30,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    backgroundPosition: '50%',
  },
  text1: {
    width: 368,
    height: 74,
    flexShrink: 0,
    color: '#F9851B',
    fontFamily: 'Inter',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    left: 180,
    bottom: 50,
  },
  button: {
    width: 302,
    height: 55,
    flexShrink: 0,
    borderRadius: 25,
    backgroundColor: '#F9851B',
    left: 63,
    bottom: 40,

  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  text2: {
    width: 349,
    height: 44,
    flexShrink: 0,
    color: '#F9851B',
    fontFamily: 'Inter',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    left: 115,
    bottom: 20,
  }
});
