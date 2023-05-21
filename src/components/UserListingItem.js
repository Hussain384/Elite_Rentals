import {React} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {deleteDocument} from '../firebase/firebase';

const UserListingItem = ({item, navigation}) => (
  <View style={styles.item}>
    <TouchableOpacity
      onPress={() => deleteDocument('listing', item.id)}
      style={styles.DeleteIconViewStyle}>
      <DeleteIcon name="delete" size={30} color={'red'} />
    </TouchableOpacity>
    <Image
      source={{uri: item.imageUrl}}
      style={styles.picturesStyle}
      resizeMode="contain"
    />
    <View style={styles.postInfoView}>
      <Text style={styles.postTitleStyle}>{item.name}</Text>
      <Text style={styles.postTextStyle}>{item.description}</Text>
      <Text style={styles.postTextStyle}>${item.price}</Text>
      <Text style={styles.postTextStyle}>{item.address}</Text>
      <Text style={styles.postTextStyle}>{item.id}</Text>
    </View>
  </View>
);

export default UserListingItem;

const styles = StyleSheet.create({
  DeleteIconViewStyle: {
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
});
