import {React, useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {fetchCollectionByCondition} from '../firebase/firebase';
import {BookingRequestItem, GoBackButton} from '../components';

function BookingRequestScreen({route, navigation}) {
  const [request, setRequest] = useState([]);
  const user = route.params.user;

  const fetchData = async () => {
    try {
      const hostId = user.id;
      const res_bookingItem = await fetchCollectionByCondition(
        'booking_request',
        {
          field: 'host_id',
          operator: '==',
          value: hostId,
        },
      );

      const propertyIds = res_bookingItem.map(item => item.property_id);
      const res_listings = await fetchCollectionByCondition('listing', {
        field: 'id',
        operator: 'in',
        value: propertyIds,
      });

      const guestIds = res_bookingItem.map(item => item.guest_id);
      const res_guest = await fetchCollectionByCondition('users', {
        field: 'id',
        operator: 'in',
        value: guestIds,
      });

      const combinedData = res_bookingItem.map(bookingItem => {
        const listing = res_listings.find(
          listingItem => listingItem.id === bookingItem.property_id,
        );
        const guest = res_guest.find(
          guestItem => guestItem.id === bookingItem.guest_id,
        );
        return {
          ...bookingItem,
          listing: listing || null,
          guest: guest || null,
        };
      });

      setRequest(combinedData);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <BookingRequestItem item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <GoBackButton navigation={navigation} />
      <FlatList
        data={request}
        renderItem={renderItem}
        keyExtractor={item => item.property_id}
      />
    </View>
  );
}

export default BookingRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
