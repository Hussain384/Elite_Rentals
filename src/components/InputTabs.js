import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function InputTabs({name}) {
  return (
    <View style={styles.selectionView}>
      <View style={styles.selectionTextView}>
        <Text style={styles.inputText}>{name}</Text>
      </View>
      <View style={styles.selectionInputView}>
        <TextInput
          style={styles.inputField}
          placeholder={name}
          numberOfLines={name === 'Name' ? 1 : name === 'Price (Rs)' ? 1 : 4}
          multiline={name !== 'Name' && name !== 'Price (Rs)'}
          keyboardType={name === 'Price (Rs)' ? 'numeric' : 'default'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectionView: {
    marginTop: 10,
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
