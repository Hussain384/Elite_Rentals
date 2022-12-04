import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Entypo';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddIcon from 'react-native-vector-icons/AntDesign';
import Footer from '../components/Footer';
import uuid from 'react-uuid';

const DATA = [
  {
    id: uuid(),
    title: 'First Item',
    image: 'Images Here',
    discription: 'more information about post',
    ratings: ' here are ratings that are given by administration',
    timeDuration: 'For how much time it is availible ',
  },
  {
    id: uuid(),
    title: 'Second Item',
    image: 'Images Here',
    discription: 'more information about post',
    ratings: ' here are ratings that are given by administration',
    timeDuration: 'For how much time it is availible ',
  },
  {
    id: uuid(),
    title: 'Third Item',
    image: 'Images Here',
    discription: 'more information about post',
    ratings: ' here are ratings that are given by administration',
    timeDuration: 'For how much time it is availible ',
  },
];

const Item = ({title, image, discription, ratings, timeDuration}) => (
  <View style={styles.item}>
    {/* <Text style={styles.postImageStyle}>{image}</Text> */}
    <Text style={styles.postTitleStyle}>{title}</Text>
    {/* <Text style={styles.postdiscriptionStyle}>{discription}</Text>
    <Text style={styles.postRatingsStyle}>{ratings}</Text>
    <Text style={styles.postTimeDurationStyle}>{timeDuration}</Text> */}
  </View>
);

function HomeScreen({navigation}) {
  const renderItem = ({item}) => (
    // <Item image={item.image} />
    <Item title={item.title} />
    // <Item title={item.discription} />
    // <Item title={item.ratings} />
    // <Item title={item.timeDuration} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.navigatorView}>
          <MenuIcon
            name="menu"
            size={35}
            color="#35C6ED"
            style={styles.MenuIconStyle}
          />
        </View>
        <TouchableOpacity
          style={styles.profileImageView}
          onPress={() => navigation.navigate('SignIn')}>
          <ProfileIcon
            name="account-circle-outline"
            size={45}
            color="#35C6ED"
            style={styles.profileImageStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainBody}>
        <View style={styles.accountTitle}>
          <Text style={styles.accountTitleName}>Hi Mr. Kiyaani</Text>
          <Text style={styles.accountTitleDisc}>Hope You are Doing well</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <AddIcon
          name="pluscircle"
          size={60}
          color="#35C6ED"
          style={styles.AddIconStyle}
        />
      </View>
      <Footer />
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
  mainBody: {
    height: 590,
  },
  accountTitle: {
    left: 30,
    width: '100%',
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
    position: 'absolute',
    // backgroundColor: '#',
    borderRadius: 50,
    right: 0,
    bottom: 15,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  postTitleStyle: {
    fontSize: 32,
  },
});
