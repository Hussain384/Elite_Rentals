import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ProfileInformation({title, information}) {
  return (
    <View style={styles.container}>
      <Text style={styles.userInfoHeading}>{title}</Text>
      <Text style={styles.userInfo}>{information}</Text>
    </View>
  );
}

export default ProfileInformation;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  userInfoHeading: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  userInfo: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '300',
    color: '#000',
  },
});
