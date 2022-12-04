import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function SubmitButton({type, onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.submitButtonView} onPress={onPress}>
        <Text style={styles.submitButtonText}>{type}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SubmitButton;

const styles = StyleSheet.create({
  submitButtonView: {
    backgroundColor: '#3BC8ED',
    height: 45,
    width: 110,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 60,
    bottom: -50,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
});
