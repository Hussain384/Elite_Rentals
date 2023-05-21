import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';

function GoBackButton({navigation}) {
  return (
    <View style={styles.backButtonView}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon name="chevron-back" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default GoBackButton;

const styles = StyleSheet.create({
  backButtonView: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#D9D9D9',
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
