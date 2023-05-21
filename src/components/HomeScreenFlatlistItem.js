import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import RatingIcon from 'react-native-vector-icons/FontAwesome';
import FavoriteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {addToWishlist} from '../firebase/firebase';

const Item = ({item, navigation}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleWishlistToggle = listingId => {
    addToWishlist(listingId);
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {item: item})}
      style={styles.item}>
      <TouchableOpacity
        style={styles.favoriteIconViewStyle}
        onPress={() => handleWishlistToggle(item.id)}>
        <FavoriteIcon
          name={isFavorite ? 'cards-heart' : 'cards-heart-outline'}
          size={20}
          color={isFavorite ? 'red' : '#fff'}
        />
      </TouchableOpacity>
      <Image
        source={{uri: item.imageUrl}}
        style={styles.picturesStyle}
        resizeMode="contain"
      />
      <View style={styles.postInfoView}>
        <View style={styles.titleAndRatingView}>
          <Text style={styles.postTitleStyle}>{item.name}</Text>
          <View style={styles.iconAndRatingsView}>
            {/* <RatingIcon name="star" size={14} color="#000" />
            <Text style={styles.postTitleStyle}>{item.ratings}</Text> */}
          </View>
        </View>
        <Text style={styles.postTextStyle}>${item.price}</Text>
        <Text style={styles.postTextStyle}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  favoriteIconViewStyle: {
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
    height: 300,
    borderRadius: 15,
  },
  item: {
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  postInfoView: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  postTitleStyle: {
    color: '#000',
    fontSize: 17,
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
