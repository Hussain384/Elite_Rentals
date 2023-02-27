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
  return (
    <View style={styles.container}>
      <ScrollView style={styles.formView}>
        <Text> Property Listing</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formView: {
    backgroundColor: '#fff',
  },
});
