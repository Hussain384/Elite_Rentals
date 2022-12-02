import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Greeting({type}) {
  return (
    <View>
      <Text style={styles.greeting}>Hello!</Text>
      <Text style={styles.info}>Register your self</Text>
    </View>
  );
}

export default Greeting;

const styles = StyleSheet.create({
  greeting: {
    alignSelf: 'center',
    color: '#20ACF2',
    fontSize: 30,
    fontWeight: 'bold',
  },
  info: {
    alignSelf: 'center',
    color: '#20ACF2',
    marginBottom: 20,
  },
});
