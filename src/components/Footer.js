import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import HomeIcon from 'react-native-vector-icons/Octicons';
import HeartIcon from 'react-native-vector-icons/Octicons';
import SearchIcon from 'react-native-vector-icons/Octicons';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function Footer({navigation}) {
  const [pressed, setPressed] = useState('');

  const OnPressHome = () => {
    setPressed('home');
    navigation.navigate('Home');
  };
  const OnPressHeart = () => {
    setPressed('heart');
    navigation.navigate('Wishlist');
  };
  const OnPressSearch = () => {
    setPressed('search');
    navigation.navigate('Search');
  };
  const OnPressProfile = () => {
    setPressed('profile');
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.footerView}>
      <TouchableOpacity
        onPress={OnPressHome}
        style={styles.homeIconViewStyle(pressed)}>
        <HomeIcon
          name="home"
          size={25}
          color={pressed === 'home' ? '#fff' : '#35C6ED'}
        />
        <Text style={styles.homeIconTitleStyle(pressed)}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={OnPressHeart}
        style={styles.heartIconViewStyle(pressed)}>
        <HeartIcon
          name="heart"
          size={25}
          color={pressed === 'heart' ? '#fff' : '#35C6ED'}
        />
        <Text style={styles.heartIconTitleStyle(pressed)}>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={OnPressSearch}
        style={styles.searchIconViewStyle(pressed)}>
        <SearchIcon
          name="search"
          size={25}
          color={pressed === 'search' ? '#fff' : '#35C6ED'}
        />
        <Text style={styles.searchIconTitleStyle(pressed)}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={OnPressProfile}
        style={styles.profileIconViewStyle(pressed)}>
        <ProfileIcon
          name="account-circle-outline"
          size={30}
          color={pressed === 'profile' ? '#fff' : '#35C6ED'}
        />
        <Text style={styles.profileIconTitleStyle(pressed)}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footerView: {
    height: 55,
    width: 360,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  homeIconTitleStyle: pressed => {
    return {
      color: pressed === 'home' ? '#fff' : '#35C6ED',
      fontSize: 10,
      fontWeight: 'bold',
    };
  },
  heartIconTitleStyle: pressed => {
    return {
      color: pressed === 'heart' ? '#fff' : '#35C6ED',
      fontSize: 10,
      fontWeight: 'bold',
    };
  },
  searchIconTitleStyle: pressed => {
    return {
      color: pressed === 'search' ? '#fff' : '#35C6ED',
      fontSize: 10,
      fontWeight: 'bold',
    };
  },
  profileIconTitleStyle: pressed => {
    return {
      color: pressed === 'profile' ? '#fff' : '#35C6ED',
      fontSize: 10,
      fontWeight: 'bold',
    };
  },
  homeIconViewStyle: pressed => {
    return {
      backgroundColor: pressed === 'home' ? '#35BEFA' : '#fff',
      borderTopLeftRadius: 25,
      height: 55,
      width: '25%',
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  heartIconViewStyle: pressed => {
    return {
      backgroundColor: pressed === 'heart' ? '#35BEFA' : '#fff',
      height: 55,
      width: '25%',
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  searchIconViewStyle: pressed => {
    return {
      backgroundColor: pressed === 'search' ? '#35BEFA' : '#fff',
      height: 55,
      width: '25%',
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  profileIconViewStyle: pressed => {
    return {
      backgroundColor: pressed === 'profile' ? '#35BEFA' : '#fff',
      height: 55,
      width: '25%',
      borderTopRightRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
});
