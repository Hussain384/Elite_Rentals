import {React, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function SelectionOptions({name, options, onSelect}) {
  const [selectedProperty, setSelectedProperty] = useState('House');

  const handlePress = res => {
    setSelectedProperty(res.name);
    onSelect(res.name);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>{name}</Text>

      <View style={styles.propertyTypeView}>
        {options.map((res, index) => {
          return (
            <TouchableOpacity
              key={res.id}
              style={[
                styles.propertyType,
                selectedProperty === res.name && styles.selected,
              ]}
              onPress={() => handlePress(res)}>
              <Text
                style={[
                  styles.propertyTypeText,
                  selectedProperty === res.name && styles.selectedText,
                ]}>
                {res.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
    justifyContent: 'center',
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
    alignItems: 'center',
  },
  propertyType: {
    backgroundColor: '#fff',
    borderColor: '#3DA7AE',
    borderWidth: 2,
    minWidth: 50,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  propertyTypeText: {
    fontFamily: 'serif',
    fontSize: 16,
    color: '#3DA7AE',
  },
  selectedText: {
    color: '#fff',
  },
  selected: {
    backgroundColor: '#3DA7AE',
  },
});
