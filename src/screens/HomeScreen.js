import {React, useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import AddIcon from 'react-native-vector-icons/Entypo';
import {fetchCollection} from '../firebase/firebase';
import Item from '../components/HomeScreenFlatlistItem';

function HomeScreen({navigation}) {
  const [listing, setListing] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetchCollection('listing');
      setListing(response);
    } catch (error) {
      error('error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => <Item item={item} navigation={navigation} />;
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
