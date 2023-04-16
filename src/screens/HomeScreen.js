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
import firestore from '@react-native-firebase/firestore';

const DATA = [
  {
    id: uuid(),
    title: 'my house',
    image: require('../utilz/images/one.png'),
    description: 'more information about post',
    address: 'hayatabad pehswaer',
    ratings: '5.3',
    timeDuration: '$344 per night',
  },
];

const Item = ({
  title,
  image,
  description,
  isFavorite,
  setIsFavorite,
  ratings,
  address,
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
    <View style={styles.postInfoView}>
      <View style={styles.titleAndRatingView}>
        <Text style={styles.postTitleStyle}>{title}</Text>
        <View style={styles.iconAndRatingsView}>
          <RatingIcon name="star" size={14} color="#000" />
          <Text style={styles.postTitleStyle}>{ratings}</Text>
        </View>
      </View>
      <Text style={styles.postTextStyle}>{description}</Text>
      <Text style={styles.postTextStyle}>{timeDuration}</Text>
      <Text style={styles.postTextStyle}>{address}</Text>
    </View>
  </View>
);

function HomeScreen({navigation}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      image={item.image}
      description={item.description}
      ratings={item.ratings}
      address={item.address}
      timeDuration={item.timeDuration}
      isFavorite={isFavorite}
      setIsFavorite={setIsFavorite}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity
        style={styles.AddIconStyle}
        onPress={() => navigation.navigate('AddListing')}>
        <AddIcon name="plus" size={35} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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
  AddIconStyle: {
    position: 'absolute',
    backgroundColor: '#3DA7AE',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    right: 10,
    bottom: 10,
  },
  item: {
    backgroundColor: '#F5FBFB',
    marginVertical: 10,
    marginHorizontal: 8,
  },
  postInfoView: {
    paddingHorizontal: 10,
  },
  postTitleStyle: {
    color: '#000',
    fontSize: 15,
  },
  postTextStyle: {
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
});
