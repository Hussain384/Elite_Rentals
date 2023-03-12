import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {
  InputTabs,
  PickerDropdown,
  SelectionOptions,
  AddPhoto,
  SubmitButton,
} from '../components';
import {NUMBERS_ARRAY, PROPERTY_ARRAY, FACILITIES_ARRAY} from '../Constants';

export default function AddListingScreen({navigation}) {
  const [bedrooms, setBedrooms] = useState();
  const [beds, setBeds] = useState();
  const [bathrooms, setBathrooms] = useState();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.formView}>
        <SelectionOptions name={'Type Of Property'} options={PROPERTY_ARRAY} />

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

        <SelectionOptions
          name={'What your Place offers'}
          options={FACILITIES_ARRAY}
        />

        <InputTabs name={'Address'} />
        <InputTabs name={'Name'} />
        <InputTabs name={'Discription'} />

        <AddPhoto name={'Add Photo'} />

        <InputTabs name={'Price (Rs)'} />

        <SubmitButton type={'APPLY'} onPress={''} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formView: {
    backgroundColor: '#fff',
    padding: 20,
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
