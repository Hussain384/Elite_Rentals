import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function InputFormTitle({title}) {
  return (
    <View style={styles.container(title)}>
      <Text style={styles.formTitle}>{title}</Text>
    </View>
  );
}

export default InputFormTitle;

const styles = StyleSheet.create({
  container: title => {
    return {
      alignItems:
        title === 'SignUp'
          ? 'flex-end'
          : title === 'SignIn'
          ? 'flex-start'
          : title === 'Listing Form' && 'center',
    };
  },
  formTitle: {
    color: '#000',
    fontSize: 30,
    fontWeight: '450',
  },
});
