import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import IconEmail from 'react-native-vector-icons/Foundation';
import IconPassword from 'react-native-vector-icons/Ionicons';

function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  function SubmitEnteredData() {
    console.log(
      'You tapped the button!',
      '>>Email:',
      {email},
      '>>Password:',
      {password},
      '>>Confirm Password:',
      {confirmPass},
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello!</Text>
      <Text style={styles.info}>Register your self</Text>
      <View style={styles.signUpForm}>
        <View style={styles.formTitleView}>
          <Text style={styles.formTitle}>Signup</Text>
          <View style={styles.dashLine} />
        </View>
        <View style={styles.inputCont}>
          <View style={styles.inputField}>
            <IconEmail
              style={styles.iconStyle}
              name="mail"
              size={22}
              color="#38C7ED"
            />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#CDCDCD"
            />
          </View>
          <View style={styles.inputField}>
            <IconPassword
              style={styles.iconStyle}
              name="eye-off"
              size={20}
              color="#38C7ED"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#CDCDCD"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputField}>
            <IconPassword
              style={styles.iconStyle}
              name="eye-off"
              size={20}
              color="#38C7ED"
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPass}
              onChangeText={setConfirmPass}
              secureTextEntry={true}
              placeholderTextColor="#CDCDCD"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.submitButtonView}
          onPress={() => SubmitEnteredData()}>
          <Text style={styles.submitButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFF8FF',
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  greeting: {
    alignSelf: 'center',
    color: '#20ACF2',
    fontSize: 40,
    fontWeight: 'bold',
  },
  info: {
    alignSelf: 'center',
    color: '#20ACF2',
    marginBottom: 20,
  },

  formTitleView: {
    alignItems: 'flex-end',
  },
  formTitle: {
    color: '#000',
    fontSize: 30,
    fontWeight: '450',
  },
  dashLine: {
    height: 5,
    width: 93,
    backgroundColor: '#54CFEF',
    borderRadius: 5,
    marginVertical: 10,
  },
  signUpForm: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderTopLeftRadius: 180,
    padding: 30,
  },
  inputCont: {
    marginVertical: 20,
  },
  inputField: {
    flexDirection: 'row',
    borderBottomWidth: 5,
    borderBottomColor: '#E6E6E6',
    marginBottom: 15,
  },
  input: {
    width: '90%',
    height: '100%',
    color: '#000',
    fontSize: 15,
  },
  iconStyle: {
    alignSelf: 'center',
    width: '10%',
  },
  submitButtonView: {
    backgroundColor: '#3BC8ED',
    height: 45,
    width: 110,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 88,
    bottom: -20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  signInButtonText: {
    color: '#57D0EF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  signInButton: {
    alignSelf: 'center',
    marginTop: 45,
  },
});

export default SignUp;
