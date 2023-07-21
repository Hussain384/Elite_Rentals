import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../permissions';
import AddIcon from 'react-native-vector-icons/Entypo';

export default function AddProfilePhoto({onSelect, user}) {
  const [Photo, setPhoto] = useState(user.photoUrl);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    onSelect(Photo);
  }, [Photo, onSelect]);

  const handleAddPhotoButton = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS === 'android') {
      setModalVisible(true);
    }
  };

  const handleCamera = () => {
    setModalVisible(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setPhoto(image.path);
    });
  };
  const handleLibrary = () => {
    setModalVisible(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setPhoto(image.path);
    });
  };
  return (
    <View>
      <View style={styles.profilePictureView}>
        <TouchableOpacity
          style={styles.profilePictureStyle}
          onPress={handleAddPhotoButton}>
          {Photo === '' ? (
            <AddIcon name="plus" size={50} color="grey" />
          ) : (
            <Image style={styles.profilePicture} source={{uri: Photo}} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editPhotoButton}
          onPress={handleAddPhotoButton}>
          <Text style={styles.editPhotoButtonText}>Edit Profile Photo</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalOption} onPress={handleCamera}>
            <View style={styles.modalIconView}>
              <Icon name={'camera'} size={30} color="#fff" />
            </View>
            <View style={styles.modalTextView}>
              <Text style={styles.modalOptionText}>Take a photo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={handleLibrary}>
            <View style={styles.modalIconView}>
              <Icon name={'folder'} size={30} color="#fff" />
            </View>
            <View style={styles.modalTextView}>
              <Text style={styles.modalOptionText}>Choose from library</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.modalOptionText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
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
    color: 'grey',
  },

  modalContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3DA7AE',
    alignSelf: 'center',
    justifyContent: 'center',
    height: '70%',
    width: '90%',
    marginVertical: 50,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    elevation: 10,
  },
  modalOption: {
    alignSelf: 'center',
    borderRadius: 8,
    width: '100%',
    height: 50,
    backgroundColor: '#3DA7AE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  modalIconView: {
    width: '20%',
    alignItems: 'center',
  },
  modalTextView: {
    width: '80%',
  },
  modalOptionText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
  },
});
