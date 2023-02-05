import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import IconEmail from 'react-native-vector-icons/Foundation';
import IconPassword from 'react-native-vector-icons/Ionicons';

function InputFieldWithIcon({iconType, type, state, setState}) {
  return (
    <View style={styles.inputFieldCont}>
      {iconType === 'Foundation' ? (
        <IconEmail
          style={styles.iconStyle}
          name={type === 'Name' ? 'mail' : type === 'Email' && 'mail'}
          size={22}
          color="#38C7ED"
        />
      ) : (
        iconType === 'Ionicons' && (
          <IconPassword
            style={styles.iconStyle}
            name={
              type === 'Password'
                ? 'eye-off'
                : type === 'Confirm Password' && 'eye-off'
            }
            size={22}
            color="#38C7ED"
          />
        )
      )}
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
        placeholderTextColor="#CDCDCD"
      />
    </View>
  );
}

export default InputFieldWithIcon;

const styles = StyleSheet.create({
  inputFieldCont: {
    flexDirection: 'row',
    borderBottomWidth: 5,
    borderBottomColor: '#E6E6E6',
    marginBottom: 15,
  },
  inputField: {
    width: '90%',
    height: '100%',
    color: '#000',
    fontSize: 15,
  },
  iconStyle: {
    alignSelf: 'center',
    width: '10%',
  },
});
