import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {GoBackButton, PickerDropdown, SubmitButton} from '../components';
import {Calendar} from 'react-native-calendars';
import {NUMBERS_ARRAY} from '../Constants';

function BookingScreen({route, navigation}) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [guests, setGuests] = useState('1');

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    setSelectedStartDate(currentDate);
    setSelectedEndDate(currentDate);
  }, []);

  const handleDateSelect = date => {
    if (!selectedStartDate) {
      setSelectedStartDate(date.dateString);
    } else if (!selectedEndDate) {
      setSelectedEndDate(date.dateString);
    } else {
      setSelectedStartDate(date.dateString);
      setSelectedEndDate(null);
    }
  };
  const handleConfirmButton = () => {
    console.log('Selected Start Date:', selectedStartDate);
    console.log('Selected End Date:', selectedEndDate);
    console.log('No. of Guests:', guests);
  };

  const item = route.params.item;
  return (
    <ScrollView style={styles.container}>
      <GoBackButton navigation={navigation} />
      <View style={styles.item}>
        <Image source={{uri: item.imageUrl}} style={styles.picturesStyle} />
        <View style={styles.postInfoView}>
          <Text style={styles.postTitleStyle}>{item.name}</Text>
          <Text style={styles.postTextStyle}>{item.propertyType}</Text>
          <Text style={styles.postTextStyle}>{item.address}</Text>
          <Text style={styles.postTextStyle}>Per Night ${item.price}</Text>
        </View>
      </View>
      <View style={styles.selectionView}>
        <Text style={styles.title}>Your Trip</Text>
        <View style={styles.selectionInnerView}>
          <Text style={styles.selectionText}>Dates</Text>
          <View style={styles.dateInnerView}>
            <TextInput
              style={styles.dateInput}
              value={selectedStartDate ? selectedStartDate : ''}
              editable={false}
            />
            <TextInput
              style={styles.dateInput}
              value={selectedEndDate ? selectedEndDate : ''}
              editable={false}
            />
          </View>
          <Calendar
            onDayPress={handleDateSelect}
            markedDates={{
              [selectedStartDate]: {selected: true, startingDay: true},
              [selectedEndDate]: {selected: true, endingDay: true},
            }}
            markingType="custom"
            markedDatesStyle={styles.markedDatesStyle}
          />
        </View>
        <View style={styles.selectionInnerView}>
          <PickerDropdown
            name={'Guests'}
            type={guests}
            setState={setGuests}
            options={NUMBERS_ARRAY}
          />
        </View>
      </View>
      <View style={styles.buttonView}>
        <SubmitButton type={'Confirm Booking'} onPress={handleConfirmButton} />
      </View>
    </ScrollView>
  );
}

export default BookingScreen;

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
    height: '20%',
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
  selectionView: {
    padding: 20,
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginBottom: 5,
  },
  selectionInnerView: {
    marginBottom: 10,
  },
  selectionText: {
    color: '#000',
    fontSize: 23,
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  dateInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    width: '49%',
  },
  buttonView: {
    width: '100%',
    height: '15%',
    marginBottom: 50,
  },
  dateInput: {
    width: '45%',
    color: '#000',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
  markedDatesStyle: {
    borderRadius: 20,
    backgroundColor: '#3DA7AE',
  },
});
