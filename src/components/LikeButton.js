import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import FavouriteIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const LikeButton = ({item, favoriteList, onAddToFavorites}) => {
  // Check if the item is already in the favorite list
  const isFavorite = favoriteList.some(
    favoriteItem => favoriteItem.id === item.id,
  );

  return (
    <TouchableOpacity onPress={() => onAddToFavorites(item)}>
      <Text style={isFavorite ? styles.favoriteText : styles.regularText}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </Text>
      {isFavorite ? (
        <FavouriteIcon name="cards-heart" size={20} color="#3DA7AE" />
      ) : (
        <FavouriteIcon name="cards-heart-outline" size={20} color={'#fff'} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  regularText: {
    color: 'gray',
  },
  favoriteText: {
    color: 'red',
  },
});

export default LikeButton;
