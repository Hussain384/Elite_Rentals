import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ChangeButton({name, changeTo, navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => navigation.navigate(changeTo)}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChangeButton;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: '#3DA7AE',
    height: 50,
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
});
