import {React, useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {ProfileInformation} from '../components';
import {fetchDocumentById, getCurrentUserId} from '../firebase/firebase';

export default function ProfileScreen({navigation}) {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    try {
      const user_id = getCurrentUserId();
      let response = await fetchDocumentById('users', user_id);
      setUser(response);
      console.log(response);
    } catch (error) {
      error('error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {user.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              navigation.navigate('EditProfileScreen', {user: user})
            }>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.profilePictureView}>
            <Image
              source={require('../utilz/images/profileImage.png')}
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
            <ProfileInformation title={'Address'} information={user.address} />
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureStyle: {
    height: 150,
    width: 150,
    borderRadius: 100,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
});
