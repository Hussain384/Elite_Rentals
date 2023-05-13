import {React, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {AddPhoto} from '../components';

function ProfileEditModal({route, navigation}) {
  const user = route.params.user;
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [about, setAbout] = useState(user.about);
  const [dateOfBirth, setDateOfBirth] = useState(user.dob);
  const [address, setAddress] = useState(user.address);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [modalVisible, setModalVisible] = useState(false);

  const HandleEditPhotoModal = () => {
    setModalVisible(true);
  };

  const HandleUpdateButton = () => {
    navigation.goBack();
  };
  const HandleCancelButton = () => {
    setFirstName('');
    setLastName('');
    setAbout('');
    setDateOfBirth('');
    setAddress('');
    navigation.goBack();
  };
  const handleOnselectPhoto = url => {
    setPhotoUrl(url);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profilePictureView}>
        <Image
          source={require('../utilz/images/profileImage.png')}
          style={styles.profilePictureStyle}
        />
        <TouchableOpacity
          style={styles.editPhotoButton}
          onPress={HandleEditPhotoModal}>
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
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.button} onPress={HandleCancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={HandleUpdateButton}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#3DA7AE',
    borderRadius: 15,
    height: 40,
    width: 100,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#000',
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
