import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function SubmitButton({type, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.submitButtonView} onPress={onPress}>
        <Text style={styles.text}>{type}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SubmitButton;

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: 'center',
  },
  submitButtonView: {
    backgroundColor: '#3DA7AE',
    height: 50,
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});
