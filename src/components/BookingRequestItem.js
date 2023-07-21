import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {deleteDocument} from '../firebase/firebase';
import {sendRemoteNotification} from '../../NotificationController';

const handleAcceptButton = async ({item}) => {
  try {
    await deleteDocument('booking_request', item.id);
  } catch (error) {
    console.error('Server response is empty:', error);
  }
  let fcm_token = item.guest.fcm_token;
  if (fcm_token) {
    try {
      sendRemoteNotification(
        fcm_token,
        'Booking Request Accepted',
        'Congratulations! your booking request in accepted by host. You can now get with in contact with host. For contact number visit Application.',
      );
      Alert.alert(
        'Notification Sent',
        'The notification has been sent to the guest.',
      );
    } catch (error) {
      console.log('Error sending notification:', error);
    }
  }
};
const handleRejectButton = async ({item}) => {
  try {
    await deleteDocument('booking_request', item.id);
  } catch (error) {
    console.error('Error removing booking request:', error);
  }
  let fcm_token = item.guest.fcm_token;
  if (fcm_token) {
    try {
      sendRemoteNotification(
        fcm_token,
        'Booking Request Rejected',
        'Sorry, your booking request is cancelled by host. Visit to application you can find more hosts.',
      );
      Alert.alert(
        'Notification Sent',
        'The notification has been sent to the guest.',
      );
    } catch (error) {
      console.log('Error sending notification:', error);
    }
  }
};

const BookingRequestItem = ({item, navigation}) => (
  <View style={styles.container}>
    <View style={styles.item}>
      <View style={styles.picturesStyleView}>
        <Image
          source={{uri: item.guest.photoUrl}}
          style={styles.picturesStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.postInfoView}>
        <Text style={styles.postTitleStyle}>
          {item.guest.firstName} {item.guest.lastName}
        </Text>
        <Text style={styles.postTextStyle}>Address: {item.guest.address}</Text>
        <Text style={styles.postTextStyle}>Contact: {item.guest.contact}</Text>
        <Text style={styles.postTextStyle}>
          Number of Guests: {item.number_of_guests}
        </Text>
        <Text style={styles.postTextStyle}>
          Requested for:
          {item.listing.name ? (
            <>
              <Text>{item.listing.name}</Text>
            </>
          ) : (
            <Text>Property Deleted</Text>
          )}
        </Text>
        <Text style={styles.postTextStyle}>
          Booking Dates: {'\n'}
          {item.checkInDate} to {item.checkOutDate}
        </Text>
      </View>
    </View>
    <View style={styles.bookingInfoView}>
      <Text style={styles.postTextStyle}>
        {item.guest.firstName} {item.guest.lastName} wants to be your guest, and
        requested for booking to{' '}
        {item.listing.propertyType ? (
          <>
            <Text>{item.listing.propertyType}</Text>
          </>
        ) : (
          <Text>Property Deleted</Text>
        )}{' '}
        you listed by name{' '}
        {item.listing.name ? (
          <>
            <Text>{item.listing.name}</Text>
          </>
        ) : (
          <Text>Property Deleted</Text>
        )}
        . He wants to book from
        {item.checkInDate} to {item.checkOutDate}.
      </Text>
    </View>
    <View style={styles.buttonView}>
      <TouchableOpacity
        style={styles.rejectButtonStyle}
        onPress={() => handleRejectButton({item})}>
        <Text style={styles.buttonText}>Reject</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.acceptButtonStyle}
        onPress={() => handleAcceptButton({item})}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default BookingRequestItem;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    padding: 5,
  },
  item: {
    height: '50%',
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  picturesStyleView: {
    width: '27%',
    borderTopLeftRadius: 10,
    justifyContent: 'center',
  },
  postInfoView: {
    borderTopRightRadius: 10,
    padding: 20,
    height: '100%',
    width: '73%',
  },
  bookingInfoView: {
    padding: 10,
    height: '30%',
    width: '100%',
  },
  buttonView: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '20%',
    width: '100%',
  },
  rejectButtonStyle: {
    height: '90%',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA4646',
    borderRadius: 15,
  },
  acceptButtonStyle: {
    height: '90%',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#468046',
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  picturesStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  postTitleStyle: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  postTextStyle: {
    color: 'grey',
    fontSize: 13,
  },
});
