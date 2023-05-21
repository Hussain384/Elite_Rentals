import {React, useState, useCallback} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import AddIcon from 'react-native-vector-icons/Entypo';
import {fetchCollection} from '../firebase/firebase';
import Item from '../components/HomeScreenFlatlistItem';
import {useFocusEffect} from '@react-navigation/native';

function HomeScreen({navigation}) {
  const [listing, setListing] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          let response = await fetchCollection('listing');
          setListing(response);
        } catch (error) {
          error('error');
        }
      };
      fetchData();
    }, []),
  );

  const renderItem = ({item}) => <Item item={item} navigation={navigation} />;
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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
