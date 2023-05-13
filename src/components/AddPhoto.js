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
import moment from 'moment';

export default function AddPhoto({name, onSelect}) {
  const [Photo, setPhoto] = useState('');
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

  // moment(item.created_at* 1000).format('DD/MM/YYYY')

  const handleCamera = () => {
    setModalVisible(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
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
      console.log(image);
      setPhoto(image.path);
    });
  };
  return (
    <View style={styles.selectionView}>
      <View style={styles.selectionTextView}>
        <Text style={styles.inputText}>{name}</Text>
      </View>
      <TouchableOpacity
        style={styles.selectedPhotoView}
        onPress={handleAddPhotoButton}>
        {Photo === '' ? (
          <Text style={styles.inputText}>Select Photo</Text>
        ) : (
          <Image source={{uri: Photo}} style={styles.picturesStyle} />
        )}
      </TouchableOpacity>
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
  selectionView: {},
  selectedPhotoView: {
    backgroundColor: '#ABD0BC',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 300,
    width: '90%',
    borderRadius: 15,
    marginBottom: 10,
  },
  picturesStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  photoButtonView: {
    alignSelf: 'center',
    borderRadius: 8,
    width: '50%',
    height: 60,
    backgroundColor: '#3DA7AE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoButtonText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },

  inputText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    marginVertical: 10,
    color: '#000',
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
