import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function InputField({type, state, setState}) {
  return (
    <View style={styles.inputFieldCont}>
      <TextInput
        style={styles.inputField}
        placeholder={
          type === 'Name'
            ? 'Name'
            : type === 'Email'
            ? 'Email'
            : type === 'Password'
            ? 'Password'
            : type === 'Confirm Password' && 'Confirm Password'
        }
        value={state}
        onChangeText={setState}
        secureTextEntry={
          type === 'Password'
            ? true
            : type === 'Confirm Password'
            ? true
            : type === 'Name'
            ? false
            : type === 'Email' && false
        }
        placeholderTextColor="#999999"
      />
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  inputFieldCont: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  inputField: {
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
  iconStyle: {
    alignSelf: 'center',
    width: '10%',
  },
});
