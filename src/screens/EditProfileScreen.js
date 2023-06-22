import {React, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {updateDocument} from '../firebase/firebase';
import {AddProfilePhoto} from '../components';
import storage from '@react-native-firebase/storage';

function ProfileEditModal({route, navigation}) {
  const user = route.params.user;
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [about, setAbout] = useState(user.about);
  const [dateOfBirth, setDateOfBirth] = useState(user.dob);
  const [address, setAddress] = useState(user.address);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [contact, setContact] = useState(user.contact);
  const [transferred, setTransferred] = useState(0);
  const [uploading, setUploading] = useState(false);

  const HandleUpdateButton = async () => {
    setUploading(true);
    let url;
    if (user.photoUrl !== photoUrl) {
      url = await uploadImage();
    }
    const values = {
      firstName,
      lastName,
      about,
      dob: dateOfBirth,
      address,
      photoUrl: user.photoUrl !== photoUrl ? url : user.photoUrl,
      contact,
    };
    await updateDocument('users', user.id, values);
    setUploading(false);
    setTransferred(0);
    navigation.goBack();
  };
  const HandleCancelButton = () => {
    navigation.goBack();
  };
  const handleOnselectPhoto = url => {
    setPhotoUrl(url);
  };

  const uploadImage = async () => {
    const uploadUrl = photoUrl;
    let filename = uploadUrl.substring(uploadUrl.lastIndexOf('/') + 1);
    //filename withTimeStamp
    const extensionIndex = filename.lastIndexOf('.');
    const extension = filename.slice(extensionIndex);
    filename = `${Date.now()}${extension}`;

    const storageRef = storage().ref('/profile_pictures/' + filename);
    const task = storageRef.putFile(uploadUrl);
    //set transfer state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      const progress = Math.round(
        (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100,
      );
      setTransferred(progress);
    });
    try {
      await task;
      const url = await storageRef.getDownloadURL();
      return url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  return (
    <ScrollView style={styles.container}>
      {uploading ? (
        <View style={styles.activityContainer}>
          <ActivityIndicator
            size="large"
            color="#3DA7AE"
            style={styles.activityIndicator}
          />
          <Text style={styles.progressText}>Uploading: {transferred}%</Text>
        </View>
      ) : (
        <>
          <AddProfilePhoto
            name={'Edit'}
            onSelect={handleOnselectPhoto}
            user={user}
          />
          <View style={styles.userInfoView}>
            <View style={styles.fullNameView}>
              <View style={styles.nameInnerView}>
                <Text style={styles.inputText}>First Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="First name"
                  onChangeText={text => setFirstName(text)}
                  value={firstName}
                />
              </View>
              <View style={styles.nameInnerView}>
                <Text style={styles.inputText}>Last Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Last name"
                  onChangeText={text => setLastName(text)}
                  value={lastName}
                />
              </View>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>About</Text>
              <TextInput
                style={styles.input}
                placeholder="About"
                onChangeText={text => setAbout(text)}
                value={about}
              />
            </View>
            <View style={styles.fullNameView}>
              <View style={styles.nameInnerView}>
                <Text style={styles.inputText}>DOB</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Date of birth"
                  keyboardType="numeric"
                  onChangeText={text => setDateOfBirth(text)}
                  value={dateOfBirth}
                />
              </View>
              <View style={styles.nameInnerView}>
                <Text style={styles.inputText}>Contact</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Contact"
                  keyboardType="numeric"
                  onChangeText={text => setContact(text)}
                  value={contact}
                />
              </View>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                keyboardType="email-address"
                onChangeText={text => setAddress(text)}
                value={address}
              />
            </View>
          </View>
          <View style={styles.buttonsView}>
            <TouchableOpacity
              style={styles.button}
              onPress={HandleCancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={HandleUpdateButton}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
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
    width: 130,
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
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  activityIndicator: {
    marginBottom: 10,
  },
  progressText: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#000',
  },
});
