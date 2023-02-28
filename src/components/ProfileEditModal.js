import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

function ProfileEditModal() {
  return (
    <View style={styles.container}>
      <View style={styles.profilePictureView}>
        <Image
          source={require('../utilz/images/profileImage.png')}
          style={styles.profilePictureStyle}
        />
        <TouchableOpacity style={styles.editPhotoButton}>
          <Text style={styles.editPhotoButtonText}>Edit Profile Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userInfoView}>
        <View style={styles.fullNameView}>
          <View style={styles.nameInnerView}>
            <Text style={styles.inputText}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="First name"
              onChange={''}
              value={''}
            />
          </View>
          <View style={styles.nameInnerView}>
            <Text style={styles.inputText}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Last name"
              onChange={''}
              value={''}
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>About</Text>
          <TextInput style={styles.input} placeholder="About" />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>Date of birth</Text>
          <TextInput style={styles.input} placeholder="DOB" />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>Address</Text>
          <TextInput style={styles.input} placeholder="Address" />
        </View>
      </View>
    </View>
  );
}

export default ProfileEditModal;

const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '90%',
  },
  profilePictureView: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  profilePictureStyle: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  editPhotoButton: {
    marginVertical: 10,
  },
  editPhotoButtonText: {
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '500',
  },
  userNameStyle: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 32,
    color: '#000',
    marginBottom: 20,
  },
  inputText: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: '300',
    color: '#000',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  fullNameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  nameInnerView: {
    width: '49%',
  },
  inputView: {
    marginBottom: 10,
  },
});
