import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddIcon from 'react-native-vector-icons/Entypo';
import Footer from '../components/Footer';

function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.mainBody}>
        <View style={styles.AddIconStyle}>
          <AddIcon name="plus" size={35} color="#fff" />
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#DFF8FF',
  },

  mainBody: {
    height: 620,
  },
  AddIconStyle: {
    position: 'absolute',
    backgroundColor: '#35C6ED',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    right: 0,
    bottom: 15,
  },
});
