import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SubmitButton} from '../components';
import SegmentedControl from 'react-native-segmented-control-tab';

export default function AddListingScreen({navigation}) {
  const [selectedForm, setSelectedForm] = useState(true);
  const [name, setName] = useState('');
  const [propType, setPropType] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  const [duration, setDuration] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [propertySelectedValue, setPropertySelectedValue] = useState('');
  return (
    <View style={styles.container}>
      <SegmentedControl
        values={['Rent', 'Buy']}
        selectedIndex={selectedForm ? 0 : 1}
        onTabPress={index => setSelectedForm(index === 0)}
        tabsContainerStyle={styles.changeFormButton}
        tabTextStyle={styles.changeFormButtonText}
      />
      <View style={styles.formContainer}>
        <ScrollView>
          {selectedForm && (
            <View style={styles.formStyle}>
              <View>
                <Text>Type of property</Text>
                <View style={styles.propertyTypeView}>
                  <TouchableOpacity
                    onPress={() => setPropertySelectedValue('house')}
                    style={
                      propertySelectedValue === 'house'
                        ? styles.selectedButton
                        : styles.unselectedButton
                    }>
                    <Text>House</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setPropertySelectedValue('sharedHouse')}
                    style={
                      propertySelectedValue === 'sharedHouse'
                        ? styles.selectedButton
                        : styles.unselectedButton
                    }>
                    <Text>Shared House</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setPropertySelectedValue('farmHouse')}
                    style={
                      propertySelectedValue === 'farmHouse'
                        ? styles.selectedButton
                        : styles.unselectedButton
                    }>
                    <Text>Farm House</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          {!selectedForm && (
            <View
              style={{height: 100, width: '100%', backgroundColor: 'green'}}>
              <Text>Buy Form</Text>
            </View>
          )}
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
    width: '90%',
    height: 50,
  },
  changeFormButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  formButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  formStyle: {
    // height: 100,
    width: '100%',
    alignItems: 'center',
  },
  propertyTypeView: {
    flexDirection: 'row',
  },
  selectedButton: {
    backgroundColor: 'blue',
    padding: 5,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
  },
  unselectedButton: {
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
  },
});
