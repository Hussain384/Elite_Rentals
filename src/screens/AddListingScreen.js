import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  InputTabs,
  PickerDropdown,
  SelectionOptions,
  AddPhoto,
  SubmitButton,
  MultiSelections,
} from '../components';
import {NUMBERS_ARRAY, PROPERTY_ARRAY, FACILITIES_ARRAY} from '../Constants';

export default function AddListingScreen({navigation}) {
  const [bedrooms, setBedrooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [propertyType, setPropertyType] = useState('House');
  const [facilities, setFacilities] = useState([]);
  const [photoUrl, setPhotoUrl] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [discription, setDiscription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddressChange = text => {
    setAddress(text);
  };

  const handleNameChange = text => {
    setName(text);
  };

  const handleDiscriptionChange = text => {
    setDiscription(text);
  };

  const handlePriceChange = text => {
    setPrice(text);
  };

  const handleApplyButton = () => {
    console.log('Your listing in Added!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log('Type of Property: ', propertyType);
    console.log('Your Place Offers: ', facilities);
    console.log('No. of Bedrooms: ', bedrooms);
    console.log('No. of Beds: ', beds);
    console.log('No. of Bathrooms: ', bathrooms);
    console.log('Address of your Property: ', address);
    console.log('Title of your Property: ', name);
    console.log('Discription: ', discription);
    console.log('PhotoURL: ', photoUrl);
    console.log('Charges per night: ', price);
  };

  const handleSelectTypeOfProperty = selectedOption => {
    setPropertyType(selectedOption);
  };

  const handleSelectFacilities = selectedOption => {
    setFacilities(selectedOption);
  };

  const handleOnselectPhoto = url => {
    setPhotoUrl(url);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.formView}>
        <SelectionOptions
          name={'Type Of Property'}
          options={PROPERTY_ARRAY}
          onSelect={handleSelectTypeOfProperty}
        />

        <View style={styles.selectionView}>
          <PickerDropdown
            name={'Bedrooms'}
            type={bedrooms}
            setState={setBedrooms}
            options={NUMBERS_ARRAY}
          />
        </View>
        <View style={styles.selectionView}>
          <PickerDropdown
            name={'Beds'}
            type={beds}
            setState={setBeds}
            options={NUMBERS_ARRAY}
          />
        </View>
        <View style={styles.selectionView}>
          <PickerDropdown
            name={'Bathrooms'}
            type={bathrooms}
            setState={setBathrooms}
            options={NUMBERS_ARRAY}
          />
        </View>

        <MultiSelections
          name={'What your Place offers'}
          options={FACILITIES_ARRAY}
          onSelect={handleSelectFacilities}
        />

        <InputTabs
          name={'Address'}
          placeholder={'property address'}
          onChangeText={handleAddressChange}
        />
        <InputTabs
          name={'Name'}
          placeholder={'Title for property'}
          onChangeText={handleNameChange}
        />
        <InputTabs
          name={'Discription'}
          placeholder={'discription'}
          onChangeText={handleDiscriptionChange}
        />

        <AddPhoto name={'Add Photo'} onSelect={handleOnselectPhoto} />

        <InputTabs
          name={'Price (Rs)'}
          placeholder={'charges per night'}
          onChangeText={handlePriceChange}
        />

        <SubmitButton type={'APPLY'} onPress={handleApplyButton} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formView: {
    padding: 20,
    backgroundColor: '#fff',
  },
  formTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  inputText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    marginVertical: 10,
    color: '#000',
  },
  propertyTypeView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    alignSelf: 'center',
  },
  propertyType: {
    backgroundColor: '#3DA7AE',
    height: 50,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  propertyTypeText: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    color: '#000',
  },
  selectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  selectionTextView: {
    width: '50%',
  },
  selectionDropdownView: {
    alignItems: 'center',
    width: '50%',
  },
  dropDown: {
    backgroundColor: '#3DA7AE',
    width: 100,
  },
});
