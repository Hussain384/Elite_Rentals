import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Alert,
  ActivityIndicator,
  Text,
} from 'react-native';
import {
  InputTabs,
  PickerDropdown,
  SelectionOptions,
  AddPhoto,
  SubmitButton,
  MultiSelections,
} from '../components';
import {NUMBERS_ARRAY, PROPERTY_ARRAY, FACILITIES_ARRAY} from '../Constants';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

export default function AddListingScreen({navigation}) {
  const [bedrooms, setBedrooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [propertyType, setPropertyType] = useState('House');
  const [facilities, setFacilities] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const handleAddressChange = text => {
    setAddress(text);
  };

  const handleNameChange = text => {
    setName(text);
  };

  const handleDescriptionChange = text => {
    setDescription(text);
  };

  const handlePriceChange = text => {
    setPrice(text);
  };
  const handleSelectTypeOfProperty = selectedOption => {
    setPropertyType(selectedOption);
  };

  const handleSelectFacilities = selectedOption => {
    setFacilities(selectedOption);
  };

  const handleOnselectPhoto = url => {
    setImageUrl(url);
  };

  const handleApplyButton = async () => {
    const url = await uploadImage();
    firestore()
      .collection('listing')
      .add({
        name: {name},
        address: {address},
        bedrooms: {bedrooms},
        beds: {beds},
        bathrooms: {bathrooms},
        propertyType: {propertyType},
        facilities: {facilities},
        description: {description},
        price: {price},
        imageUrl: {url},
      })
      .then(() => {
        console.log('Listing added!');
        setBedrooms(1);
        setBeds(1);
        setBathrooms(1);
        setPropertyType('House');
        setFacilities([]);
        setImageUrl('');
        setAddress('');
        setName('');
        setDescription('');
        setPrice('');
        setUploading(false);
        Alert.alert(
          'Successfully!',
          'Your House is now listed and uploaded successfully',
        );
      });
    navigation.goBack();
  };
  const uploadImage = async () => {
    const uploadUrl = imageUrl;
    let filename = uploadUrl.substring(uploadUrl.lastIndexOf('/') + 1);
    //filename withTimeStamp
    const extensionIndex = filename.lastIndexOf('.');
    const extension = filename.slice(extensionIndex);
    filename = `${Date.now()}${extension}`;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref('/house_photos/' + filename);
    const task = storageRef.putFile(uploadUrl);
    //set transfer state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    setUploading(false);
    setTransferred(null);
    try {
      await task;
      const url = await storageRef.getDownloadURL();
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
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
          name={'Description'}
          placeholder={'description'}
          onChangeText={handleDescriptionChange}
        />

        <AddPhoto name={'Add Photo'} onSelect={handleOnselectPhoto} />

        <InputTabs
          name={'Price (Rs)'}
          placeholder={'charges per night'}
          onChangeText={handlePriceChange}
        />

        {uploading ? (
          <View style={styles.activityIndicatorView}>
            <Text>{transferred} is Completed!</Text>
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : (
          <SubmitButton type={'APPLY'} onPress={handleApplyButton} />
        )}
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
  activityIndicatorView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
