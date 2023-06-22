import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {GoBackButton, InputField, SubmitButton} from '../components';

function ForgetPassScreen({navigation}) {
  const [email, setEmail] = useState('');

  const handleForgetPass = () => {
    if (email !== '') {
      navigation.navigate('PassResetScreen', {email: email});
    } else {
      Alert.alert('Please enter Email');
    }
  };

  return (
    <View style={styles.container}>
      <GoBackButton navigation={navigation} />
      <View style={styles.innerCont}>
        <View style={styles.title}>
          <Text style={styles.textForgetPass}>Forget Password</Text>
          <Text style={styles.textForgetPassEmail}>
            We will send a rest password link {'\n'} to your email address.
          </Text>
        </View>
        <View style={styles.inputCont}>
          <Text style={styles.inputText}>Email</Text>
          <InputField type="Email" state={email} setState={setEmail} />
          <SubmitButton type="Send code" onPress={handleForgetPass} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  innerCont: {
    justifyContent: 'center',
    height: '90%',
  },
  inputText: {
    color: '#000',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 15,
  },
  title: {
    justifyContent: 'center',
    marginBottom: 20,
  },
  textForgetPass: {
    fontFamily: 'Montserrat',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
  },
  textForgetPassEmail: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#808080',
    fontSize: 13,
  },
});

export default ForgetPassScreen;
