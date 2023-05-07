import {React} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import RatingIcon from 'react-native-vector-icons/FontAwesome';
import FavouriteIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = ({item, navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Details', {item: item})}
    style={styles.item}>
    <TouchableOpacity style={styles.favouriteIconViewStyle}>
      <FavouriteIcon name="cards-heart-outline" size={20} color={'#fff'} />
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
          <RatingIcon name="star" size={14} color="#000" />
          <Text style={styles.postTitleStyle}>{item.ratings}</Text>
        </View>
      </View>
      <Text style={styles.postTextStyle}>{item.description}</Text>
      <Text style={styles.postTextStyle}>{item.price}</Text>
      <Text style={styles.postTextStyle}>{item.address}</Text>
    </View>
  </TouchableOpacity>
);

export default Item;

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
    flex: 1,
    borderRadius: 15,
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
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 8,
  },
  postInfoView: {
    paddingHorizontal: 10,
    height: '20%',
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
