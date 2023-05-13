import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function InputTabs({name, placeholder, onChangeText}) {
  return (
    <View style={styles.selectionView}>
      <View style={styles.selectionTextView}>
        <Text style={styles.inputText}>{name}</Text>
      </View>
      <View style={styles.selectionInputView}>
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          numberOfLines={name === 'Name' ? 1 : name === 'Price (Rs)' ? 1 : 4}
          multiline={name !== 'Name' && name !== 'Price (Rs)'}
          keyboardType={name === 'Price (Rs)' ? 'numeric' : 'default'}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectionView: {
    // height: '15%',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    marginVertical: 10,
    color: '#000',
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
});
