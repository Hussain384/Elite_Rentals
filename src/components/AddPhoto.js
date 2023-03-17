import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function AddPhoto({name}) {
  return (
    <View style={styles.selectionView}>
      <View style={styles.selectionTextView}>
        <Text style={styles.inputText}>{name}</Text>
      </View>
      <View style={styles.selectedPhotoView}>
        <Image
          source={require('../utilz/images/three.png')}
          style={styles.picturesStyle}
        />
      </View>
      <View style={styles.selectionPhotoView}>
        <TouchableOpacity style={styles.photoButtonView}>
          <Icon name={'camera'} size={30} color="#fff" />
          <Text style={styles.photoButton}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.photoButtonView}>
          <Icon name={'folder'} size={30} color="#fff" />
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
  selectedPhotoView: {
    backgroundColor: 'grey',
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
  selectionPhotoView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  photoButtonView: {
    backgroundColor: '#3DA7AE',
    width: 80,
    height: 70,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  photoButton: {
    fontFamily: 'serif',
    fontSize: 13,
    color: '#fff',
  },

  inputText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    marginVertical: 10,
    color: '#000',
  },
});
