import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SearchTab} from '../components';
import {fetchCollectionByConditionWithMultiQuery} from '../firebase/firebase';

const Item = ({name, imageUrl, price, navigation, address, item}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Details', {item})}
    style={styles.item}>
    <Image
      source={{uri: imageUrl}}
      style={styles.picturesStyle}
      resizeMode="contain"
    />
    <View style={styles.postInfoView}>
      <Text style={styles.postTitleStyle}>{name}</Text>
      <Text style={styles.postTextStyle}>${price}</Text>
      <Text style={styles.postTextStyle}>{address}</Text>
    </View>
  </TouchableOpacity>
);

export default function SearchScreen({navigation}) {
  const [activeButton, setActiveButton] = useState('House');
  const [filteredItems, setFilteredItems] = useState([]);
  const [price, setPrice] = useState('');

  const handleSearch = searchResponse => {
    setPrice(searchResponse);
    console.log('Price:', searchResponse);
  };

  useEffect(() => {
    const fetchData = async () => {
      let queries = [
        {
          field: 'propertyType',
          operator: '==',
          value: activeButton,
        },
      ];

      if (price !== '') {
        queries.push({
          field: 'price',
          operator: '<=',
          value: parseInt(price),
        });
      }

      let response = await fetchCollectionByConditionWithMultiQuery(
        'listing',
        queries,
      );
      setFilteredItems(response);
    };

    fetchData();
  }, [activeButton, price]);

  const renderItem = ({item}) => (
    <Item
      name={item.name}
      imageUrl={item.imageUrl}
      price={item.price}
      address={item.address}
      navigation={navigation}
    />
  );

  const renderButton = (label, widthValue) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        activeButton === label ? styles.activeButton : styles.inactiveButton,
        {width: widthValue},
      ]}
      onPress={() => setActiveButton(label)}>
      <Text style={styles.filterButtonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <SearchTab onSearch={handleSearch} />
        <View style={styles.filterButtonView}>
          {renderButton('House', '25%')}
          {renderButton('Farm House', '35%')}
          {renderButton('Shared House', '40%')}
        </View>
      </View>
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 20,
  },
  searchView: {
    height: 120,
    marginBottom: 10,
  },
  filterButtonView: {
    marginTop: 5,
    flexDirection: 'row',
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButton: {
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#337572',
  },
  inactiveButton: {
    backgroundColor: '#3DA7AE',
  },
  filterButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  picturesStyle: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 5,
  },
  item: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginVertical: 10,
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
