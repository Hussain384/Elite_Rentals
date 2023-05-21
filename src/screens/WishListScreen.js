import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import uuid from 'react-uuid';
import {fetchWishlistItems} from '../firebase/firebase';

function WishListScreen({navigation}) {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const items = await fetchWishlistItems();
      setWishlistItems(items);
    };

    fetchWishlist();
  }, []);

  useEffect(() => {
    const fetchWishlist = async () => {
      const items = await fetchWishlistItems();
      setWishlistItems(items);
    };

    const unsubscribe = navigation.addListener('focus', fetchWishlist);

    return unsubscribe;
  }, [navigation]);

  const Item = ({name, imageUrl, price, address}) => (
    <View style={styles.item}>
      <Image source={{uri: imageUrl}} style={styles.picturesStyle} />
      <View style={styles.postInfoView}>
        <Text style={styles.postTitleStyle}>{name}</Text>
        <Text style={styles.postTextStyle}>{price}</Text>
        <Text style={styles.postTextStyle}>{address}</Text>
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      name={item.name}
      imageUrl={item.imageUrl}
      price={item.price}
      address={item.address}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlistItems}
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
