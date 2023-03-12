import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function SelectionOptions({name, options}) {
  return (
    <View>
      <Text style={styles.inputText}>{name}</Text>

      <View style={styles.propertyTypeView}>
        {options.map((res, index) => {
          return (
            <TouchableOpacity style={styles.propertyType}>
              <Text style={styles.propertyTypeText}>{res.name}</Text>
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

    gap: 10,
  },
  propertyType: {
    backgroundColor: '#3DA7AE',
    // height: 50,
    // width: 60,
    minWidth: 80,
    paddingHorizontal: 10,
    paddingVertical: 15,
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  propertyTypeText: {
    fontFamily: 'serif',
    fontSize: 16,
    color: '#fff',
  },
});
