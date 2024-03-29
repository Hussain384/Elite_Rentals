import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function InputField({type, state, setState}) {
  let keyboardType = 'default';

  if (type === 'Email') {
    keyboardType = 'email-address';
  } else if (type === 'DOB' || type === 'Contact') {
    keyboardType = 'numeric';
  }
  return (
    <View style={styles.inputFieldCont(type)}>
      <TextInput
        style={styles.inputField}
        placeholder={
          type === 'firstName'
            ? 'First Name'
            : type === 'lastName'
            ? 'Last Name'
            : type === 'Email'
            ? 'Email'
            : type === 'DOB'
            ? 'Date of birth (DD/MM/YYYY)'
            : type === 'Contact'
            ? 'Contact Number'
            : type === 'Password'
            ? 'Password'
            : type === 'Confirm Password' && 'Confirm Password'
        }
        keyboardType={keyboardType}
        value={state}
        onChangeText={setState}
        secureTextEntry={
          type === 'Password' ? true : type === 'Confirm Password' && true
        }
        placeholderTextColor="#999999"
      />
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  inputFieldCont: type => {
    return {
      height: 50,
      borderWidth: 1,
      borderColor: '#D9D9D9',
      marginVertical: 10,
      borderRadius: 10,
      paddingLeft: 10,
      width:
        type === 'firstName'
          ? '49%'
          : type === 'lastName'
          ? '49%'
          : type === 'Email'
          ? '100%'
          : type === 'DOB'
          ? '100%'
          : type === 'Password'
          ? '100%'
          : type === 'Confirm Password' && '100%',
    };
  },
  inputField: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
});
