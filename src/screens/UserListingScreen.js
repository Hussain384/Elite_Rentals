import {React, useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {fetchCollectionByCondition} from '../firebase/firebase';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {UserListingItem} from '../components';

function UserListingScreen({route, navigation}) {
  const [listing, setListing] = useState([]);
  const user = route.params.user;
  const fetchData = async () => {
    try {
      let response = await fetchCollectionByCondition('listing', {
        field: 'user_id',
        operator: '==',
        value: user.id,
      });
      setListing(response);
    } catch (error) {
      error('error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <UserListingItem item={item} navigation={navigation} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.backButtonView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={listing}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default UserListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButtonView: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
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
});
