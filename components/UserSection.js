import React, { useState } from 'react';
import {
  Image,
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import { userStyles } from '../styles/user';
import DownArrow from 'react-native-vector-icons/Feather';
import UserIcon from 'react-native-vector-icons/Feather';
import SearchIcon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native';

export const UserSection = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleLogout = () => {
    // Perform your log out actions here
    // For example, you might clear user session, navigate to the login screen, etc.
    Alert.alert('Logged out successfully');
    closeModal(); // Close the modal after logging out
  };

  return (
    <View style={userStyles.topWrapper}>
      <View style={userStyles.top}>
        <View>
          <Image
            source={require('../assets/serge.png')}
            style={userStyles.profilePic}
          />
        </View>

        <View style={userStyles.rightSide}>
          <Text style={userStyles.text1}>Deliver Now</Text>
          <Text style={userStyles.text2}>
            Current location
            <DownArrow name='chevron-down' style={userStyles.down} />
          </Text>
        </View>
        <UserIcon name='user' style={userStyles.user} onPress={openModal} />
      </View>

      <View style={userStyles.inputSection}>
        <View style={userStyles.inputBox}>
          <SearchIcon name='search' />
          <TextInput
            placeholder='Pick Restaurant'
            keyboardType='default'
            style={userStyles.input}
          />
        </View>
      </View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>profile Details</Text>
            <Text style={styles.modalText}>Personal details</Text>
            <Text style={styles.modalText}>Get help</Text>
            <Text style={styles.modalText}>T&cs and privacy</Text>
            <Text style={styles.modalText} onPress={handleLogout}>
              Log out
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal}>
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 300,
    width: 350,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
