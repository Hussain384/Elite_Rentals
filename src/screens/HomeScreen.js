import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import MenuIcon from 'react-native-vector-icons/MaterialIcons';
import AddIcon from 'react-native-vector-icons/Entypo';
import RatingIcon from 'react-native-vector-icons/FontAwesome';
import uuid from 'react-uuid';

const DATA = [
  {
    id: uuid(),
    title: 'Swat, Pakistan',
    image: require('../utilz/images/one.png'),
    discription: 'more information about post',
    ratings: '5.2',
    timeDuration: '$25 per night',
  },
  {
    id: uuid(),
    title: 'Kashmir Pakistan',
    image: require('../utilz/images/two.png'),
    discription: 'more information about post',
    ratings: '3.5',
    timeDuration: '$26 per night',
  },
  {
    id: uuid(),
    title: 'Kurram, KPK',
    image: require('../utilz/images/three.png'),
    discription: 'more information about post',
    ratings: '2.4',
    timeDuration: '$28 per night',
  },
];

const Item = ({title, image, discription, ratings, timeDuration}) => (
  <View style={styles.item}>
    <Image
      source={image}
      style={{width: '100%', height: 300, borderRadius: 10, marginBottom: 5}}
    />
    <View style={styles.postInfo}>
      <View style={styles.titleAndRatingView}>
        <Text style={styles.postTitleStyle}>{title}</Text>
        <View style={styles.iconAndRatingsView}>
          <RatingIcon name="star" size={14} color="#000" />
          <Text style={styles.postRatingsStyle}>{ratings}</Text>
        </View>
      </View>
      <Text style={styles.postDiscriptionStyle}>{discription}</Text>
      <Text style={styles.postTimeDurationStyle}>{timeDuration}</Text>
    </View>
  </View>
);

function HomeScreen({navigation}) {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      image={item.image}
      discription={item.discription}
      ratings={item.ratings}
      timeDuration={item.timeDuration}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity style={styles.navigatorView}>
          <MenuIcon
            name="menu"
            size={30}
            color="#35C6ED"
            style={styles.MenuIconStyle}
          />
        </TouchableOpacity>
        <View style={styles.accountTitle}>
          <Text style={styles.accountTitleName}>Mr. Kiyaani</Text>
        </View>
        <TouchableOpacity
          style={styles.profileImageView}
          onPress={() => navigation.navigate('SignIn')}>
          <Image
            style={styles.profileImageStyle}
            source={require('../utilz/images/profileImage.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainBody}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          style={styles.AddIconStyle}
          onPress={() => navigation.navigate('AddListing')}>
          <AddIcon name="plus" size={35} color="#fff" />
        </TouchableOpacity>
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
    height: 50,
    paddingHorizontal: 5,
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 30,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
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
    height: 620,
  },
  accountTitleName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1CAAF1',
  },
  accountTitleDisc: {
    fontSize: 15,
    color: '#1CAAF1',
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
  item: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
  postInfo: {
    paddingHorizontal: 10,
  },
  postTitleStyle: {
    color: '#000',
    fontSize: 15,
  },
  postDiscriptionStyle: {
    color: 'grey',
    fontSize: 13,
  },
  postRatingsStyle: {
    color: '#000',
    fontSize: 13,
  },
  postTimeDurationStyle: {
    color: 'grey',
    fontSize: 13,
  },
  titleAndRatingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconAndRatingsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
});

//login page
