import {React, useState, useEffect} from 'react';
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
import storage from '@react-native-firebase/storage';

const Item = ({
  name,
  image,
  description,
  isFavorite,
  setIsFavorite,
  ratings,
  address,
  price,
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
    <Image
      source={image.imageUrl}
      style={styles.picturesStyle}
      resizeMode="contain"
    />

    <View style={styles.postInfoView}>
      <View style={styles.titleAndRatingView}>
        <Text style={styles.postTitleStyle}>{name.name}</Text>
        <View style={styles.iconAndRatingsView}>
          <RatingIcon name="star" size={14} color="#000" />
          <Text style={styles.postTitleStyle}>{ratings.ratings}</Text>
        </View>
      </View>
      <Text style={styles.postTextStyle}>{description.description}</Text>
      <Text style={styles.postTextStyle}>{price.price}</Text>
      <Text style={styles.postTextStyle}>{address.address}</Text>
    </View>
  </View>
);

function HomeScreen({navigation}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [listing, setListing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tempListing = [];

        await firestore()
          .collection('listing')
          .onSnapshot(querySnapshot => {
            querySnapshot.forEach(async documentSnapshot => {
              const {
                name,
                address,
                imageUrl,
                propertyType,
                beds,
                bathrooms,
                price,
              } = documentSnapshot.data();
              tempListing.push({
                id: documentSnapshot.id,
                name,
                ratings: '5.5',
                description: 'description.description',
                address,
                imageUrl,
                propertyType,
                beds,
                bathrooms,
                price,
              });
            });
            setListing(tempListing);
          });
      } catch (error) {
        error('error');
      }
    };
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <Item
      name={item.name}
      imageUrl={{uri: item.imageUrl}}
      description={item.description}
      ratings={item.ratings}
      address={item.address}
      price={item.price}
      isFavorite={isFavorite}
      setIsFavorite={setIsFavorite}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={listing}
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
