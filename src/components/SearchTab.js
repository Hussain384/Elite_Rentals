import * as React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import SearchIcon from 'react-native-vector-icons/EvilIcons';

const SearchTab = () => {
  return (
    <View style={styles.searchTab}>
      <TextInput
        style={styles.inputTab}
        placeholder={'Search'}
        placeholderTextColor={'#7B7B7B'}
      />
      <TouchableOpacity style={styles.iconStyle}>
        <SearchIcon name={'search'} size={30} color={'#7B7B7B'} />
      </TouchableOpacity>
    </View>
  );
};
export default SearchTab;
const styles = StyleSheet.create({
  searchTab: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
  },
  inputTab: {
    width: '80%',
    paddingHorizontal: 20,
    fontSize: 17,
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '20%',
  },
});
