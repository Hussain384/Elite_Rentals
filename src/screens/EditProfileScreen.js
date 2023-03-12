import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {React, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

function ProfileEditModal() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [about, setAbout] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [address, setAddress] = useState();

  const HandleUpdateButton = async () => {
    const user = firebase.auth().currentUser;

    try {
      // Update the user's fields in Firebase Auth
      await user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });

      // Update the user's fields in Firestore
      await firestore().collection('users').doc(user.uid).update({
        firstName,
        lastName,
        about,
        dateOfBirth,
        address,
      });

      // TODO: Update the user's profile picture in Firebase Storage

      // Reset the form fields
      setFirstName('');
      setLastName('');
      setAbout('');
      setDateOfBirth('');
      setAddress('');
    } catch (error) {
      console.log(error);
    }
  };
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
              onChange={() => setFirstName}
              value={firstName}
            />
          </View>
          <View style={styles.nameInnerView}>
            <Text style={styles.inputText}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Last name"
              onChange={() => setLastName}
              value={lastName}
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>About</Text>
          <TextInput
            style={styles.input}
            placeholder="About"
            onChange={() => setAbout}
            value={about}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>DOB</Text>
          <TextInput
            style={styles.input}
            placeholder="Date of birth"
            onChange={() => setDateOfBirth}
            value={dateOfBirth}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            onChange={() => setAddress}
            value={address}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.updateButtonView}
        onPress={HandleUpdateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileEditModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
  },
  updateButtonView: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#3DA7AE',
    borderRadius: 15,
    height: 40,
    width: 100,
  },
  updateButtonText: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#000',
  },
});
