import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function PickerDropdown({name, type, setState, options}) {
  return (
    <View style={styles.selectionView}>
      <View style={styles.selectionTextView}>
        <Text style={styles.inputText}>{name}</Text>
      </View>
      <View style={styles.selectionDropdownView}>
        <Picker
          style={styles.dropDown}
          mode={'dropdown'}
          selectedValue={type}
          onValueChange={(itemValue, itemIndex) => setState(itemValue)}>
          {options.map((res, index) => {
            return <Picker.Item key={index} value={res} label={res} />;
          })}
        </Picker>
      </View>
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
