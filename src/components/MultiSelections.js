import {React, useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function SelectionOptions({name, options, onSelect}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    onSelect(selectedOptions);
  }, [selectedOptions]);

  const toggleOption = option => {
    const index = selectedOptions.indexOf(option);
    if (index === -1) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    }
  };

  const isOptionSelected = option => selectedOptions.indexOf(option) !== -1;

  return (
    <View>
      <Text style={styles.inputText}>{name}</Text>

      <View style={styles.propertyTypeView}>
        {options.map((res, index) => {
          const selected = isOptionSelected(res.name);
          return (
            <TouchableOpacity
              key={index}
              style={[styles.propertyType, selected && styles.selectedOption]}
              onPress={() => toggleOption(res.name)}>
              <Text
                style={[
                  styles.propertyTypeText,
                  selected && styles.selectedOptionText,
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
    minWidth: 80,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: '#3DA7AE',
  },
  propertyTypeText: {
    color: '#3DA7AE',
  },
  selectedOptionText: {
    fontFamily: 'serif',
    fontSize: 16,
    color: '#fff',
  },
});
