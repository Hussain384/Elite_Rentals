import {React, useState, useCallback} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {ProfileInformation} from '../components';
import {
  fetchDocumentById,
  getCurrentUserId,
  signOut,
} from '../firebase/firebase';
import {useFocusEffect} from '@react-navigation/native';

export default function ProfileScreen({navigation}) {
  const [user, setUser] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const user_id = getCurrentUserId();
      const fetchData = async () => {
        try {
          let response = await fetchDocumentById('users', user_id);
          setUser(response);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []),
  );

  const HandleSignOutButton = () => {
    signOut(navigation);
  };
  return (
    <View style={styles.container}>
      {user.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              navigation.navigate('EditProfileScreen', {
                user: user,
              })
            }>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.profilePictureView}>
            <Image
              source={{uri: user.photoUrl}}
              style={styles.profilePictureStyle}
            />
          </View>
          <View style={styles.userInfoView}>
            <View style={styles.userNameView}>
              <Text style={styles.userName}>{user.firstName}</Text>
              <Text style={styles.userName}>{user.lastName}</Text>
            </View>
            <ProfileInformation title={'Email'} information={user.email} />
            <ProfileInformation title={'About'} information={user.about} />
            <ProfileInformation
              title={'Date of birth'}
              information={user.dob}
            />
            <ProfileInformation title={'Contact'} information={user.contact} />
            <ProfileInformation title={'Address'} information={user.address} />
          </View>
          <View style={styles.buttonsView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('UserListingScreen', {user: user})
              }>
              <Text style={styles.buttonText}>Listings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={HandleSignOutButton}>
              <Text style={styles.buttonText}>SignOut</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  editButton: {
    flexDirection: 'row',
    height: 30,
    width: 50,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  editButtonText: {
    color: '#000',
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  profilePictureView: {
    height: 150,
    width: 150,
    borderWidth: 1,
    backgroundColor: '#ABD0BC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 100,
  },
  profilePictureStyle: {
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  userName: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 32,
    color: '#000',
    marginBottom: 20,
    marginRight: 10,
  },
  userNameView: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#ABD0BC',
    height: 40,
    width: 140,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#000',
  },
  buttonsView: {
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
});
