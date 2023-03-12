import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function AddPhoto({name}) {
  return (
    <View style={styles.selectionView}>
      <View style={styles.selectionTextView}>
        <Text style={styles.inputText}>{name}</Text>
      </View>
      <View style={styles.selectionPhotoView}>
        <TouchableOpacity style={styles.photoButtonView}>
          <Icon name={'camera'} size={40} color="#fff" />
          <Text style={styles.photoButton}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.photoButtonView}>
          <Icon name={'folder'} size={40} color="#fff" />
          <Text style={styles.photoButton}>Choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectionView: {
    marginTop: 10,
  },
  selectionPhotoView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  photoButtonView: {
    backgroundColor: '#3DA7AE',
    minWidth: 100,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  photoButton: {
    fontFamily: 'serif',
    fontSize: 16,
    color: '#fff',
  },

  inputText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    marginVertical: 10,
    color: '#000',
  },
  inputField: {
    borderWidth: 1,
    borderBottomColor: '#000',
  },
});
