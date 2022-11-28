import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import IconEmail from 'react-native-vector-icons/Foundation';

function InputFieldWithIcon(
  state,
  setState,
  iconName,
  iconSize,
  iconColor,
  inputPlaceholder,
) {
  return (
    <View style={styles.inputCont}>
      <IconEmail style={styles.iconStyle} name="mail" size={20} color="blue" />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={state}
        onChangeText={setState}
        placeholderTextColor="#CDCDCD"
      />
    </View>
  );
}

export default InputFieldWithIcon;

const styles = StyleSheet.create({
  inputCont: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    borderBottomWidth: 5,
    borderBottomColor: '#E6E6E6',
  },
  input: {
    width: '90%',
    height: '100%',
    color: '#000',
  },
  iconStyle: {
    alignSelf: 'center',
    width: '10%',
  },
});
