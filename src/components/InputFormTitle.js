import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function InputFormTitle({title}) {
  return (
    <View style={styles.container(title)}>
      <Text style={styles.formTitle}>{title}</Text>
      <View style={styles.dashLine(title)} />
    </View>
  );
}

export default InputFormTitle;

const styles = StyleSheet.create({
  container: title => {
    return {
      alignItems: title === 'SignUp' ? 'flex-end' : 'flex-start',
    };
  },
  formTitle: {
    color: '#000',
    fontSize: 30,
    fontWeight: '450',
  },
  dashLine: title => {
    return {
      height: 5,
      width: title === 'SignUp' ? 93 : 90,
      backgroundColor: '#54CFEF',
      borderRadius: 5,
      marginVertical: 10,
    };
  },
});
