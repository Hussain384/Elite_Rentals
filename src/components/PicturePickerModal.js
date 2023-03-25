import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';

const PicturePickerModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Choose Profile Picture</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalOption} onPress={handleCamera}>
            <Text style={styles.modalOptionText}>Take a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={handleLibrary}>
            <Text style={styles.modalOptionText}>Choose from library</Text>
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
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  modalOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PicturePickerModal;
