import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SubmitButton} from '../components';

export default function AddListingScreen({navigation}) {
  const [selectedForm, setSelectedForm] = useState(true);
  const [name, setName] = useState('');
  const [propType, setPropType] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  const [duration, setDuration] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.changeFormButton}>
        <TouchableOpacity
          style={styles.rentingFormButton(selectedForm)}
          onPress={() => setSelectedForm(true)}>
          <Text style={styles.formButtonText}>Rent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buyingFormButton(selectedForm)}
          onPress={() => setSelectedForm(false)}>
          <Text style={styles.formButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <ScrollView>
          <View style={{height: 100, width: '100%', backgroundColor: 'red'}}>
            <Text>Select Property Type</Text>
          </View>
        </ScrollView>
        <SubmitButton
          type="SUBMIT"
          onPress={() => navigation.navigate('HomeStack')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFF8FF',
    flex: 1,
    padding: 30,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderTopLeftRadius: 130,
    borderTopRightRadius: 130,
    padding: 30,
  },
  changeFormButton: {
    marginVertical: 10,
    alignSelf: 'center',
    height: 50,
    width: '90%',
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: '#6CDEFF',
  },
  rentingFormButton: selectedForm => {
    return {
      width: '50%',
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      height: '100%',
      backgroundColor:
        selectedForm === true ? '#20ACF2' : selectedForm === false && '#6CDEFF',
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  buyingFormButton: selectedForm => {
    return {
      backgroundColor:
        selectedForm === false ? '#20ACF2' : selectedForm === true && '#6CDEFF',
      width: '50%',
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  formButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
