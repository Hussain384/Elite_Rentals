import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function InputTabs({name}) {
  return (
    <View style={styles.selectionView}>
      <View style={styles.selectionTextView}>
        <Text style={styles.inputText}>{name}</Text>
      </View>
      <View style={styles.selectionDropdownView}>{/* <TextInput/> */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectionView: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    width: '100%',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    marginVertical: 10,
    color: '#000',
  },
  selectionTextView: {
    width: '50%',
  },
  selectionDropdownView: {
    alignItems: 'center',
    width: '50%',
  },
  dropDown: {
    backgroundColor: '#3DA7AE',
    width: 100,
  },
});
