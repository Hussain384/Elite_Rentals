import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import {SubmitButton} from '../components';

export default function AddListingScreen({navigation}) {
  const [name, onChangeName] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.formView}>
        <Text style={styles.formTitle}> Property Listing</Text>
        <View>
          <Text style={styles.inputText}>Name of your Property</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="property name"
          />
        </View>
        {/* <Pressable onPress={'onPressFunction'}>
          <Text>Click a picture</Text>
        </Pressable> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  formView: {
    backgroundColor: '#fff',
    padding: 5,
    height: 100,
  },
  formTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
  },
  inputText: {
    fontWeight: '500',
    fontSize: 15,
  },
});
