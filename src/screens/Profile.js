import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';
import {ProfileInformation} from '../components';
import ProfileEditModal from '../components/ProfileEditModal';

export default function ProfileScreen() {
  const [popupVisible, setPopupVisible] = React.useState(false);

  const handleEditButtonClick = () => {
    setPopupVisible(true);
  };
  const handleModalClose = () => {
    setPopupVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.editButton}
        onPress={handleEditButtonClick}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
      <Modal visible={popupVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <ProfileEditModal />
          <TouchableOpacity onPress={handleModalClose}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.profilePictureView}>
        <Image
          source={require('../utilz/images/profileImage.png')}
          style={styles.profilePictureStyle}
        />
      </View>
      <View style={styles.userInfoView}>
        <Text style={styles.userNameStyle}>
          <Text style={styles.firstName}>Mr </Text>
          <Text style={styles.lastName}>Professor</Text>
        </Text>
        <ProfileInformation
          title={'About'}
          information={'This is more information about me'}
        />
        <ProfileInformation
          title={'Date of birth'}
          information={'2nd March, 2000'}
        />
        <ProfileInformation
          title={'Address'}
          information={'Hayatabad, Peshawar'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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
  userNameStyle: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 32,
    color: '#000',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
});
