import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import FavouriteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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

const Item = ({
  title,
  image,
  discription,
  ratings,
  isFavorite,
  setIsFavorite,
  timeDuration,
}) => (
  <View style={styles.item}>
    <TouchableOpacity
      style={styles.favouriteIconViewStyle}
      onPress={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? (
        <FavouriteIcon name="cards-heart" size={20} color="#3DA7AE" />
      ) : (
        <FavouriteIcon name="cards-heart-outline" size={20} color={'#fff'} />
      )}
    </TouchableOpacity>
    <Image source={image} style={styles.picturesStyle} />
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
  const [isFavorite, setIsFavorite] = useState([]);

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      image={item.image}
      discription={item.discription}
      ratings={item.ratings}
      timeDuration={item.timeDuration}
      isFavorite={isFavorite}
      setIsFavorite={setIsFavorite}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.accountTitleName}>Title</Text>
      </View>
      <View style={styles.mainBody}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableOpacity
          style={styles.AddIconStyle}
          onPress={() => navigation.navigate('AddListing')}>
          <AddIcon name="plus" size={35} color="#3DA7AE" />
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
    backgroundColor: '#fff',
  },
  headerView: {
    height: 50,
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
  favouriteIconViewStyle: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    right: 5,
    top: 5,
  },
  picturesStyle: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 5,
  },
  accountTitleName: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  accountTitleDisc: {
    fontSize: 15,
    color: '#3DA7AE',
  },
  AddIconStyle: {
    position: 'absolute',
    backgroundColor: '#fff',
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
