import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Entypo';
import HomeIcon from 'react-native-vector-icons/Octicons';
import HeartIcon from 'react-native-vector-icons/Octicons';
import SearchIcon from 'react-native-vector-icons/Octicons';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddIcon from 'react-native-vector-icons/AntDesign';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.navigatorView}>
          <MenuIcon name="menu" size={35} color="#35C6ED" />
        </View>
        <View style={styles.profileImageView}>
          <ProfileIcon
            name="account-circle-outline"
            size={45}
            color="#35C6ED"
          />
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.accountTitle}>
          <Text style={styles.accountTitleName}>Hi Mr. Kiyaani</Text>
          <Text style={styles.accountTitleDisc}>Hope You are Doing well</Text>
        </View>
      </View>
      <View style={styles.footerView}>
        <HomeIcon name="home" size={25} color="#35C6ED" />
        <HeartIcon
          name="heart"
          size={25}
          color="#35C6ED"
          style={styles.HeartIconStyle}
        />
        <View style={styles.AddIconStyle}>
          <AddIcon name="pluscircleo" size={60} color="#35C6ED" />
        </View>

        <SearchIcon name="search" size={25} color="#35C6ED" />
        <ProfileIcon name="account-circle-outline" size={30} color="#35C6ED" />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#DFF8FF',
  },
  headerView: {
    height: 60,
    padding: 5,
    marginBottom: 30,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 30,
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  navigatorView: {
    height: 50,
    width: 50,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
  },
  profileImageView: {
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    height: 590,
  },
  accountTitle: {
    left: 30,
    width: '100%',
  },
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
  accountTitleName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1CAAF1',
  },
  accountTitleDisc: {
    fontSize: 15,
    color: '#1CAAF1',
  },
  AddIconStyle: {
    alignSelf: 'center',
    height: 70,
    bottom: 30,
    backgroundColor: '#fff',
    borderWidth: 5,
    borderRadius: 50,
    borderColor: '#fff',
  },
  HeartIconStyle: {
    // marginRight: 70,
  },
});
