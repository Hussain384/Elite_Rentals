import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import FavoriteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = ({item, navigation}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkIsFavorite();
  }, []);

  const checkIsFavorite = async () => {
    try {
      const wishlistItems = await AsyncStorage.getItem('wishlist');
      const parsedWishlistItems = wishlistItems
        ? JSON.parse(wishlistItems)
        : [];

      const filteredWishlistItems = parsedWishlistItems.filter(
        wishlistItem => wishlistItem !== null,
      );

      const isInWishlist = filteredWishlistItems.some(
        wishlistItem => wishlistItem === item.id,
      );
      setIsFavorite(isInWishlist);
    } catch (error) {
      console.log('Error checking wishlist:', error);
    }
  };

  const handleWishlistToggle = async () => {
    try {
      const wishlistItems = await AsyncStorage.getItem('wishlist');
      const parsedWishlistItems = JSON.parse(wishlistItems) || [];

      if (isFavorite) {
        // Remove item from wishlist
        const updatedWishlist = parsedWishlistItems.filter(
          wishlistItem => wishlistItem !== item.id,
        );
        await AsyncStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      } else {
        // Add item to wishlist
        const updatedWishlist = [...parsedWishlistItems, item.id];
        await AsyncStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log('Error toggling wishlist:', error);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {item: item})}
      style={styles.item}>
      <TouchableOpacity
        style={styles.favoriteIconViewStyle}
        onPress={handleWishlistToggle}>
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
        <Text style={styles.postTitleStyle}>{item.name}</Text>
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
    backgroundColor: '#F6F6F6',
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
});
