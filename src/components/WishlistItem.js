import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const WishlistItem = ({item, navigation}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', {item: item})}>
        <Image source={{uri: item.imageUrl}} style={styles.picturesStyle} />
        <View style={styles.postInfoView}>
          <Text style={styles.postTitleStyle}>{item.name}</Text>
          <Text style={styles.postTextStyle}>{item.price}</Text>
          <Text style={styles.postTextStyle}>{item.address}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({
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
