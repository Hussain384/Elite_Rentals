import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ChangeButton({name, changeTo}, {navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => navigation.navigate({changeTo})}>
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
