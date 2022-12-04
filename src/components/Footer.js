import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeIcon from 'react-native-vector-icons/Octicons';
import HeartIcon from 'react-native-vector-icons/Octicons';
import SearchIcon from 'react-native-vector-icons/Octicons';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function Footer() {
  return (
    <View style={styles.footerView}>
      <HomeIcon
        name="home"
        size={25}
        color="#35C6ED"
        style={styles.MenuIconStyle}
      />
      <HeartIcon
        name="heart"
        size={25}
        color="#35C6ED"
        style={styles.MenuIconStyle}
      />

      <SearchIcon
        name="search"
        size={25}
        color="#35C6ED"
        style={styles.MenuIconStyle}
      />
      <ProfileIcon
        name="account-circle-outline"
        size={30}
        color="#35C6ED"
        style={styles.MenuIconStyle}
      />
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footerView: {
    height: 60,
    width: 370,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
  },
});