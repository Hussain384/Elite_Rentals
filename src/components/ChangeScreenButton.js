import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ChangeButton({name}, {navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => navigation.navigate({name})}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChangeButton;

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
