import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {SearchTab} from '../components';
import RatingIcon from 'react-native-vector-icons/FontAwesome';
import uuid from 'react-uuid';

const DATA = [
  {
    id: uuid(),
    title: 'Swat, Pakistan',
    image: require('../utilz/images/OnbordingPicture.png'),
    description: 'more information about post',
    ratings: '5.2',
    timeDuration: '$25 per night',
  },
  {
    id: uuid(),
    title: 'Kashmir Pakistan',
    image: require('../utilz/images/OnbordingPicture.png'),
    description: 'more information about post',
    ratings: '3.5',
    timeDuration: '$26 per night',
  },
  {
    id: uuid(),
    title: 'Kurram, KPK',
    image: require('../utilz/images/OnbordingPicture.png'),
    description: 'more information about post',
    ratings: '2.4',
    timeDuration: '$28 per night',
  },
];

const Item = ({title, image, description, ratings, timeDuration}) => (
  <View style={styles.item}>
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
    </View>
  </View>
);

export default function SearchScreen({navigation}) {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      image={item.image}
      description={item.description}
      ratings={item.ratings}
      timeDuration={item.timeDuration}
    />
  );
  return (
    <View style={styles.container}>
      <SearchTab />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  picturesStyle: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 5,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 10,
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
