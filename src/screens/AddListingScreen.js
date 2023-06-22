import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Alert,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  InputTabs,
  PickerDropdown,
  SelectionOptions,
  AddPhoto,
  SubmitButton,
  MultiSelections,
} from '../components';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {NUMBERS_ARRAY, PROPERTY_ARRAY, FACILITIES_ARRAY} from '../Constants';
import storage from '@react-native-firebase/storage';
import {getCurrentUserId, insertIntoDocument} from '../firebase/firebase';

export default function AddListingScreen({navigation}) {
  const [bedrooms, setBedrooms] = useState('1');
  const [beds, setBeds] = useState('1');
  const [bathrooms, setBathrooms] = useState('1');
  const [propertyType, setPropertyType] = useState('House');
  const [facilities, setFacilities] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

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
    setUploading(true);
    setTransferred(0);
    const user_id = getCurrentUserId();
    const url = await uploadImage();
    let data = {
      name,
      address,
      bedrooms,
      beds,
      bathrooms,
      propertyType,
      facilities,
      description,
      price,
      imageUrl: url,
      user_id,
    };
    if (name === '') {
      Alert.alert('Please enter Name');
    } else if (address === '') {
      Alert.alert('Please enter address');
    } else if (imageUrl === '') {
      Alert.alert('Please add Photo');
    } else if (price === 0) {
      Alert.alert('Please enter Price');
    } else {
      await insertIntoDocument('listing', data);
      setBedrooms('1');
      setBeds('1');
      setBathrooms('1');
      setPropertyType('House');
      setFacilities([]);
      setImageUrl('');
      setAddress('');
      setName('');
      setDescription('');
      setPrice(0);
      Alert.alert(
        'Successfully!',
        'Your House is now listed and uploaded successfully',
      );
    }
    setUploading(false);
    navigation.goBack();
  };
  const uploadImage = async () => {
    const uploadUrl = imageUrl;
    let filename = uploadUrl.substring(uploadUrl.lastIndexOf('/') + 1);
    //filename withTimeStamp
    const extensionIndex = filename.lastIndexOf('.');
    const extension = filename.slice(extensionIndex);
    filename = `${Date.now()}${extension}`;

    const storageRef = storage().ref('/house_photos/' + filename);
    const task = storageRef.putFile(uploadUrl);
    // //set transfer state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;
      const url = await storageRef.getDownloadURL();
      return url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.formView}>
        {uploading ? (
          <View style={styles.activityContainer}>
            <ActivityIndicator
              size="large"
              color="#3DA7AE"
              style={styles.activityIndicator}
            />
            <Text style={styles.progressText}>Uploading: {transferred}%</Text>
          </View>
        ) : (
          <>
            <View style={styles.backButtonView}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackIcon name="chevron-back" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <SelectionOptions
              name={'Type Of Property'}
              options={PROPERTY_ARRAY}
              onSelect={handleSelectTypeOfProperty}
            />
            <View style={styles.selectionInnerView}>
              <PickerDropdown
                name={'Bedrooms'}
                type={bedrooms}
                setState={setBedrooms}
                options={NUMBERS_ARRAY}
              />
            </View>
            <View style={styles.selectionInnerView}>
              <PickerDropdown
                name={'Beds'}
                type={beds}
                setState={setBeds}
                options={NUMBERS_ARRAY}
              />
            </View>
            <View style={styles.selectionInnerView}>
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

            <SubmitButton type={'APPLY'} onPress={handleApplyButton} />
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  formView: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  formTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    color: '#000',
  },
  propertyTypeView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    alignSelf: 'center',
  },
  loadingView: {
    width: '100%',
    height: 500,
  },
  multiSelectionsView: {
    backgroundColor: 'green',
  },
  inputsView: {
    backgroundColor: 'red',
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
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    marginBottom: 10,
  },
  progressText: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#000',
  },
});
