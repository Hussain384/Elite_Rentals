import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import uuid from 'react-uuid';

const DATA = [
  {
    id: uuid(),
    title: 'Swat, Pakistan',
    image: require('../utilz/images/one.png'),
    discription: 'more information about post',
    timeDuration: '$25 per night',
  },
  {
    id: uuid(),
    title: 'Kashmir Pakistan',
    image: require('../utilz/images/two.png'),
    discription: 'more information about post',
    timeDuration: '$26 per night',
  },
  {
    id: uuid(),
    title: 'Kurram, KPK',
    image: require('../utilz/images/three.png'),
    discription: 'more information about post',
    timeDuration: '$28 per night',
  },
];

const Item = ({title, image, discription, timeDuration}) => (
  <View style={styles.item}>
    <Image source={image} style={styles.picturesStyle} />
    <View style={styles.postInfoView}>
      <Text style={styles.postTitleStyle}>{title}</Text>
      <Text style={styles.postTextStyle}>{discription}</Text>
      <Text style={styles.postTextStyle}>{timeDuration}</Text>
    </View>
  </View>
);

function WishListScreen({navigation}) {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      image={item.image}
      discription={item.discription}
      timeDuration={item.timeDuration}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default WishListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  picturesStyle: {
    width: '50%',
    height: 126,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 5,
  },
  item: {
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postInfoView: {
    paddingHorizontal: 10,
  },
  postTitleStyle: {
    marginBottom: 5,
    color: '#000',
    fontSize: 15,
  },
  postTextStyle: {
    color: 'grey',
    fontSize: 13,
  },
});
