import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Greeting({greet, discription}) {
  return (
    <View>
      <Text style={styles.greeting}>{greet}</Text>
      <Text style={styles.discriptionStyle}>{discription}</Text>
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
  discriptionStyle: {
    alignSelf: 'center',
    color: '#20ACF2',
    marginBottom: 20,
  },
});
