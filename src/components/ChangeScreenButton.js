import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SignIn from '../screens/SignInScreen';

function SubmitButton({name}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => {
          SignIn;
        }}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SubmitButton;

const styles = StyleSheet.create({
  buttonText: {
    color: '#57D0EF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonView: {
    alignSelf: 'center',
    marginTop: 45,
  },
});
