import React, {useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {GoBackButton, InputField, SubmitButton} from '../components';

function ResetPassScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <GoBackButton navigation={navigation} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.innerCont}>
            <View style={styles.title}>
              <Text style={styles.textForgetPass}>Reset Password</Text>
              <Text style={styles.textForgetPassEmail}>
                Create new password
              </Text>
            </View>
            <View style={styles.inputCont}>
              <Text style={styles.inputText}>Password</Text>
              <InputField
                type="Password"
                state={password}
                setState={setPassword}
              />
              <SubmitButton
                type="Change password"
                onPress={'HandleForgetPass'}
              />
            </View>
          </View>
        </>
      )}
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
export default ResetPassScreen;
